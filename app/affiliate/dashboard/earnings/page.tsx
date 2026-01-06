"use client"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AffiliateDashboardLayout from '@/components/AffiliateDashboardLayout'
import { supabase, Affiliate } from '@/lib/supabase'
import { DollarSign, Clock, CheckCircle, XCircle, Send, Wallet } from 'lucide-react'

interface PayoutRequest {
    id: string
    amount: number
    status: string
    payment_method: string
    payment_details: string
    requested_at: string
    reviewed_at: string | null
    paid_at: string | null
    admin_notes: string | null
    transaction_reference: string | null
}

export default function AffiliateEarnings() {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [affiliate, setAffiliate] = useState<Affiliate | null>(null)
    const [payoutRequests, setPayoutRequests] = useState<PayoutRequest[]>([])
    const [showRequestPayout, setShowRequestPayout] = useState(false)
    const [requestAmount, setRequestAmount] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
            router.push('/affiliate/login')
            return
        }

        const { data: affiliateData } = await supabase
            .from('affiliates')
            .select('*')
            .eq('id', user.id)
            .single()

        if (affiliateData) {
            setAffiliate(affiliateData)

            const { data: payoutsData } = await supabase
                .from('payout_requests')
                .select('*')
                .eq('affiliate_id', user.id)
                .order('requested_at', { ascending: false })

            setPayoutRequests(payoutsData || [])
        }

        setLoading(false)
    }

    const availableBalance = affiliate ? (affiliate.total_earnings - affiliate.total_paid) : 0
    const pendingPayouts = payoutRequests
        .filter(p => p.status === 'pending' || p.status === 'approved')
        .reduce((sum, p) => sum + p.amount, 0)
    const withdrawableBalance = availableBalance - pendingPayouts

    const handleRequestPayout = async () => {
        if (!affiliate) return

        const amount = parseFloat(requestAmount)
        if (isNaN(amount) || amount <= 0) {
            setError('Please enter a valid amount')
            return
        }

        if (amount > withdrawableBalance) {
            setError('Amount exceeds your available balance')
            return
        }

        if (amount < 50) {
            setError('Minimum payout amount is GH₵ 50')
            return
        }

        setSubmitting(true)
        setError(null)

        let paymentDetails = ''
        if (affiliate.payment_method === 'momo') {
            paymentDetails = `${affiliate.momo_provider}: ${affiliate.momo_number}`
        } else {
            paymentDetails = `${affiliate.bank_name}: ${affiliate.bank_account_number} (${affiliate.bank_account_name})`
        }

        const { error: insertError } = await supabase
            .from('payout_requests')
            .insert({
                affiliate_id: affiliate.id,
                amount,
                payment_method: affiliate.payment_method || 'momo',
                payment_details: paymentDetails,
                status: 'pending'
            })

        if (insertError) {
            setError(insertError.message)
            setSubmitting(false)
            return
        }

        setSuccess(true)
        setRequestAmount('')
        setShowRequestPayout(false)
        loadData()

        setTimeout(() => setSuccess(false), 3000)
        setSubmitting(false)
    }

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'pending':
                return <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700"><Clock className="w-3 h-3" /> Pending</span>
            case 'approved':
                return <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700"><CheckCircle className="w-3 h-3" /> Approved</span>
            case 'paid':
                return <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700"><CheckCircle className="w-3 h-3" /> Paid</span>
            case 'rejected':
                return <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700"><XCircle className="w-3 h-3" /> Rejected</span>
            default:
                return null
        }
    }

    if (loading) {
        return (
            <AffiliateDashboardLayout>
                <div className="flex items-center justify-center h-64">
                    <div className="text-slate-400">Loading...</div>
                </div>
            </AffiliateDashboardLayout>
        )
    }

    return (
        <AffiliateDashboardLayout>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-navy">Earnings & Payouts</h1>
                <p className="text-slate-500">View your earnings and request payouts.</p>
            </div>

            {success && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700">
                    Payout request submitted successfully! We'll review it shortly.
                </div>
            )}

            {/* Balance Cards */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                            <DollarSign className="w-5 h-5 text-emerald-600" />
                        </div>
                        <span className="text-slate-500 text-sm">Total Earned</span>
                    </div>
                    <p className="text-2xl font-bold text-navy">GH₵ {affiliate?.total_earnings?.toLocaleString() || 0}</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-slate-500 text-sm">Total Paid Out</span>
                    </div>
                    <p className="text-2xl font-bold text-navy">GH₵ {affiliate?.total_paid?.toLocaleString() || 0}</p>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-white p-5 rounded-2xl border border-emerald-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                            <Wallet className="w-5 h-5 text-emerald-600" />
                        </div>
                        <span className="text-emerald-700 text-sm font-semibold">Available to Withdraw</span>
                    </div>
                    <p className="text-2xl font-bold text-navy">GH₵ {withdrawableBalance.toLocaleString()}</p>
                </div>
            </div>

            {/* Request Payout Section */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h2 className="text-lg font-bold text-navy mb-1">Request Payout</h2>
                        <p className="text-slate-500 text-sm">
                            Payment to: {affiliate?.payment_method === 'momo'
                                ? `${affiliate?.momo_provider} - ${affiliate?.momo_number}`
                                : affiliate?.bank_name ? `${affiliate?.bank_name} - ${affiliate?.bank_account_number}` : 'Not configured'
                            }
                        </p>
                    </div>
                    {!showRequestPayout ? (
                        <button
                            onClick={() => setShowRequestPayout(true)}
                            disabled={withdrawableBalance < 50}
                            className="flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-full transition-all shadow-lg shadow-emerald-500/20"
                        >
                            <Send className="w-4 h-4" />
                            Request Payout
                        </button>
                    ) : (
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">GH₵</span>
                                <input
                                    type="number"
                                    value={requestAmount}
                                    onChange={(e) => setRequestAmount(e.target.value)}
                                    placeholder="0.00"
                                    min="50"
                                    max={withdrawableBalance}
                                    className="w-40 pl-14 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-navy focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                                />
                            </div>
                            <button
                                onClick={handleRequestPayout}
                                disabled={submitting}
                                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-white font-semibold rounded-xl transition-all"
                            >
                                {submitting ? 'Submitting...' : 'Submit'}
                            </button>
                            <button
                                onClick={() => { setShowRequestPayout(false); setError(null) }}
                                className="px-4 py-3 text-slate-400 hover:text-navy transition-all"
                            >
                                Cancel
                            </button>
                        </div>
                    )}
                </div>
                {error && (
                    <div className="mt-4 p-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm">
                        {error}
                    </div>
                )}
                {withdrawableBalance < 50 && (
                    <p className="mt-4 text-slate-500 text-sm">Minimum payout amount is GH₵ 50. Keep referring to unlock payouts!</p>
                )}
            </div>

            {/* Payout History */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-5 border-b border-slate-100">
                    <h2 className="text-lg font-bold text-navy">Payout History</h2>
                </div>

                {payoutRequests.length === 0 ? (
                    <div className="p-10 text-center">
                        <Clock className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                        <p className="text-slate-600 font-medium mb-2">No payout requests yet</p>
                        <p className="text-slate-400 text-sm">Request your first payout when you have earnings!</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="text-left text-xs font-bold text-slate-500 uppercase tracking-wider px-5 py-3">Date</th>
                                    <th className="text-left text-xs font-bold text-slate-500 uppercase tracking-wider px-5 py-3">Amount</th>
                                    <th className="text-left text-xs font-bold text-slate-500 uppercase tracking-wider px-5 py-3">Method</th>
                                    <th className="text-left text-xs font-bold text-slate-500 uppercase tracking-wider px-5 py-3">Status</th>
                                    <th className="text-left text-xs font-bold text-slate-500 uppercase tracking-wider px-5 py-3">Reference</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {payoutRequests.map((payout) => (
                                    <tr key={payout.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-5 py-4 text-slate-600">
                                            {new Date(payout.requested_at).toLocaleDateString()}
                                        </td>
                                        <td className="px-5 py-4 text-emerald-600 font-bold">
                                            GH₵ {payout.amount.toLocaleString()}
                                        </td>
                                        <td className="px-5 py-4 text-slate-600 capitalize">
                                            {payout.payment_method}
                                        </td>
                                        <td className="px-5 py-4">
                                            {getStatusBadge(payout.status)}
                                        </td>
                                        <td className="px-5 py-4 text-slate-400 text-sm">
                                            {payout.transaction_reference || '-'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </AffiliateDashboardLayout>
    )
}

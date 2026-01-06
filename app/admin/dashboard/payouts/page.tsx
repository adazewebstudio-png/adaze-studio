"use client"
import { useEffect, useState } from 'react'
import AdminDashboardLayout from '@/components/AdminDashboardLayout'
import { supabase } from '@/lib/supabase'
import { CheckCircle, XCircle, Clock, DollarSign } from 'lucide-react'

export default function AdminPayouts() {
    const [loading, setLoading] = useState(true)
    const [payouts, setPayouts] = useState<any[]>([])
    const [filter, setFilter] = useState('all')

    useEffect(() => {
        loadPayouts()
    }, [])

    const loadPayouts = async () => {
        const { data } = await supabase
            .from('payout_requests')
            .select('*, affiliates(full_name, email, momo_provider, momo_number, bank_name, bank_account_number)')
            .order('requested_at', { ascending: false })

        if (data) setPayouts(data)
        setLoading(false)
    }

    const filteredPayouts = filter === 'all'
        ? payouts
        : payouts.filter(p => p.status === filter)

    const updateStatus = async (id: string, status: string, affiliateId: string, amount: number) => {
        const updates: any = { status }
        if (status === 'approved') updates.reviewed_at = new Date().toISOString()
        if (status === 'paid') {
            updates.paid_at = new Date().toISOString()

            // Update affiliate's total_paid
            const { data: affiliate } = await supabase
                .from('affiliates')
                .select('total_paid')
                .eq('id', affiliateId)
                .single()

            if (affiliate) {
                await supabase
                    .from('affiliates')
                    .update({ total_paid: (affiliate.total_paid || 0) + amount })
                    .eq('id', affiliateId)
            }
        }

        await supabase.from('payout_requests').update(updates).eq('id', id)
        loadPayouts()
    }

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'approved':
                return <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs"><CheckCircle className="w-3 h-3" /> Approved</span>
            case 'paid':
                return <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs"><DollarSign className="w-3 h-3" /> Paid</span>
            case 'rejected':
                return <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-red-500/10 text-red-400 text-xs"><XCircle className="w-3 h-3" /> Rejected</span>
            default:
                return <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs"><Clock className="w-3 h-3" /> Pending</span>
        }
    }

    if (loading) {
        return (
            <AdminDashboardLayout>
                <div className="flex items-center justify-center h-64">
                    <div className="text-slate-400">Loading payouts...</div>
                </div>
            </AdminDashboardLayout>
        )
    }

    return (
        <AdminDashboardLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-white">Payout Requests</h1>
                        <p className="text-slate-400 text-sm">{payouts.length} total requests</p>
                    </div>
                    <div className="flex gap-2">
                        {['all', 'pending', 'approved', 'paid', 'rejected'].map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-colors ${filter === f ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Payouts Table */}
                <div className="bg-slate-800/50 border border-white/5 rounded-2xl overflow-hidden">
                    {filteredPayouts.length === 0 ? (
                        <div className="p-12 text-center text-slate-500">No payout requests found</div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-white/5">
                                        <th className="text-left px-6 py-4 text-slate-400 text-xs uppercase tracking-wider font-semibold">Affiliate</th>
                                        <th className="text-left px-6 py-4 text-slate-400 text-xs uppercase tracking-wider font-semibold">Amount</th>
                                        <th className="text-left px-6 py-4 text-slate-400 text-xs uppercase tracking-wider font-semibold">Method</th>
                                        <th className="text-left px-6 py-4 text-slate-400 text-xs uppercase tracking-wider font-semibold">Payment Details</th>
                                        <th className="text-left px-6 py-4 text-slate-400 text-xs uppercase tracking-wider font-semibold">Date</th>
                                        <th className="text-left px-6 py-4 text-slate-400 text-xs uppercase tracking-wider font-semibold">Status</th>
                                        <th className="text-right px-6 py-4 text-slate-400 text-xs uppercase tracking-wider font-semibold">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredPayouts.map((payout) => (
                                        <tr key={payout.id} className="border-b border-white/5 hover:bg-white/5">
                                            <td className="px-6 py-4">
                                                <div>
                                                    <p className="text-white font-medium">{payout.affiliates?.full_name}</p>
                                                    <p className="text-slate-500 text-sm">{payout.affiliates?.email}</p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-emerald-400 font-bold text-lg">GH₵ {payout.amount.toLocaleString()}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-white capitalize">{payout.payment_method}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                {payout.payment_method === 'momo' ? (
                                                    <div>
                                                        <p className="text-slate-300">{payout.affiliates?.momo_provider}</p>
                                                        <p className="text-slate-500 text-sm">{payout.affiliates?.momo_number}</p>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <p className="text-slate-300">{payout.affiliates?.bank_name}</p>
                                                        <p className="text-slate-500 text-sm">{payout.affiliates?.bank_account_number}</p>
                                                    </div>
                                                )}
                                            </td>
                                            <td className="px-6 py-4">
                                                <p className="text-slate-400 text-sm">
                                                    {new Date(payout.requested_at).toLocaleDateString()}
                                                </p>
                                            </td>
                                            <td className="px-6 py-4">
                                                {getStatusBadge(payout.status)}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                {payout.status === 'pending' && (
                                                    <div className="flex justify-end gap-2">
                                                        <button
                                                            onClick={() => updateStatus(payout.id, 'approved', payout.affiliate_id, payout.amount)}
                                                            className="px-3 py-1 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 rounded-lg text-sm font-medium"
                                                        >
                                                            Approve
                                                        </button>
                                                        <button
                                                            onClick={() => updateStatus(payout.id, 'rejected', payout.affiliate_id, payout.amount)}
                                                            className="px-3 py-1 bg-red-500/10 text-red-400 hover:bg-red-500/20 rounded-lg text-sm font-medium"
                                                        >
                                                            Reject
                                                        </button>
                                                    </div>
                                                )}
                                                {payout.status === 'approved' && (
                                                    <button
                                                        onClick={() => updateStatus(payout.id, 'paid', payout.affiliate_id, payout.amount)}
                                                        className="px-3 py-1 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 rounded-lg text-sm font-medium"
                                                    >
                                                        Mark as Paid
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </AdminDashboardLayout>
    )
}

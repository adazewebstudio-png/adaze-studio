"use client"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase, Affiliate, Referral } from '@/lib/supabase'
import {
    LayoutDashboard, Users, DollarSign, Plus, LogOut, Menu, X,
    Search, CheckCircle, Clock, AlertCircle, CreditCard, Eye
} from 'lucide-react'

interface PayoutRequest {
    id: string
    affiliate_id: string
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

export default function AdminDashboard() {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [affiliates, setAffiliates] = useState<Affiliate[]>([])
    const [referrals, setReferrals] = useState<Referral[]>([])
    const [payoutRequests, setPayoutRequests] = useState<PayoutRequest[]>([])
    const [activeTab, setActiveTab] = useState<'affiliates' | 'referrals' | 'payouts'>('affiliates')
    const [showAddReferral, setShowAddReferral] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [processingPayout, setProcessingPayout] = useState<string | null>(null)

    useEffect(() => {
        checkAdmin()
    }, [])

    const checkAdmin = async () => {
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
            router.push('/affiliate/login')
            return
        }

        loadData()
    }

    const loadData = async () => {
        // Load all affiliates
        const { data: affiliatesData } = await supabase
            .from('affiliates')
            .select('*')
            .order('created_at', { ascending: false })

        setAffiliates(affiliatesData || [])

        // Load all referrals
        const { data: referralsData } = await supabase
            .from('referrals')
            .select('*')
            .order('created_at', { ascending: false })

        setReferrals(referralsData || [])

        // Load all payout requests
        const { data: payoutsData } = await supabase
            .from('payout_requests')
            .select('*')
            .order('requested_at', { ascending: false })

        setPayoutRequests(payoutsData || [])
        setLoading(false)
    }

    const handleAddReferral = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        const affiliateId = formData.get('affiliate_id') as string
        const clientName = formData.get('client_name') as string
        const clientEmail = formData.get('client_email') as string
        const projectType = formData.get('project_type') as string
        const projectValue = parseFloat(formData.get('project_value') as string)
        const commissionRate = 20
        const commissionAmount = projectValue * (commissionRate / 100)

        const { error } = await supabase
            .from('referrals')
            .insert({
                affiliate_id: affiliateId,
                client_name: clientName,
                client_email: clientEmail,
                project_type: projectType,
                project_value: projectValue,
                commission_rate: commissionRate,
                commission_amount: commissionAmount,
                status: 'pending'
            })

        if (!error) {
            setShowAddReferral(false)
            loadData()
        }
    }

    const updateReferralStatus = async (referralId: string, status: string) => {
        const updates: any = { status }

        if (status === 'confirmed') {
            updates.confirmed_at = new Date().toISOString()

            // Update affiliate's total_earnings
            const referral = referrals.find(r => r.id === referralId)
            if (referral) {
                const affiliate = affiliates.find(a => a.id === referral.affiliate_id)
                if (affiliate) {
                    await supabase
                        .from('affiliates')
                        .update({
                            total_earnings: (affiliate.total_earnings || 0) + referral.commission_amount
                        })
                        .eq('id', affiliate.id)
                }
            }
        } else if (status === 'paid') {
            updates.paid_at = new Date().toISOString()

            // Update affiliate's total_paid
            const referral = referrals.find(r => r.id === referralId)
            if (referral) {
                const affiliate = affiliates.find(a => a.id === referral.affiliate_id)
                if (affiliate) {
                    await supabase
                        .from('affiliates')
                        .update({
                            total_paid: (affiliate.total_paid || 0) + referral.commission_amount
                        })
                        .eq('id', affiliate.id)
                }
            }
        }

        await supabase
            .from('referrals')
            .update(updates)
            .eq('id', referralId)

        loadData()
    }

    const handlePayoutAction = async (payoutId: string, action: 'approve' | 'reject' | 'paid', reference?: string) => {
        setProcessingPayout(payoutId)

        const payout = payoutRequests.find(p => p.id === payoutId)
        if (!payout) return

        const updates: any = {
            reviewed_at: new Date().toISOString()
        }

        if (action === 'approve') {
            updates.status = 'approved'
        } else if (action === 'reject') {
            updates.status = 'rejected'
        } else if (action === 'paid') {
            updates.status = 'paid'
            updates.paid_at = new Date().toISOString()
            updates.transaction_reference = reference || 'Manual Transfer'

            // Update affiliate's total_paid
            const affiliate = affiliates.find(a => a.id === payout.affiliate_id)
            if (affiliate) {
                await supabase
                    .from('affiliates')
                    .update({
                        total_paid: (affiliate.total_paid || 0) + payout.amount
                    })
                    .eq('id', affiliate.id)
            }
        }

        await supabase
            .from('payout_requests')
            .update(updates)
            .eq('id', payoutId)

        setProcessingPayout(null)
        loadData()
    }

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push('/')
    }

    const filteredAffiliates = affiliates.filter(a =>
        a.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.referral_code.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const filteredReferrals = referrals.filter(r =>
        r.client_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.client_email.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const pendingPayouts = payoutRequests.filter(p => p.status === 'pending').length
    const approvedPayouts = payoutRequests.filter(p => p.status === 'approved').length

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-white">Loading Admin Panel...</div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-950 flex">
            {/* Sidebar */}
            <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-slate-900 border-r border-white/10 transform transition-transform lg:transform-none ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                <div className="flex flex-col h-full">
                    <div className="p-6 border-b border-white/10">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-xl font-bold text-white">Admin Panel</h1>
                                <p className="text-sm text-amber-400">Affiliate Management</p>
                            </div>
                            <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-slate-400">
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    <nav className="flex-1 p-4 space-y-1">
                        <button
                            onClick={() => setActiveTab('affiliates')}
                            className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'affiliates'
                                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <Users className="w-5 h-5" />
                            Affiliates ({affiliates.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('referrals')}
                            className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'referrals'
                                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <DollarSign className="w-5 h-5" />
                            Referrals ({referrals.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('payouts')}
                            className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'payouts'
                                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <CreditCard className="w-5 h-5" />
                                Payouts
                            </div>
                            {(pendingPayouts + approvedPayouts) > 0 && (
                                <span className="px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-bold">
                                    {pendingPayouts + approvedPayouts}
                                </span>
                            )}
                        </button>
                    </nav>

                    <div className="p-4 border-t border-white/10">
                        <Link href="/" className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all text-sm font-medium mb-2">
                            <Eye className="w-5 h-5" />
                            View Website
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
                        >
                            <LogOut className="w-5 h-5" />
                            Sign Out
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-h-screen">
                {/* Top Bar */}
                <header className="h-16 border-b border-white/10 bg-slate-900/50 backdrop-blur-sm flex items-center px-6 sticky top-0 z-30">
                    <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-slate-400 hover:text-white mr-4">
                        <Menu className="w-6 h-6" />
                    </button>

                    <div className="flex-1 flex items-center gap-4">
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50"
                            />
                        </div>
                    </div>

                    {activeTab === 'referrals' && (
                        <button
                            onClick={() => setShowAddReferral(true)}
                            className="flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-500 text-white font-semibold rounded-lg transition-all"
                        >
                            <Plus className="w-4 h-4" />
                            Add Referral
                        </button>
                    )}
                </header>

                {/* Content */}
                <div className="flex-1 p-6">
                    {activeTab === 'affiliates' && (
                        <div className="bg-slate-900/50 rounded-2xl border border-white/10 overflow-hidden">
                            <div className="p-5 border-b border-white/10">
                                <h2 className="text-lg font-bold text-white">All Affiliates</h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-slate-900">
                                        <tr>
                                            <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">Affiliate</th>
                                            <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">Code</th>
                                            <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">Payment Info</th>
                                            <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">Earnings</th>
                                            <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">Paid</th>
                                            <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">Balance</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {filteredAffiliates.map((affiliate) => (
                                            <tr key={affiliate.id} className="hover:bg-white/5">
                                                <td className="px-5 py-4">
                                                    <p className="text-white font-medium">{affiliate.full_name}</p>
                                                    <p className="text-slate-500 text-sm">{affiliate.email}</p>
                                                </td>
                                                <td className="px-5 py-4">
                                                    <span className="font-mono text-emerald-400">{affiliate.referral_code}</span>
                                                </td>
                                                <td className="px-5 py-4 text-slate-300 text-sm">
                                                    {affiliate.payment_method === 'momo'
                                                        ? `${affiliate.momo_provider || 'MoMo'}: ${affiliate.momo_number || 'N/A'}`
                                                        : affiliate.payment_method === 'bank'
                                                            ? `${affiliate.bank_name || 'Bank'}: ${affiliate.bank_account_number || 'N/A'}`
                                                            : 'Not set'
                                                    }
                                                </td>
                                                <td className="px-5 py-4 text-emerald-400 font-semibold">
                                                    GH₵ {(affiliate.total_earnings || 0).toLocaleString()}
                                                </td>
                                                <td className="px-5 py-4 text-slate-300">
                                                    GH₵ {(affiliate.total_paid || 0).toLocaleString()}
                                                </td>
                                                <td className="px-5 py-4 text-white font-semibold">
                                                    GH₵ {((affiliate.total_earnings || 0) - (affiliate.total_paid || 0)).toLocaleString()}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activeTab === 'referrals' && (
                        <div className="bg-slate-900/50 rounded-2xl border border-white/10 overflow-hidden">
                            <div className="p-5 border-b border-white/10">
                                <h2 className="text-lg font-bold text-white">All Referrals</h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-slate-900">
                                        <tr>
                                            <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">Client</th>
                                            <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">Affiliate</th>
                                            <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">Project</th>
                                            <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">Commission</th>
                                            <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">Status</th>
                                            <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {filteredReferrals.map((referral) => {
                                            const affiliate = affiliates.find(a => a.id === referral.affiliate_id)
                                            return (
                                                <tr key={referral.id} className="hover:bg-white/5">
                                                    <td className="px-5 py-4">
                                                        <p className="text-white font-medium">{referral.client_name}</p>
                                                        <p className="text-slate-500 text-sm">{referral.client_email}</p>
                                                    </td>
                                                    <td className="px-5 py-4 text-slate-300">
                                                        {affiliate?.full_name || 'Unknown'}
                                                    </td>
                                                    <td className="px-5 py-4 text-slate-300">{referral.project_type}</td>
                                                    <td className="px-5 py-4">
                                                        <p className="text-emerald-400 font-semibold">GH₵ {referral.commission_amount.toLocaleString()}</p>
                                                        <p className="text-slate-500 text-xs">of GH₵ {referral.project_value.toLocaleString()}</p>
                                                    </td>
                                                    <td className="px-5 py-4">
                                                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${referral.status === 'paid'
                                                                ? 'bg-emerald-500/10 text-emerald-400'
                                                                : referral.status === 'confirmed'
                                                                    ? 'bg-yellow-500/10 text-yellow-400'
                                                                    : 'bg-slate-500/10 text-slate-400'
                                                            }`}>
                                                            {referral.status.charAt(0).toUpperCase() + referral.status.slice(1)}
                                                        </span>
                                                    </td>
                                                    <td className="px-5 py-4">
                                                        <div className="flex items-center gap-2">
                                                            {referral.status === 'pending' && (
                                                                <button
                                                                    onClick={() => updateReferralStatus(referral.id, 'confirmed')}
                                                                    className="px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-lg text-xs font-semibold hover:bg-yellow-500/20 transition-all"
                                                                >
                                                                    Confirm
                                                                </button>
                                                            )}
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activeTab === 'payouts' && (
                        <div className="bg-slate-900/50 rounded-2xl border border-white/10 overflow-hidden">
                            <div className="p-5 border-b border-white/10">
                                <h2 className="text-lg font-bold text-white">Payout Requests</h2>
                            </div>

                            {payoutRequests.length === 0 ? (
                                <div className="p-10 text-center">
                                    <CreditCard className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                                    <p className="text-slate-400">No payout requests yet</p>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-slate-900">
                                            <tr>
                                                <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">Affiliate</th>
                                                <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">Amount</th>
                                                <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">Payment To</th>
                                                <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">Requested</th>
                                                <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">Status</th>
                                                <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5">
                                            {payoutRequests.map((payout) => {
                                                const affiliate = affiliates.find(a => a.id === payout.affiliate_id)
                                                return (
                                                    <tr key={payout.id} className="hover:bg-white/5">
                                                        <td className="px-5 py-4">
                                                            <p className="text-white font-medium">{affiliate?.full_name || 'Unknown'}</p>
                                                            <p className="text-slate-500 text-sm">{affiliate?.email}</p>
                                                        </td>
                                                        <td className="px-5 py-4 text-emerald-400 font-bold text-lg">
                                                            GH₵ {payout.amount.toLocaleString()}
                                                        </td>
                                                        <td className="px-5 py-4">
                                                            <p className="text-white">{payout.payment_details}</p>
                                                            <p className="text-slate-500 text-xs capitalize">{payout.payment_method}</p>
                                                        </td>
                                                        <td className="px-5 py-4 text-slate-400 text-sm">
                                                            {new Date(payout.requested_at).toLocaleDateString()}
                                                        </td>
                                                        <td className="px-5 py-4">
                                                            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${payout.status === 'paid'
                                                                    ? 'bg-emerald-500/10 text-emerald-400'
                                                                    : payout.status === 'approved'
                                                                        ? 'bg-amber-500/10 text-amber-400'
                                                                        : payout.status === 'rejected'
                                                                            ? 'bg-red-500/10 text-red-400'
                                                                            : 'bg-yellow-500/10 text-yellow-400'
                                                                }`}>
                                                                {payout.status === 'pending' && <Clock className="w-3 h-3" />}
                                                                {payout.status === 'approved' && <CheckCircle className="w-3 h-3" />}
                                                                {payout.status === 'paid' && <CheckCircle className="w-3 h-3" />}
                                                                {payout.status.charAt(0).toUpperCase() + payout.status.slice(1)}
                                                            </span>
                                                        </td>
                                                        <td className="px-5 py-4">
                                                            <div className="flex items-center gap-2">
                                                                {payout.status === 'pending' && (
                                                                    <>
                                                                        <button
                                                                            onClick={() => handlePayoutAction(payout.id, 'approve')}
                                                                            disabled={processingPayout === payout.id}
                                                                            className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-lg text-xs font-semibold hover:bg-amber-500/20 transition-all disabled:opacity-50"
                                                                        >
                                                                            Approve
                                                                        </button>
                                                                        <button
                                                                            onClick={() => handlePayoutAction(payout.id, 'reject')}
                                                                            disabled={processingPayout === payout.id}
                                                                            className="px-3 py-1 bg-red-500/10 text-red-400 rounded-lg text-xs font-semibold hover:bg-red-500/20 transition-all disabled:opacity-50"
                                                                        >
                                                                            Reject
                                                                        </button>
                                                                    </>
                                                                )}
                                                                {payout.status === 'approved' && (
                                                                    <button
                                                                        onClick={() => handlePayoutAction(payout.id, 'paid', 'Manual Transfer')}
                                                                        disabled={processingPayout === payout.id}
                                                                        className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-lg text-xs font-semibold hover:bg-emerald-500/20 transition-all disabled:opacity-50"
                                                                    >
                                                                        Mark as Paid
                                                                    </button>
                                                                )}
                                                                {payout.status === 'paid' && payout.transaction_reference && (
                                                                    <span className="text-slate-500 text-xs">Ref: {payout.transaction_reference}</span>
                                                                )}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </main>

            {/* Add Referral Modal */}
            {showAddReferral && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-slate-900 rounded-2xl border border-white/10 w-full max-w-lg">
                        <div className="p-6 border-b border-white/10 flex justify-between items-center">
                            <h3 className="text-xl font-bold text-white">Add New Referral</h3>
                            <button onClick={() => setShowAddReferral(false)} className="text-slate-400 hover:text-white">
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <form onSubmit={handleAddReferral} className="p-6 space-y-4">
                            <div>
                                <label className="text-sm font-medium text-slate-300 mb-2 block">Affiliate</label>
                                <select
                                    name="affiliate_id"
                                    required
                                    className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500/50"
                                >
                                    <option value="">Select Affiliate...</option>
                                    {affiliates.map(a => (
                                        <option key={a.id} value={a.id}>{a.full_name} ({a.referral_code})</option>
                                    ))}
                                </select>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-slate-300 mb-2 block">Client Name</label>
                                    <input
                                        type="text"
                                        name="client_name"
                                        required
                                        className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500/50"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-slate-300 mb-2 block">Client Email</label>
                                    <input
                                        type="email"
                                        name="client_email"
                                        required
                                        className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500/50"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-slate-300 mb-2 block">Project Type</label>
                                    <select
                                        name="project_type"
                                        required
                                        className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500/50"
                                    >
                                        <option value="Website Design">Website Design</option>
                                        <option value="Web Application">Web Application</option>
                                        <option value="Mobile App">Mobile App</option>
                                        <option value="Real Estate Website">Real Estate Website</option>
                                        <option value="E-Commerce">E-Commerce</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-slate-300 mb-2 block">Project Value (GH₵)</label>
                                    <input
                                        type="number"
                                        name="project_value"
                                        required
                                        min="0"
                                        step="0.01"
                                        className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500/50"
                                    />
                                </div>
                            </div>
                            <p className="text-sm text-slate-400">Commission will be calculated at 20% automatically.</p>
                            <button
                                type="submit"
                                className="w-full py-3 bg-amber-500 hover:bg-amber-500 text-white font-semibold rounded-lg transition-all"
                            >
                                Add Referral
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

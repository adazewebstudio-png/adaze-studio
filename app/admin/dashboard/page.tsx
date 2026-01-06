"use client"
import { useEffect, useState } from 'react'
import AdminDashboardLayout from '@/components/AdminDashboardLayout'
import { supabase } from '@/lib/supabase'
import { Users, DollarSign, TrendingUp, Clock } from 'lucide-react'

interface Stats {
    totalAffiliates: number
    activeAffiliates: number
    totalEarnings: number
    totalPaid: number
    pendingPayouts: number
    totalReferrals: number
    pendingReferrals: number
}

export default function AdminDashboard() {
    const [loading, setLoading] = useState(true)
    const [stats, setStats] = useState<Stats>({
        totalAffiliates: 0,
        activeAffiliates: 0,
        totalEarnings: 0,
        totalPaid: 0,
        pendingPayouts: 0,
        totalReferrals: 0,
        pendingReferrals: 0
    })
    const [recentAffiliates, setRecentAffiliates] = useState<any[]>([])
    const [pendingPayouts, setPendingPayouts] = useState<any[]>([])

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        // Load affiliates
        const { data: affiliates } = await supabase
            .from('affiliates')
            .select('*')
            .order('created_at', { ascending: false })

        // Load referrals
        const { data: referrals } = await supabase
            .from('referrals')
            .select('*')

        // Load payout requests
        const { data: payouts } = await supabase
            .from('payout_requests')
            .select('*, affiliates(full_name, email)')
            .eq('status', 'pending')
            .order('requested_at', { ascending: false })

        if (affiliates) {
            const totalEarnings = affiliates.reduce((sum, a) => sum + (a.total_earnings || 0), 0)
            const totalPaid = affiliates.reduce((sum, a) => sum + (a.total_paid || 0), 0)
            const activeCount = affiliates.filter(a => a.is_active).length

            setStats({
                totalAffiliates: affiliates.length,
                activeAffiliates: activeCount,
                totalEarnings,
                totalPaid,
                pendingPayouts: payouts?.length || 0,
                totalReferrals: referrals?.length || 0,
                pendingReferrals: referrals?.filter(r => r.status === 'pending').length || 0
            })

            setRecentAffiliates(affiliates.slice(0, 5))
        }

        if (payouts) {
            setPendingPayouts(payouts.slice(0, 5))
        }

        setLoading(false)
    }

    if (loading) {
        return (
            <AdminDashboardLayout>
                <div className="flex items-center justify-center h-64">
                    <div className="text-slate-400">Loading dashboard...</div>
                </div>
            </AdminDashboardLayout>
        )
    }

    return (
        <AdminDashboardLayout>
            <div className="space-y-8">
                {/* Stats Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-slate-800/50 border border-white/5 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                <Users className="w-5 h-5 text-blue-400" />
                            </div>
                            <span className="text-slate-400 text-sm">Total Affiliates</span>
                        </div>
                        <p className="text-3xl font-bold text-white">{stats.totalAffiliates}</p>
                        <p className="text-sm text-slate-500 mt-1">{stats.activeAffiliates} active</p>
                    </div>

                    <div className="bg-slate-800/50 border border-white/5 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-emerald-400" />
                            </div>
                            <span className="text-slate-400 text-sm">Total Referrals</span>
                        </div>
                        <p className="text-3xl font-bold text-white">{stats.totalReferrals}</p>
                        <p className="text-sm text-slate-500 mt-1">{stats.pendingReferrals} pending</p>
                    </div>

                    <div className="bg-slate-800/50 border border-white/5 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                                <DollarSign className="w-5 h-5 text-purple-400" />
                            </div>
                            <span className="text-slate-400 text-sm">Total Commissions</span>
                        </div>
                        <p className="text-3xl font-bold text-white">GH₵ {stats.totalEarnings.toLocaleString()}</p>
                        <p className="text-sm text-slate-500 mt-1">GH₵ {stats.totalPaid.toLocaleString()} paid out</p>
                    </div>

                    <div className="bg-slate-800/50 border border-white/5 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                                <Clock className="w-5 h-5 text-orange-400" />
                            </div>
                            <span className="text-slate-400 text-sm">Pending Payouts</span>
                        </div>
                        <p className="text-3xl font-bold text-white">{stats.pendingPayouts}</p>
                        <p className="text-sm text-slate-500 mt-1">Awaiting approval</p>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Recent Affiliates */}
                    <div className="bg-slate-800/50 border border-white/5 rounded-2xl p-6">
                        <h3 className="text-lg font-bold text-white mb-4">Recent Affiliates</h3>
                        {recentAffiliates.length === 0 ? (
                            <p className="text-slate-500 text-sm">No affiliates yet</p>
                        ) : (
                            <div className="space-y-3">
                                {recentAffiliates.map((affiliate) => (
                                    <div key={affiliate.id} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-xl">
                                        <div>
                                            <p className="text-white font-medium">{affiliate.full_name}</p>
                                            <p className="text-slate-500 text-xs">{affiliate.email}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-emerald-400 font-mono text-sm">{affiliate.referral_code}</p>
                                            <p className="text-slate-500 text-xs">
                                                {new Date(affiliate.created_at).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Pending Payouts */}
                    <div className="bg-slate-800/50 border border-white/5 rounded-2xl p-6">
                        <h3 className="text-lg font-bold text-white mb-4">Pending Payout Requests</h3>
                        {pendingPayouts.length === 0 ? (
                            <p className="text-slate-500 text-sm">No pending payout requests</p>
                        ) : (
                            <div className="space-y-3">
                                {pendingPayouts.map((payout) => (
                                    <div key={payout.id} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-xl">
                                        <div>
                                            <p className="text-white font-medium">{payout.affiliates?.full_name}</p>
                                            <p className="text-slate-500 text-xs">{payout.payment_method}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-orange-400 font-bold">GH₵ {payout.amount.toLocaleString()}</p>
                                            <p className="text-slate-500 text-xs">
                                                {new Date(payout.requested_at).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AdminDashboardLayout>
    )
}

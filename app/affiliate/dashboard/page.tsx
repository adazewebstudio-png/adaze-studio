"use client"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AffiliateDashboardLayout from '@/components/AffiliateDashboardLayout'
import { supabase, Affiliate, Referral } from '@/lib/supabase'
import { Copy, DollarSign, Users, TrendingUp, Clock, CheckCircle, AlertCircle } from 'lucide-react'

export default function AffiliateDashboard() {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [affiliate, setAffiliate] = useState<Affiliate | null>(null)
    const [referrals, setReferrals] = useState<Referral[]>([])
    const [copied, setCopied] = useState(false)

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

            const { data: referralsData } = await supabase
                .from('referrals')
                .select('*')
                .eq('affiliate_id', user.id)
                .order('created_at', { ascending: false })
                .limit(5)

            setReferrals(referralsData || [])
        }

        setLoading(false)
    }

    const copyReferralCode = () => {
        if (affiliate?.referral_code) {
            navigator.clipboard.writeText(affiliate.referral_code)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        }
    }

    const pendingEarnings = referrals
        .filter(r => r.status === 'confirmed')
        .reduce((sum, r) => sum + r.commission_amount, 0)

    const totalReferrals = referrals.length
    const confirmedReferrals = referrals.filter(r => r.status !== 'pending').length

    if (loading) {
        return (
            <AffiliateDashboardLayout>
                <div className="flex items-center justify-center h-64">
                    <div className="text-slate-400">Loading...</div>
                </div>
            </AffiliateDashboardLayout>
        )
    }

    if (!affiliate) {
        return (
            <AffiliateDashboardLayout>
                <div className="text-center py-20">
                    <p className="text-white mb-4">Account not found.</p>
                </div>
            </AffiliateDashboardLayout>
        )
    }

    return (
        <AffiliateDashboardLayout>
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-emerald-900/40 via-slate-900 to-slate-900 p-6 rounded-2xl border border-emerald-500/20 mb-8">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-white mb-1">
                            Welcome back, {affiliate.full_name.split(' ')[0]}! 👋
                        </h1>
                        <p className="text-slate-400">
                            Share your code and start earning 20% on every referral.
                        </p>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-950 px-4 py-3 rounded-xl border border-white/10">
                        <div>
                            <p className="text-xs text-slate-500 uppercase tracking-wider">Your Code</p>
                            <p className="text-xl font-bold font-mono text-emerald-400">{affiliate.referral_code}</p>
                        </div>
                        <button
                            onClick={copyReferralCode}
                            className="p-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white transition-all"
                        >
                            {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-slate-900/50 p-5 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                            <DollarSign className="w-5 h-5 text-emerald-400" />
                        </div>
                        <span className="text-slate-400 text-sm">Total Earned</span>
                    </div>
                    <p className="text-2xl font-bold text-white">GH₵ {affiliate.total_paid.toLocaleString()}</p>
                </div>

                <div className="bg-slate-900/50 p-5 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                            <Clock className="w-5 h-5 text-yellow-400" />
                        </div>
                        <span className="text-slate-400 text-sm">Pending</span>
                    </div>
                    <p className="text-2xl font-bold text-white">GH₵ {pendingEarnings.toLocaleString()}</p>
                </div>

                <div className="bg-slate-900/50 p-5 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                            <Users className="w-5 h-5 text-blue-400" />
                        </div>
                        <span className="text-slate-400 text-sm">Total Referrals</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{totalReferrals}</p>
                </div>

                <div className="bg-slate-900/50 p-5 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-purple-400" />
                        </div>
                        <span className="text-slate-400 text-sm">Confirmed</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{confirmedReferrals}</p>
                </div>
            </div>

            {/* Recent Referrals */}
            <div className="bg-slate-900/50 rounded-2xl border border-white/10 overflow-hidden">
                <div className="p-5 border-b border-white/10 flex justify-between items-center">
                    <h2 className="text-lg font-bold text-white">Recent Referrals</h2>
                </div>

                {referrals.length === 0 ? (
                    <div className="p-10 text-center">
                        <AlertCircle className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                        <p className="text-slate-400 mb-2">No referrals yet</p>
                        <p className="text-slate-500 text-sm">Share your code with potential clients to start earning!</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-slate-900">
                                <tr>
                                    <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">Client</th>
                                    <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">Project</th>
                                    <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">Commission</th>
                                    <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {referrals.map((referral) => (
                                    <tr key={referral.id} className="hover:bg-white/5">
                                        <td className="px-5 py-4">
                                            <p className="text-white font-medium">{referral.client_name}</p>
                                        </td>
                                        <td className="px-5 py-4 text-slate-300">{referral.project_type}</td>
                                        <td className="px-5 py-4 text-emerald-400 font-semibold">
                                            GH₵ {referral.commission_amount.toLocaleString()}
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

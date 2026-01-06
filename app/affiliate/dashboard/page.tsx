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
                    <p className="text-slate-600 mb-4">Account not found.</p>
                </div>
            </AffiliateDashboardLayout>
        )
    }

    return (
        <AffiliateDashboardLayout>
            {/* Welcome Banner (Premium Dark) */}
            <div className="bg-gradient-to-r from-navy to-slate-800 p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 relative z-10">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            Welcome back, {affiliate.full_name.split(' ')[0]}! 👋
                        </h1>
                        <p className="text-slate-300 max-w-lg text-lg">
                            Share your code and start earning <span className="text-white font-semibold">20% commission</span> on every referral.
                        </p>
                    </div>
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
                        <div>
                            <p className="text-xs text-slate-300 uppercase tracking-widest font-semibold">Your Code</p>
                            <p className="text-2xl font-bold font-mono text-emerald-400 tracking-wide">{affiliate.referral_code}</p>
                        </div>
                        <button
                            onClick={copyReferralCode}
                            className="p-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white transition-all shadow-lg shadow-emerald-500/30"
                            title="Copy Code"
                        >
                            {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Share Your Code Section */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8 shadow-sm">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Share Your Code</h3>
                <div className="flex flex-wrap gap-3">
                    <a
                        href={`https://wa.me/?text=${encodeURIComponent(`Hey! I'm an affiliate partner with Adaze Web Studio. If you need a website or app, use my referral code: ${affiliate.referral_code}. Check them out at https://adazestudio.com`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold rounded-xl transition-all shadow-lg shadow-[#25D366]/20"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                        Share on WhatsApp
                    </a>
                    <a
                        href={`mailto:?subject=${encodeURIComponent('Get a Premium Website with Adaze Web Studio')}&body=${encodeURIComponent(`Hi,\n\nI'm an affiliate partner with Adaze Web Studio - they build amazing websites and apps.\n\nIf you're looking for a professional website, mention my referral code when you contact them:\n\nReferral Code: ${affiliate.referral_code}\n\nCheck out their work at: https://adazestudio.com\n\nBest regards`)}`}
                        className="inline-flex items-center gap-2 px-5 py-3 bg-slate-700 hover:bg-slate-800 text-white font-bold rounded-xl transition-all shadow-lg shadow-slate-700/20"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        Share via Email
                    </a>
                    <button
                        onClick={copyReferralCode}
                        className="inline-flex items-center gap-2 px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-all"
                    >
                        {copied ? <CheckCircle className="w-5 h-5 text-emerald-500" /> : <Copy className="w-5 h-5" />}
                        {copied ? 'Copied!' : 'Copy Code'}
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:scale-[1.02] transition-transform">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
                            <DollarSign className="w-6 h-6 text-emerald-600" />
                        </div>
                        <span className="text-slate-500 font-medium">Total Paid</span>
                    </div>
                    <p className="text-3xl font-bold text-navy">GH₵ {affiliate.total_paid.toLocaleString()}</p>
                </div>

                <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:scale-[1.02] transition-transform">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-yellow-100 flex items-center justify-center">
                            <Clock className="w-6 h-6 text-yellow-600" />
                        </div>
                        <span className="text-slate-500 font-medium">Pending</span>
                    </div>
                    <p className="text-3xl font-bold text-navy">GH₵ {pendingEarnings.toLocaleString()}</p>
                </div>

                <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:scale-[1.02] transition-transform">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                            <Users className="w-6 h-6 text-blue-600" />
                        </div>
                        <span className="text-slate-500 font-medium">Total leads</span>
                    </div>
                    <p className="text-3xl font-bold text-navy">{totalReferrals}</p>
                </div>

                <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:scale-[1.02] transition-transform">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center">
                            <TrendingUp className="w-6 h-6 text-purple-600" />
                        </div>
                        <span className="text-slate-500 font-medium">Confirmed</span>
                    </div>
                    <p className="text-3xl font-bold text-navy">{confirmedReferrals}</p>
                </div>
            </div>

            {/* Recent Referrals */}
            <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                    <h2 className="text-lg font-bold text-navy">Recent Referrals</h2>
                </div>

                {referrals.length === 0 ? (
                    <div className="p-12 text-center">
                        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <AlertCircle className="w-8 h-8 text-slate-400" />
                        </div>
                        <p className="text-slate-900 font-semibold mb-2">No referrals yet</p>
                        <p className="text-slate-500 text-sm">Share your code with potential clients to start earning!</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="text-left text-xs font-bold text-slate-500 uppercase tracking-wider px-6 py-4">Client</th>
                                    <th className="text-left text-xs font-bold text-slate-500 uppercase tracking-wider px-6 py-4">Project</th>
                                    <th className="text-left text-xs font-bold text-slate-500 uppercase tracking-wider px-6 py-4">Commission</th>
                                    <th className="text-left text-xs font-bold text-slate-500 uppercase tracking-wider px-6 py-4">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {referrals.map((referral) => (
                                    <tr key={referral.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <p className="text-navy font-bold">{referral.client_name}</p>
                                        </td>
                                        <td className="px-6 py-4 text-slate-600 font-medium">{referral.project_type}</td>
                                        <td className="px-6 py-4 text-emerald-600 font-bold">
                                            GH₵ {referral.commission_amount.toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold tracking-wide ${referral.status === 'paid'
                                                ? 'bg-emerald-100 text-emerald-700'
                                                : referral.status === 'confirmed'
                                                    ? 'bg-yellow-100 text-yellow-700'
                                                    : 'bg-slate-100 text-slate-600'
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

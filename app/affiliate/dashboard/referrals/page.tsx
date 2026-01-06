"use client"
import { useState } from 'react'
import AffiliateDashboardLayout from '@/components/AffiliateDashboardLayout'
import { Users, Search, UserPlus } from 'lucide-react'

export default function ReferralsPage() {
    const [searchTerm, setSearchTerm] = useState('')

    // Real data would come from Supabase - this is empty by default
    const referrals: any[] = []

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Paid': return 'bg-emerald-100 text-emerald-700'
            case 'Pending': return 'bg-amber-100 text-amber-700'
            case 'In Progress': return 'bg-blue-100 text-blue-700'
            default: return 'bg-slate-100 text-slate-600'
        }
    }

    return (
        <AffiliateDashboardLayout>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-navy">My Referrals</h1>
                    <p className="text-slate-500">Track the status of your referred clients.</p>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <p className="text-xs text-slate-500 uppercase font-bold mb-1">Total Referrals</p>
                    <p className="text-2xl font-bold text-navy">0</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <p className="text-xs text-slate-500 uppercase font-bold mb-1">Successful</p>
                    <p className="text-2xl font-bold text-emerald-600">0</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <p className="text-xs text-slate-500 uppercase font-bold mb-1">Pending</p>
                    <p className="text-2xl font-bold text-amber-500">0</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <p className="text-xs text-slate-500 uppercase font-bold mb-1">Earned Total</p>
                    <p className="text-2xl font-bold text-navy">GH₵ 0</p>
                </div>
            </div>

            {referrals.length > 0 ? (
                <>
                    {/* Search Bar */}
                    <div className="relative mb-6">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search clients..."
                            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* Referrals Table */}
                    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Client Name</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date Referred</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Project Value</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Commission</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {referrals.map((ref: any) => (
                                        <tr key={ref.id} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-navy">{ref.client}</td>
                                            <td className="px-6 py-4 text-slate-500 text-sm">{ref.date}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(ref.status)}`}>
                                                    {ref.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-slate-500 text-sm text-right">
                                                {ref.amount > 0 ? `GH₵ ${ref.amount.toLocaleString()}` : '-'}
                                            </td>
                                            <td className="px-6 py-4 font-bold text-emerald-600 text-right">
                                                {ref.commission > 0 ? `GH₵ ${ref.commission.toLocaleString()}` : '-'}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            ) : (
                /* Empty State */
                <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
                    <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-6">
                        <UserPlus className="w-10 h-10 text-slate-400" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-2">No referrals yet</h3>
                    <p className="text-slate-500 max-w-md mx-auto mb-6">
                        Start referring clients to Adaze Web Studio and track their progress here. You earn 20% commission on every successful project.
                    </p>
                    <div className="inline-block bg-slate-50 border border-slate-200 rounded-xl px-6 py-4">
                        <p className="text-sm text-slate-500 mb-1">Share your referral code:</p>
                        <p className="font-mono font-bold text-navy text-lg">AWS-YOURCODE</p>
                    </div>
                </div>
            )}
        </AffiliateDashboardLayout>
    )
}

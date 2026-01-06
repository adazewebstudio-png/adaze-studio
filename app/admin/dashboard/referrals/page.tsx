"use client"
import { useEffect, useState } from 'react'
import AdminDashboardLayout from '@/components/AdminDashboardLayout'
import { supabase, Referral, Affiliate } from '@/lib/supabase'
import { Plus, Search, CheckCircle, Clock, XCircle, DollarSign } from 'lucide-react'

export default function AdminReferrals() {
    const [loading, setLoading] = useState(true)
    const [referrals, setReferrals] = useState<any[]>([])
    const [affiliates, setAffiliates] = useState<Affiliate[]>([])
    const [searchTerm, setSearchTerm] = useState('')
    const [showAddModal, setShowAddModal] = useState(false)
    const [newReferral, setNewReferral] = useState({
        affiliate_id: '',
        client_name: '',
        client_email: '',
        project_type: '',
        project_value: 0,
        commission_amount: 0,
        status: 'pending'
    })

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        const { data: refData } = await supabase
            .from('referrals')
            .select('*, affiliates(full_name, email, referral_code)')
            .order('created_at', { ascending: false })

        const { data: affData } = await supabase
            .from('affiliates')
            .select('*')
            .eq('is_active', true)

        if (refData) setReferrals(refData)
        if (affData) setAffiliates(affData)
        setLoading(false)
    }

    const filteredReferrals = referrals.filter(r =>
        r.client_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.affiliates?.full_name?.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const updateStatus = async (id: string, status: string) => {
        const updates: any = { status }
        if (status === 'confirmed') updates.confirmed_at = new Date().toISOString()
        if (status === 'paid') updates.paid_at = new Date().toISOString()

        await supabase.from('referrals').update(updates).eq('id', id)

        // If confirmed or paid, update affiliate earnings
        if (status === 'confirmed') {
            const referral = referrals.find(r => r.id === id)
            if (referral) {
                const { data: affiliate } = await supabase
                    .from('affiliates')
                    .select('total_earnings')
                    .eq('id', referral.affiliate_id)
                    .single()

                if (affiliate) {
                    await supabase
                        .from('affiliates')
                        .update({ total_earnings: (affiliate.total_earnings || 0) + referral.commission_amount })
                        .eq('id', referral.affiliate_id)
                }
            }
        }

        loadData()
    }

    const handleAddReferral = async () => {
        if (!newReferral.affiliate_id || !newReferral.client_name) return

        await supabase.from('referrals').insert([{
            ...newReferral,
            created_at: new Date().toISOString()
        }])

        setShowAddModal(false)
        setNewReferral({
            affiliate_id: '',
            client_name: '',
            client_email: '',
            project_type: '',
            project_value: 0,
            commission_amount: 0,
            status: 'pending'
        })
        loadData()
    }

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'confirmed':
                return <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs"><CheckCircle className="w-3 h-3" /> Confirmed</span>
            case 'paid':
                return <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs"><DollarSign className="w-3 h-3" /> Paid</span>
            case 'cancelled':
                return <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-red-500/10 text-red-400 text-xs"><XCircle className="w-3 h-3" /> Cancelled</span>
            default:
                return <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs"><Clock className="w-3 h-3" /> Pending</span>
        }
    }

    if (loading) {
        return (
            <AdminDashboardLayout>
                <div className="flex items-center justify-center h-64">
                    <div className="text-slate-400">Loading referrals...</div>
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
                        <h1 className="text-2xl font-bold text-white">Manage Referrals</h1>
                        <p className="text-slate-400 text-sm">{referrals.length} total referrals</p>
                    </div>
                    <div className="flex gap-3">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-2 bg-slate-800 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                            />
                        </div>
                        <button
                            onClick={() => setShowAddModal(true)}
                            className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-xl flex items-center gap-2"
                        >
                            <Plus className="w-4 h-4" /> Add Referral
                        </button>
                    </div>
                </div>

                {/* Referrals Table */}
                <div className="bg-slate-800/50 border border-white/5 rounded-2xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="text-left px-6 py-4 text-slate-400 text-xs uppercase tracking-wider font-semibold">Client</th>
                                    <th className="text-left px-6 py-4 text-slate-400 text-xs uppercase tracking-wider font-semibold">Affiliate</th>
                                    <th className="text-left px-6 py-4 text-slate-400 text-xs uppercase tracking-wider font-semibold">Project</th>
                                    <th className="text-left px-6 py-4 text-slate-400 text-xs uppercase tracking-wider font-semibold">Commission</th>
                                    <th className="text-left px-6 py-4 text-slate-400 text-xs uppercase tracking-wider font-semibold">Status</th>
                                    <th className="text-right px-6 py-4 text-slate-400 text-xs uppercase tracking-wider font-semibold">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredReferrals.map((referral) => (
                                    <tr key={referral.id} className="border-b border-white/5 hover:bg-white/5">
                                        <td className="px-6 py-4">
                                            <div>
                                                <p className="text-white font-medium">{referral.client_name}</p>
                                                <p className="text-slate-500 text-sm">{referral.client_email || 'No email'}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div>
                                                <p className="text-white">{referral.affiliates?.full_name}</p>
                                                <p className="text-emerald-400 text-xs font-mono">{referral.affiliates?.referral_code}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-slate-300">{referral.project_type || '-'}</p>
                                            <p className="text-slate-500 text-sm">GH₵ {(referral.project_value || 0).toLocaleString()}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-emerald-400 font-bold">GH₵ {(referral.commission_amount || 0).toLocaleString()}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            {getStatusBadge(referral.status)}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <select
                                                value={referral.status}
                                                onChange={(e) => updateStatus(referral.id, e.target.value)}
                                                className="bg-slate-700 border border-white/10 rounded-lg px-3 py-1 text-sm text-white focus:outline-none"
                                            >
                                                <option value="pending">Pending</option>
                                                <option value="confirmed">Confirmed</option>
                                                <option value="paid">Paid</option>
                                                <option value="cancelled">Cancelled</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Add Referral Modal */}
                {showAddModal && (
                    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                        <div className="bg-slate-800 border border-white/10 rounded-2xl p-6 w-full max-w-md">
                            <h3 className="text-xl font-bold text-white mb-6">Add New Referral</h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium text-slate-300 block mb-2">Affiliate *</label>
                                    <select
                                        value={newReferral.affiliate_id}
                                        onChange={(e) => setNewReferral({ ...newReferral, affiliate_id: e.target.value })}
                                        className="w-full px-4 py-2 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-emerald-500"
                                    >
                                        <option value="">Select affiliate...</option>
                                        {affiliates.map(a => (
                                            <option key={a.id} value={a.id}>{a.full_name} ({a.referral_code})</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-slate-300 block mb-2">Client Name *</label>
                                    <input
                                        type="text"
                                        value={newReferral.client_name}
                                        onChange={(e) => setNewReferral({ ...newReferral, client_name: e.target.value })}
                                        className="w-full px-4 py-2 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-emerald-500"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-slate-300 block mb-2">Client Email</label>
                                    <input
                                        type="email"
                                        value={newReferral.client_email}
                                        onChange={(e) => setNewReferral({ ...newReferral, client_email: e.target.value })}
                                        className="w-full px-4 py-2 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-emerald-500"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-slate-300 block mb-2">Project Type</label>
                                    <input
                                        type="text"
                                        value={newReferral.project_type}
                                        onChange={(e) => setNewReferral({ ...newReferral, project_type: e.target.value })}
                                        placeholder="e.g. Website, Mobile App"
                                        className="w-full px-4 py-2 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-emerald-500"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium text-slate-300 block mb-2">Project Value (GH₵)</label>
                                        <input
                                            type="number"
                                            value={newReferral.project_value}
                                            onChange={(e) => setNewReferral({ ...newReferral, project_value: parseFloat(e.target.value) || 0 })}
                                            className="w-full px-4 py-2 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-emerald-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-slate-300 block mb-2">Commission (GH₵)</label>
                                        <input
                                            type="number"
                                            value={newReferral.commission_amount}
                                            onChange={(e) => setNewReferral({ ...newReferral, commission_amount: parseFloat(e.target.value) || 0 })}
                                            className="w-full px-4 py-2 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-emerald-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3 mt-6">
                                <button
                                    onClick={() => setShowAddModal(false)}
                                    className="flex-1 py-2 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-xl transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleAddReferral}
                                    className="flex-1 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-xl transition-colors"
                                >
                                    Add Referral
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AdminDashboardLayout>
    )
}

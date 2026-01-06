"use client"
import { useEffect, useState } from 'react'
import AdminDashboardLayout from '@/components/AdminDashboardLayout'
import { supabase, Affiliate } from '@/lib/supabase'
import { Search, MoreVertical, CheckCircle, XCircle, Edit, Trash2 } from 'lucide-react'

export default function AdminAffiliates() {
    const [loading, setLoading] = useState(true)
    const [affiliates, setAffiliates] = useState<Affiliate[]>([])
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedAffiliate, setSelectedAffiliate] = useState<Affiliate | null>(null)
    const [showModal, setShowModal] = useState(false)
    const [editForm, setEditForm] = useState({
        total_earnings: 0,
        total_paid: 0,
        is_active: true
    })

    useEffect(() => {
        loadAffiliates()
    }, [])

    const loadAffiliates = async () => {
        const { data } = await supabase
            .from('affiliates')
            .select('*')
            .order('created_at', { ascending: false })

        if (data) setAffiliates(data)
        setLoading(false)
    }

    const filteredAffiliates = affiliates.filter(a =>
        a.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.referral_code.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleEdit = (affiliate: Affiliate) => {
        setSelectedAffiliate(affiliate)
        setEditForm({
            total_earnings: affiliate.total_earnings || 0,
            total_paid: affiliate.total_paid || 0,
            is_active: affiliate.is_active
        })
        setShowModal(true)
    }

    const handleSave = async () => {
        if (!selectedAffiliate) return

        const { error } = await supabase
            .from('affiliates')
            .update({
                total_earnings: editForm.total_earnings,
                total_paid: editForm.total_paid,
                is_active: editForm.is_active
            })
            .eq('id', selectedAffiliate.id)

        if (!error) {
            setShowModal(false)
            loadAffiliates()
        }
    }

    const toggleActive = async (affiliate: Affiliate) => {
        await supabase
            .from('affiliates')
            .update({ is_active: !affiliate.is_active })
            .eq('id', affiliate.id)

        loadAffiliates()
    }

    if (loading) {
        return (
            <AdminDashboardLayout>
                <div className="flex items-center justify-center h-64">
                    <div className="text-slate-400">Loading affiliates...</div>
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
                        <h1 className="text-2xl font-bold text-white">Manage Affiliates</h1>
                        <p className="text-slate-400 text-sm">{affiliates.length} total affiliates</p>
                    </div>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input
                            type="text"
                            placeholder="Search affiliates..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 bg-slate-800 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 w-full sm:w-64"
                        />
                    </div>
                </div>

                {/* Affiliates Table */}
                <div className="bg-slate-800/50 border border-white/5 rounded-2xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="text-left px-6 py-4 text-slate-400 text-xs uppercase tracking-wider font-semibold">Affiliate</th>
                                    <th className="text-left px-6 py-4 text-slate-400 text-xs uppercase tracking-wider font-semibold">Code</th>
                                    <th className="text-left px-6 py-4 text-slate-400 text-xs uppercase tracking-wider font-semibold">Earnings</th>
                                    <th className="text-left px-6 py-4 text-slate-400 text-xs uppercase tracking-wider font-semibold">Paid</th>
                                    <th className="text-left px-6 py-4 text-slate-400 text-xs uppercase tracking-wider font-semibold">Status</th>
                                    <th className="text-right px-6 py-4 text-slate-400 text-xs uppercase tracking-wider font-semibold">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredAffiliates.map((affiliate) => (
                                    <tr key={affiliate.id} className="border-b border-white/5 hover:bg-white/5">
                                        <td className="px-6 py-4">
                                            <div>
                                                <p className="text-white font-medium">{affiliate.full_name}</p>
                                                <p className="text-slate-500 text-sm">{affiliate.email}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-emerald-400 font-mono text-sm">{affiliate.referral_code}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-white">GH₵ {(affiliate.total_earnings || 0).toLocaleString()}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-slate-400">GH₵ {(affiliate.total_paid || 0).toLocaleString()}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            {affiliate.is_active ? (
                                                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                                                    <CheckCircle className="w-3 h-3" /> Active
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-medium">
                                                    <XCircle className="w-3 h-3" /> Inactive
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => handleEdit(affiliate)}
                                                    className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                                                >
                                                    <Edit className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => toggleActive(affiliate)}
                                                    className={`p-2 rounded-lg hover:bg-white/10 transition-colors ${affiliate.is_active ? 'text-red-400 hover:text-red-300' : 'text-emerald-400 hover:text-emerald-300'}`}
                                                >
                                                    {affiliate.is_active ? <XCircle className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Edit Modal */}
                {showModal && selectedAffiliate && (
                    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                        <div className="bg-slate-800 border border-white/10 rounded-2xl p-6 w-full max-w-md">
                            <h3 className="text-xl font-bold text-white mb-4">Edit Affiliate</h3>
                            <p className="text-slate-400 text-sm mb-6">{selectedAffiliate.full_name}</p>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium text-slate-300 block mb-2">Total Earnings (GH₵)</label>
                                    <input
                                        type="number"
                                        value={editForm.total_earnings}
                                        onChange={(e) => setEditForm({ ...editForm, total_earnings: parseFloat(e.target.value) || 0 })}
                                        className="w-full px-4 py-2 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-emerald-500"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-slate-300 block mb-2">Total Paid (GH₵)</label>
                                    <input
                                        type="number"
                                        value={editForm.total_paid}
                                        onChange={(e) => setEditForm({ ...editForm, total_paid: parseFloat(e.target.value) || 0 })}
                                        className="w-full px-4 py-2 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-emerald-500"
                                    />
                                </div>
                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        id="is_active"
                                        checked={editForm.is_active}
                                        onChange={(e) => setEditForm({ ...editForm, is_active: e.target.checked })}
                                        className="w-4 h-4 rounded"
                                    />
                                    <label htmlFor="is_active" className="text-sm text-slate-300">Account Active</label>
                                </div>
                            </div>

                            <div className="flex gap-3 mt-6">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="flex-1 py-2 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-xl transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSave}
                                    className="flex-1 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-xl transition-colors"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AdminDashboardLayout>
    )
}

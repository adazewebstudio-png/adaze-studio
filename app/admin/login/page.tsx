"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Shield, ArrowRight } from 'lucide-react'

export default function AdminLogin() {
    const router = useRouter()
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    // Simple admin password - in production, use proper auth
    const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'adazeadmin2024'

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        if (password === ADMIN_PASSWORD) {
            // Set admin session
            if (typeof window !== 'undefined') {
                sessionStorage.setItem('admin_authenticated', 'true')
            }
            router.push('/admin/dashboard')
        } else {
            setError('Invalid password')
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-navy flex items-center justify-center p-6">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-2">Admin Access</h1>
                    <p className="text-slate-400">Affiliate Management Dashboard</p>
                </div>

                <form onSubmit={handleLogin} className="bg-slate-800/50 border border-white/10 rounded-2xl p-8">
                    {error && (
                        <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                            {error}
                        </div>
                    )}

                    <div className="space-y-2 mb-6">
                        <label className="text-sm font-bold text-slate-300">Admin Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter admin password"
                            required
                            className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                        {loading ? 'Authenticating...' : (
                            <>
                                Access Dashboard <ArrowRight className="w-4 h-4" />
                            </>
                        )}
                    </button>
                </form>

                <p className="text-center text-slate-500 text-sm mt-6">
                    Adaze Web Studio • Partner Management
                </p>
            </div>
        </div>
    )
}

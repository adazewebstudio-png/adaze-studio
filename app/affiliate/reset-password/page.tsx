"use client"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { supabase } from '@/lib/supabase'
import { Lock, CheckCircle, ArrowRight } from 'lucide-react'

export default function ResetPassword() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    useEffect(() => {
        // Check if we have a valid session from the reset link
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession()
            if (!session) {
                // No session means the reset link is invalid or expired
                setError('Invalid or expired reset link. Please request a new one.')
            }
        }
        checkSession()
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        if (password !== confirmPassword) {
            setError('Passwords do not match.')
            setLoading(false)
            return
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters.')
            setLoading(false)
            return
        }

        try {
            const { error } = await supabase.auth.updateUser({ password })

            if (error) throw error

            setSuccess(true)
        } catch (err: any) {
            setError(err.message || 'Failed to reset password. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    if (success) {
        return (
            <main className="bg-slate-50 min-h-screen">
                <Navbar />
                <div className="container mx-auto px-6 py-32 max-w-lg">
                    <div className="text-center p-10 rounded-[2rem] bg-white border border-emerald-100 shadow-xl">
                        <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-10 h-10 text-emerald-500" />
                        </div>
                        <h1 className="text-3xl font-bold text-navy mb-4 font-display">Password Reset!</h1>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Your password has been successfully reset. You can now log in with your new password.
                        </p>
                        <Link href="/affiliate/login" className="inline-flex items-center px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg rounded-full transition-all shadow-lg">
                            Go to Login <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </div>
                <Footer />
            </main>
        )
    }

    return (
        <main className="bg-slate-50 min-h-screen">
            <Navbar />
            <div className="container mx-auto px-6 py-32 max-w-lg">
                <div className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-xl">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                            <Lock className="w-8 h-8 text-purple-600" />
                        </div>
                        <h1 className="text-2xl font-bold text-navy mb-2 font-display">Reset Password</h1>
                        <p className="text-slate-500">
                            Enter your new password below.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm">
                                {error}
                            </div>
                        )}

                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-bold text-navy">New Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                minLength={6}
                                placeholder="Min 6 characters"
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-navy placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="confirmPassword" className="text-sm font-bold text-navy">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                placeholder="Re-enter password"
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-navy placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold text-lg rounded-xl transition-all shadow-xl shadow-emerald-500/20"
                        >
                            {loading ? 'Resetting...' : 'Reset Password'}
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </main>
    )
}

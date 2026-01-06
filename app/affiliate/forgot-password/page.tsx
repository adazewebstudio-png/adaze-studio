"use client"
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { supabase } from '@/lib/supabase'
import { ArrowLeft, Mail, CheckCircle } from 'lucide-react'

export default function ForgotPassword() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)
    const [email, setEmail] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        try {
            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}/affiliate/reset-password`,
            })

            if (error) throw error

            setSuccess(true)
        } catch (err: any) {
            setError(err.message || 'Failed to send reset email. Please try again.')
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
                        <h1 className="text-3xl font-bold text-navy mb-4 font-display">Check Your Email</h1>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            We've sent a password reset link to <strong>{email}</strong>. Click the link in the email to reset your password.
                        </p>
                        <Link href="/affiliate/login" className="inline-flex items-center text-emerald-600 font-bold hover:underline">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Login
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
                        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                            <Mail className="w-8 h-8 text-blue-600" />
                        </div>
                        <h1 className="text-2xl font-bold text-navy mb-2 font-display">Forgot Password?</h1>
                        <p className="text-slate-500">
                            Enter your email address and we'll send you a link to reset your password.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm">
                                {error}
                            </div>
                        )}

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-bold text-navy">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="john@example.com"
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-navy placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold text-lg rounded-xl transition-all shadow-xl shadow-emerald-500/20"
                        >
                            {loading ? 'Sending...' : 'Send Reset Link'}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <Link href="/affiliate/login" className="inline-flex items-center text-slate-500 hover:text-navy text-sm font-medium">
                            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Login
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

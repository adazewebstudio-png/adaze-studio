"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { supabase } from '@/lib/supabase'
import { LogIn, ArrowRight } from 'lucide-react'

export default function AffiliateLogin() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        const formData = new FormData(e.currentTarget)
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        try {
            const { error: authError } = await supabase.auth.signInWithPassword({
                email,
                password,
            })

            if (authError) throw authError

            router.push('/affiliate/dashboard')
        } catch (err: any) {
            setError(err.message || 'Invalid email or password.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            <div className="min-h-screen flex pt-20">
                {/* Left Side: Visual & Context (Hidden on Mobile) */}
                <div className="hidden lg:flex w-5/12 bg-navy relative overflow-hidden flex-col justify-between p-12 fixed h-full">
                    <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

                    <div className="relative z-10 mt-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6">
                            Partner Portal
                        </div>
                        <h1 className="font-display text-5xl font-bold text-white leading-tight mb-6">
                            Welcome back, <br />
                            <span className="text-blue-400">Partner.</span>
                        </h1>
                        <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                            Track your referrals, monitor your earnings, and access your marketing assets all in one place.
                        </p>
                    </div>

                    <div className="relative z-10">
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-slate-400 text-sm">Total Commissions Paid</span>
                                <span className="text-emerald-400 text-xs font-bold bg-emerald-500/10 px-2 py-1 rounded-full">+12% this month</span>
                            </div>
                            <div className="text-3xl font-bold text-white mb-1">GH₵ 24,500+</div>
                            <p className="text-slate-400 text-xs">Paid out to partners in the last 30 days.</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form Scrollable Area */}
                <div className="w-full lg:w-7/12 lg:ml-auto bg-white flex flex-col justify-center py-12 px-6 lg:px-20 xl:px-32">
                    <div className="max-w-md mx-auto w-full">
                        <div className="mb-10 text-center lg:text-left">
                            <h2 className="text-3xl font-bold text-navy mb-2 font-display">Log in to your dashboard</h2>
                            <p className="text-slate-500">
                                Don't have an account? {' '}
                                <Link href="/affiliate/signup" className="text-emerald-600 font-bold hover:underline">
                                    Sign up
                                </Link>
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {error && (
                                <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">!</div>
                                    {error}
                                </div>
                            )}

                            <div className="space-y-1.5">
                                <label htmlFor="email" className="text-sm font-bold text-navy">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="john@example.com"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-navy placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="text-sm font-bold text-navy">Password</label>
                                    <Link href="/affiliate/forgot-password" className="text-xs text-slate-500 hover:text-navy">Forgot password?</Link>
                                </div>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    required
                                    placeholder="Enter your password"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-navy placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold text-lg rounded-xl transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 hover:scale-[1.01] mt-4"
                            >
                                {loading ? (
                                    <span>Logging in...</span>
                                ) : (
                                    <>
                                        Sign In <ArrowRight className="w-5 h-5 ml-1" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}

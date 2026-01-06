"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { supabase } from '@/lib/supabase'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'

export default function AffiliateSignup() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)


    const generateReferralCode = (name: string) => {
        const cleanName = name.replace(/\s+/g, '').toUpperCase().slice(0, 4)
        const randomNum = Math.floor(1000 + Math.random() * 9000)
        return `AWS-${cleanName}${randomNum}`
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        const formData = new FormData(e.currentTarget)
        const email = formData.get('email') as string
        const password = formData.get('password') as string
        const fullName = formData.get('fullName') as string
        const phone = formData.get('phone') as string

        try {
            // Check if email already exists
            const { data: existing } = await supabase
                .from('affiliates')
                .select('id')
                .eq('email', email)
                .single()

            if (existing) {
                setError('An account with this email already exists. Please login instead.')
                setLoading(false)
                return
            }

            // Create auth user
            const { data: authData, error: authError } = await supabase.auth.signUp({
                email,
                password,
            })

            if (authError) throw authError

            // Generate unique referral code
            const referralCode = generateReferralCode(fullName)

            // Create affiliate record
            const { error: insertError } = await supabase
                .from('affiliates')
                .insert({
                    id: authData.user?.id,
                    email,
                    full_name: fullName,
                    phone,
                    referral_code: referralCode,
                    total_earnings: 0,
                    total_paid: 0,
                    is_active: true,
                })

            if (insertError) throw insertError

            setSuccess(true)
        } catch (err: any) {
            setError(err.message || 'Something went wrong. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    if (success) {
        return (
            <main className="bg-slate-50 min-h-screen">
                <Navbar />
                <div className="container mx-auto px-6 py-32 max-w-lg">
                    <div className="text-center p-10 rounded-[2rem] bg-white border border-emerald-100 shadow-xl shadow-emerald-100/50">
                        <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6 animate-in zoom-in duration-500">
                            <CheckCircle className="w-10 h-10 text-emerald-500" />
                        </div>
                        <h1 className="text-3xl font-bold text-navy mb-4 font-display">Welcome to the Team!</h1>
                        <p className="text-slate-600 mb-4 leading-relaxed text-lg">
                            Your affiliate account has been created successfully!
                        </p>
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
                            <p className="text-blue-700 text-sm font-medium">
                                📧 Please check your email inbox and click the verification link to activate your account.
                            </p>
                        </div>
                        <Link href="/affiliate/login" className="inline-flex items-center px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg rounded-full transition-all shadow-lg shadow-emerald-500/20 hover:scale-105">
                            Go to Login <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </div>
                <Footer />
            </main>
        )
    }

    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            <div className="min-h-screen flex pt-20">
                {/* Left Side: Visual & Context (Hidden on Mobile) */}
                <div className="hidden lg:flex w-5/12 bg-navy relative overflow-hidden flex-col justify-between p-12 fixed h-full">
                    <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl -ml-32 -mb-32"></div>

                    <div className="relative z-10 mt-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
                            Partner Program
                        </div>
                        <h1 className="font-display text-5xl font-bold text-white leading-tight mb-6">
                            Turn your network into <span className="text-emerald-400">revenue.</span>
                        </h1>
                        <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                            Join hundreds of partners earning consistent commissions by referring businesses to Adaze Web Studio.
                        </p>
                    </div>

                    <div className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                        <div className="flex text-amber-400 mb-4">
                            <Star className="w-5 h-5 fill-current" />
                            <Star className="w-5 h-5 fill-current" />
                            <Star className="w-5 h-5 fill-current" />
                            <Star className="w-5 h-5 fill-current" />
                            <Star className="w-5 h-5 fill-current" />
                        </div>
                        <p className="text-slate-200 italic mb-4">
                            "The easiest partnership I've ever had. I assume the role of 'Tech Consultant' for my clients, Adaze does the work, and I get paid. Brilliant."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500"></div>
                            <div>
                                <p className="text-white font-bold text-sm">Michael K.</p>
                                <p className="text-slate-400 text-xs">Digital Marketer</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form Scrollable Area */}
                <div className="w-full lg:w-7/12 lg:ml-auto bg-white flex flex-col justify-center py-12 px-6 lg:px-20 xl:px-32">
                    <div className="max-w-xl mx-auto w-full">
                        <div className="mb-10 text-center lg:text-left">
                            <h2 className="text-3xl font-bold text-navy mb-2 font-display">Create your account</h2>
                            <p className="text-slate-500">
                                Already have an account? {' '}
                                <Link href="/affiliate/login" className="text-emerald-600 font-bold hover:underline">
                                    Log in
                                </Link>
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            {error && (
                                <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">!</div>
                                    {error}
                                </div>
                            )}

                            {/* Section: Personal Info */}
                            <div className="space-y-5">
                                <h3 className="text-lg font-bold text-navy border-b border-slate-100 pb-2">Personal Details</h3>

                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label htmlFor="fullName" className="text-sm font-bold text-navy">Full Name</label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            required
                                            placeholder="John Doe"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-navy placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label htmlFor="phone" className="text-sm font-bold text-navy">Phone / WhatsApp</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            placeholder="+233 ..."
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-navy placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="email" className="text-sm font-bold text-navy">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="john@example.com"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-navy placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="password" className="text-sm font-bold text-navy">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        required
                                        minLength={6}
                                        placeholder="Min 6 characters"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-navy placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold text-lg rounded-xl transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 hover:scale-[1.01]"
                            >
                                {loading ? (
                                    <span>Processing...</span>
                                ) : (
                                    <>
                                        Create Account <ArrowRight className="w-5 h-5 ml-1" />
                                    </>
                                )}
                            </button>



                            <p className="text-center text-xs text-slate-400 mt-4">
                                By joining, you agree to our Affiliate Terms of Service.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

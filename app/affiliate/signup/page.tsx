"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { supabase } from '@/lib/supabase'
import { UserPlus, ArrowRight, CheckCircle } from 'lucide-react'

export default function AffiliateSignup() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)
    const [paymentMethod, setPaymentMethod] = useState('momo')

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

        // Payment info
        const payment_method = formData.get('payment_method') as string
        const momo_provider = formData.get('momo_provider') as string
        const momo_number = formData.get('momo_number') as string
        const bank_name = formData.get('bank_name') as string
        const bank_account_number = formData.get('bank_account_number') as string
        const bank_account_name = formData.get('bank_account_name') as string

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
                    payment_method,
                    momo_provider: payment_method === 'momo' ? momo_provider : null,
                    momo_number: payment_method === 'momo' ? momo_number : null,
                    bank_name: payment_method === 'bank' ? bank_name : null,
                    bank_account_number: payment_method === 'bank' ? bank_account_number : null,
                    bank_account_name: payment_method === 'bank' ? bank_account_name : null,
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
            <main className="bg-slate-950 min-h-screen">
                <Navbar />
                <div className="container mx-auto px-6 py-32 max-w-lg">
                    <div className="text-center p-10 rounded-3xl bg-slate-900 border border-emerald-500/20">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-8 h-8 text-emerald-400" />
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-4">Welcome to the Team!</h1>
                        <p className="text-slate-400 mb-6">
                            Your affiliate account has been created. Check your email to verify your account, then login to access your dashboard.
                        </p>
                        <Link href="/affiliate/login" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-all">
                            Go to Login <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                </div>
                <Footer />
            </main>
        )
    }

    return (
        <main className="bg-slate-950 min-h-screen">
            <Navbar />

            <div className="container mx-auto px-6 py-32 max-w-lg">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                        Partner Program
                    </div>
                    <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                        Join Our Affiliate Program
                    </h1>
                    <p className="text-slate-400">
                        Earn 20% commission on every client you refer. Start earning today!
                    </p>
                </div>

                <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                                {error}
                            </div>
                        )}

                        {/* Personal Details */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">Personal Details</h3>

                            <div className="space-y-2">
                                <label htmlFor="fullName" className="text-sm font-medium text-slate-300">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    required
                                    placeholder="John Doe"
                                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="john@example.com"
                                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-slate-300">Phone / WhatsApp</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    placeholder="+233 ..."
                                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="password" className="text-sm font-medium text-slate-300">Create Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    required
                                    minLength={6}
                                    placeholder="Min 6 characters"
                                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                                />
                            </div>
                        </div>

                        {/* Payment Details */}
                        <div className="space-y-4 pt-4 border-t border-white/10">
                            <h3 className="text-lg font-semibold text-white">Payment Details</h3>
                            <p className="text-sm text-slate-400">How would you like to receive your commissions?</p>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Payment Method</label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setPaymentMethod('momo')}
                                        className={`p-4 rounded-xl border text-center transition-all ${paymentMethod === 'momo'
                                                ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400'
                                                : 'bg-slate-950 border-white/10 text-slate-400 hover:border-white/20'
                                            }`}
                                    >
                                        <span className="font-semibold">Mobile Money</span>
                                        <p className="text-xs mt-1 opacity-70">MTN, Vodafone, AirtelTigo</p>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setPaymentMethod('bank')}
                                        className={`p-4 rounded-xl border text-center transition-all ${paymentMethod === 'bank'
                                                ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400'
                                                : 'bg-slate-950 border-white/10 text-slate-400 hover:border-white/20'
                                            }`}
                                    >
                                        <span className="font-semibold">Bank Transfer</span>
                                        <p className="text-xs mt-1 opacity-70">Direct to your account</p>
                                    </button>
                                </div>
                                <input type="hidden" name="payment_method" value={paymentMethod} />
                            </div>

                            {paymentMethod === 'momo' && (
                                <>
                                    <div className="space-y-2">
                                        <label htmlFor="momo_provider" className="text-sm font-medium text-slate-300">Mobile Money Provider</label>
                                        <select
                                            id="momo_provider"
                                            name="momo_provider"
                                            required
                                            className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                                        >
                                            <option value="">Select Provider...</option>
                                            <option value="MTN">MTN Mobile Money</option>
                                            <option value="Vodafone">Vodafone Cash</option>
                                            <option value="AirtelTigo">AirtelTigo Money</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="momo_number" className="text-sm font-medium text-slate-300">Mobile Money Number</label>
                                        <input
                                            type="tel"
                                            id="momo_number"
                                            name="momo_number"
                                            required
                                            placeholder="0XX XXX XXXX"
                                            className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                                        />
                                    </div>
                                </>
                            )}

                            {paymentMethod === 'bank' && (
                                <>
                                    <div className="space-y-2">
                                        <label htmlFor="bank_name" className="text-sm font-medium text-slate-300">Bank Name</label>
                                        <input
                                            type="text"
                                            id="bank_name"
                                            name="bank_name"
                                            required
                                            placeholder="e.g., GCB Bank, Ecobank"
                                            className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="bank_account_name" className="text-sm font-medium text-slate-300">Account Name</label>
                                        <input
                                            type="text"
                                            id="bank_account_name"
                                            name="bank_account_name"
                                            required
                                            placeholder="Name on account"
                                            className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="bank_account_number" className="text-sm font-medium text-slate-300">Account Number</label>
                                        <input
                                            type="text"
                                            id="bank_account_number"
                                            name="bank_account_number"
                                            required
                                            placeholder="Your account number"
                                            className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                                        />
                                    </div>
                                </>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <span>Creating Account...</span>
                            ) : (
                                <>
                                    <UserPlus className="w-5 h-5" />
                                    Create Affiliate Account
                                </>
                            )}
                        </button>

                        <p className="text-center text-sm text-slate-500">
                            Already have an account?{' '}
                            <Link href="/affiliate/login" className="text-emerald-400 hover:underline">
                                Login here
                            </Link>
                        </p>
                    </form>
                </div>
            </div>

            <Footer />
        </main>
    )
}

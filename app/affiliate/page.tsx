"use client"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Users, DollarSign, Gift, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function AffiliateProgram() {
    return (
        <main className="bg-slate-950 min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
                        Partner Program
                    </div>
                    <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
                        Grow with Adaze Web Studio. <br />
                        <span className="text-emerald-400">Earn With Us.</span>
                    </h1>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Join our affiliate program and earn generous commissions for every client you refer. Help businesses get premium websites while building your revenue stream.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/affiliate/signup" className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-all hover:scale-105">
                            Join Program
                        </Link>
                        <Link href="#how-it-works" className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold rounded-full transition-all">
                            How it Works
                        </Link>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-20 bg-slate-900/50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-3xl bg-slate-950 border border-white/10">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
                                <DollarSign className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">High Commissions</h3>
                            <p className="text-slate-400">Earn up to 20% on every successful referral. Our high-ticket packages mean significant payouts for you.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-slate-950 border border-white/10">
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                                <Users className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Easy Tracking</h3>
                            <p className="text-slate-400">Simply introduce us to the client. Once they sign and pay, you get paid. No complicated links required.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-slate-950 border border-white/10">
                            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
                                <Gift className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Bonuses & Perks</h3>
                            <p className="text-slate-400">Top performers get exclusive bonuses, priority project handling for their referrals, and networked support.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="py-24 px-6">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-white text-center mb-16 font-display">Simple 3-Step Process</h2>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-slate-900 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                1
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-white/5 border border-white/10">
                                <h3 className="text-lg font-bold text-white mb-2">Register as a Partner</h3>
                                <p className="text-slate-400">Sign up for our affiliate program to get verified. It's free and takes less than a minute.</p>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-slate-900 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                2
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-white/5 border border-white/10">
                                <h3 className="text-lg font-bold text-white mb-2">Refer a Client</h3>
                                <p className="text-slate-400">Connect us with businesses needing websites or apps. Make the intro via email or WhatsApp.</p>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-slate-900 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                3
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-white/5 border border-white/10">
                                <h3 className="text-lg font-bold text-white mb-2">Get Paid</h3>
                                <p className="text-slate-400">Receive your commission immediately after the client makes their payment. Fast and transparent.</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-16">
                        <div className="p-8 bg-slate-900 rounded-3xl border border-white/10 inline-block max-w-2xl">
                            <h3 className="text-2xl font-bold text-white mb-4">Ready to start earning?</h3>
                            <p className="text-slate-400 mb-6">Create your affiliate account and get your unique referral code instantly.</p>
                            <Link href="/affiliate/signup" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-bold text-lg">
                                Sign Up Now <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

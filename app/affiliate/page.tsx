"use client"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Users, DollarSign, Gift, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function AffiliateProgram() {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
                        Partner Program
                    </div>
                    <h1 className="font-display text-4xl md:text-6xl font-bold text-navy mb-6">
                        Grow with Adaze Web Studio. <br />
                        <span className="text-emerald-500">Earn With Us.</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Join our affiliate program and earn generous commissions for every client you refer. Help businesses get premium websites while building your revenue stream.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/affiliate/signup" className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-full transition-all hover:scale-105 shadow-xl shadow-emerald-500/20">
                            Join Program
                        </Link>
                        <Link href="#how-it-works" className="inline-flex items-center justify-center px-8 py-4 bg-white border border-slate-200 text-navy font-bold rounded-full hover:bg-slate-50 transition-all">
                            How it Works
                        </Link>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
                                <DollarSign className="w-7 h-7 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-3">High Commissions</h3>
                            <p className="text-slate-600 leading-relaxed">Earn up to 20% on every successful referral. Our high-ticket packages mean significant payouts for you.</p>
                        </div>
                        <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all">
                            <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center mb-6">
                                <Users className="w-7 h-7 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-3">Easy Tracking</h3>
                            <p className="text-slate-600 leading-relaxed">Simply introduce us to the client. Once they sign and pay, you get paid. No complicated links required.</p>
                        </div>
                        <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all">
                            <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
                                <Gift className="w-7 h-7 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-3">Bonuses & Perks</h3>
                            <p className="text-slate-600 leading-relaxed">Top performers get exclusive bonuses, priority project handling for their referrals, and networked support.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="py-24 px-6 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-navy text-center mb-16 font-display">Simple 3-Step Process</h2>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-emerald-100 before:via-emerald-300 before:to-emerald-100">
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-emerald-500 text-white shadow-lg z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                1
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
                                <h3 className="text-lg font-bold text-navy mb-2">Register as a Partner</h3>
                                <p className="text-slate-600">Sign up for our affiliate program below. It's free and takes less than a minute.</p>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-emerald-500 text-white shadow-lg z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                2
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
                                <h3 className="text-lg font-bold text-navy mb-2">Refer a Client</h3>
                                <p className="text-slate-600">Connect us with businesses needing websites or apps. Make the intro via email or WhatsApp.</p>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-emerald-500 text-white shadow-lg z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                3
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
                                <h3 className="text-lg font-bold text-navy mb-2">Get Paid</h3>
                                <p className="text-slate-600">Receive your commission immediately after the client makes their payment. Fast and transparent.</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-16">
                        <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50 inline-block max-w-2xl">
                            <h3 className="text-2xl font-bold text-navy mb-4">Ready to start earning?</h3>
                            <p className="text-slate-600 mb-6">Create your affiliate account and get your unique referral code instantly.</p>
                            <Link href="/affiliate/signup" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-bold text-lg group">
                                Sign Up Now <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

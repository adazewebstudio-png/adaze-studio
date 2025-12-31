import Link from 'next/link'
import { Check, Rocket, ArrowRight, Globe, Smartphone, Shield } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { packages } from '@/lib/packages'

export default function Services() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-32 pb-20 bg-slate-950">

                {/* Hero */}
                <section className="px-6 mb-24 text-center">
                    <div className="container mx-auto max-w-4xl">
                        <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                            Premium Services.<br /> Transparent Pricing.
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Whether you need a simple landing page or a complex mobile app, we have the right package to power your growth.
                        </p>
                    </div>
                </section>

                {/* Detailed Services Grid (Restored) */}
                <section className="px-6 mb-24">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                                <Globe className="w-10 h-10 text-blue-400 mb-6" />
                                <h3 className="text-2xl font-bold text-white mb-4 font-display">Web Development</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    We build websites that work. Using Next.js and modern technologies, we ensure your site is fast, secure, and Google-friendly.
                                </p>
                            </div>
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-400/50 transition-colors">
                                <Smartphone className="w-10 h-10 text-purple-400 mb-6" />
                                <h3 className="text-2xl font-bold text-white mb-4 font-display">Mobile Apps</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Native and cross-platform apps that your customers will love. We focus on intuitive UX and smooth performance.
                                </p>
                            </div>
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-400/50 transition-colors">
                                <Shield className="w-10 h-10 text-emerald-400 mb-6" />
                                <h3 className="text-2xl font-bold text-white mb-4 font-display">Digital Consulting</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Not sure what you need? We provide technical consultation to help you choose the right tools for your business.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Grid */}
                <section className="px-6 relative">
                    <div className="container mx-auto max-w-7xl">
                        <h2 className="text-3xl font-bold text-white text-center mb-12 font-display">Investment Packages</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {packages.map((pkg, i) => {
                                const isPopular = i === 3; // Real Estate Company is recommended
                                return (
                                    <div key={i} className={`relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${isPopular ? 'bg-slate-900 border-primary/50 shadow-2xl shadow-primary/10' : 'bg-slate-950/50 border-white/10 hover:border-white/20'
                                        }`}>
                                        {isPopular && (
                                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-full">
                                                Most Popular
                                            </div>
                                        )}

                                        <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                                        <div className="text-3xl font-display font-bold text-white mb-4">{pkg.price}</div>
                                        <p className="text-slate-400 text-sm mb-8 h-10">{pkg.description}</p>

                                        <ul className="space-y-4 mb-8">
                                            {pkg.features.map((feat, j) => (
                                                <li key={j} className="flex items-start gap-3 text-sm text-slate-300">
                                                    <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>

                                        <Link
                                            href={`/services/${pkg.id}`}
                                            className={`w-full py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${isPopular
                                                ? 'bg-primary hover:bg-blue-600 text-white shadow-lg shadow-primary/25'
                                                : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                                                }`}
                                        >
                                            Choose Plan <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

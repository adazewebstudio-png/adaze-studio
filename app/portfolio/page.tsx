import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Building2, Landmark, Home, ExternalLink, Zap, Star } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Force static generation for instant loading
export const dynamic = 'force-static'

export default function Portfolio() {
    return (
        <>
            <Navbar />
            <main id="main-content" className="min-h-screen flex flex-col pt-20">

                {/* ===== HERO SECTION ===== */}
                <section className="pt-24 pb-20 md:pt-36 md:pb-32 px-6 relative overflow-hidden bg-white">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="container mx-auto max-w-5xl relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy text-white text-xs font-bold uppercase tracking-wider mb-8 shadow-lg shadow-navy/20">
                            <Star className="w-3 h-3 text-primary fill-current" />
                            Selected Works
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-8 text-navy">
                            We don't just build websites. <br />
                            <span className="text-primary italic">We build businesses.</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
                            See how we've transformed organizations with platforms that streamline operations, verify members, and generate revenue.
                        </p>
                    </div>
                </section>

                {/* ===== PROJECT 1: VRARED (Immersive Section) ===== */}
                <section className="py-24 bg-slate-900 relative overflow-hidden text-white">
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-wider mb-6">
                                    <Building2 className="w-5 h-5" /> Real Estate Association
                                </div>
                                <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">VRARED</h2>
                                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                    A powerful verified directory & MLS ecosystem for the Volta Region's real estate sector.
                                </p>

                                <div className="space-y-8 mb-10">
                                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                            <Zap className="w-5 h-5 text-primary" /> The Solution
                                        </h3>
                                        <ul className="grid sm:grid-cols-2 gap-3">
                                            <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-primary" /> Member Verification</li>
                                            <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-primary" /> Public Directory</li>
                                            <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-primary" /> Broker MLS</li>
                                            <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-primary" /> LMS Training</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Why It Matters</h3>
                                        <p className="text-slate-400">
                                            We transformed a static organization into a digital powerhouse. VRARED now facilitates real estate transactions and training completely online.
                                        </p>
                                    </div>
                                </div>

                                <a href="https://vrared.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-primary hover:bg-amber-400 text-navy font-bold rounded-full transition-all group">
                                    Visit Live Platform
                                    <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>

                            <div className="order-1 lg:order-2 relative group">
                                <div className="absolute inset-0 bg-primary/20 rounded-[2rem] rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                                <div className="relative rounded-[2rem] overflow-hidden bg-white shadow-2xl">
                                    <div className="aspect-[4/3] flex items-center justify-center p-16">
                                        <Image src="/vrared_logo.png" alt="VRARED Platform" fill className="object-contain p-16" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== PROJECT 2: AYECCU (Immersive Section) ===== */}
                <section className="py-24 bg-emerald-950 relative overflow-hidden text-white">
                    {/* Background Accents */}
                    <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3"></div>

                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-emerald-500/20 rounded-[2rem] -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
                                <div className="relative rounded-[2rem] overflow-hidden bg-white shadow-2xl">
                                    <div className="aspect-[4/3] flex items-center justify-center p-16">
                                        <Image src="/ayeccu_logo.jpg" alt="AYECCU Platform" fill className="object-contain p-16" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-3 text-emerald-400 font-bold uppercase tracking-wider mb-6">
                                    <Landmark className="w-5 h-5" /> Finance & Credit Union
                                </div>
                                <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">AYECCU</h2>
                                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                    A secure, member-focused financial portal that simplifies onboarding and service access.
                                </p>

                                <div className="space-y-8 mb-10">
                                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                            <Zap className="w-5 h-5 text-emerald-400" /> The Solution
                                        </h3>
                                        <ul className="grid sm:grid-cols-2 gap-3">
                                            <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Digital Onboarding</li>
                                            <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Member Portal</li>
                                            <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Service Showcase</li>
                                            <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Secure Architecture</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Why It Matters</h3>
                                        <p className="text-slate-400">
                                            We turned a traditional offline credit union into a digital-first organization. Members can now register and access services instantly from anywhere.
                                        </p>
                                    </div>
                                </div>

                                <a href="https://ayecghana.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-full transition-all group">
                                    Visit Live Platform
                                    <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== PROJECT 3: ADAZE PROPERTIES (Immersive Section) ===== */}
                <section className="py-24 bg-white relative overflow-hidden">
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>

                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="flex items-center gap-3 text-blue-600 font-bold uppercase tracking-wider mb-6">
                                    <Home className="w-5 h-5" /> Real Estate Company
                                </div>
                                <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-navy">Adaze Properties</h2>
                                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                    A comprehensive property hub streamlining land purchase, development, and sales.
                                </p>

                                <div className="space-y-8 mb-10">
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                                        <h3 className="font-bold text-lg text-navy mb-3 flex items-center gap-2">
                                            <Zap className="w-5 h-5 text-blue-600" /> The Solution
                                        </h3>
                                        <ul className="grid sm:grid-cols-2 gap-3">
                                            <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Property Listings</li>
                                            <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Project Showcases</li>
                                            <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Corporate Brand</li>
                                            <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Lead Capture</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-lg text-navy mb-2">Why It Matters</h3>
                                        <p className="text-slate-600">
                                            Prospective clients can explore the company’s full range of real estate services from land purchase to property development. The website turns visitors into serious leads.
                                        </p>
                                    </div>
                                </div>

                                <a href="https://adazepropertieshub.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all group shadow-lg shadow-blue-200">
                                    Visit Live Platform
                                    <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>

                            <div className="order-1 lg:order-2 relative group">
                                <div className="absolute inset-0 bg-blue-100 rounded-[2rem] rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                                <div className="relative rounded-[2rem] overflow-hidden bg-white shadow-2xl border border-slate-100">
                                    <div className="aspect-[4/3] flex items-center justify-center p-16">
                                        <Image src="/adaze_properties_logo.jpg" alt="Adaze Properties Hub Platform" fill className="object-contain p-16" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== BROWSE ARCHIVE ===== */}
                <section className="py-24 bg-navy relative overflow-hidden border-t border-white/10">
                    <div className="absolute inset-0 bg-grid-slate-900 opacity-30"></div>
                    {/* Glowing Accent */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-primary/5 blur-3xl rounded-full pointer-events-none"></div>

                    <div className="container mx-auto px-6 text-center relative z-10">
                        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
                            Want to see more?
                        </h2>
                        <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                            Dive into our comprehensive archive of projects, prototypes, and digital solutions.
                        </p>
                        <Link href="/portfolio/all" className="inline-flex items-center justify-center px-10 py-5 bg-white text-navy font-bold text-lg rounded-full hover:bg-primary hover:text-navy transition-all transform hover:scale-105 shadow-xl group">
                            Explore Full Archive
                            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </section>

                {/* ===== FINAL CTA SECTION ===== */}
                <section className="py-24 md:py-32 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
                    <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                        <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 text-navy leading-tight">
                            Ready to build your own <br />
                            <span className="text-primary">Success Story?</span>
                        </h2>

                        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                            Stop wasting money on digital solutions that fail. Work with Adaze Web Studio and get platforms that actually produce results.
                        </p>

                        <Link href="/start" className="inline-flex items-center justify-center px-10 py-5 bg-navy hover:bg-slate-800 text-white text-xl font-bold rounded-full transition-all hover:scale-105 shadow-xl group">
                            Book a Free Consultation
                            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

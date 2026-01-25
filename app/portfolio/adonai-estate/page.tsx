import Image from 'next/image'
import Link from 'next/link'
import {
    ArrowRight,
    CheckCircle2,
    Building2,
    Globe,
    Layout,
    ShieldCheck,
    Zap,
    Trophy,
    Target,
    Users,
    Monitor,
    Search,
    ChevronRight,
    Database,
    ExternalLink,
    Map,
    TrendingUp,
    Award
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Adonai Estate Ltd Case Study – Real Estate Website & Property Listing Platform',
    description: 'How Adaze Web Studio redesigned and built a high-clarity, trust-driven website and property listing platform for Adonai Estate Ltd, the leading real estate company in the Volta Region.',
}

export default function AdonaiCaseStudy() {
    return (
        <>
            <Navbar />
            <main id="main-content" className="min-h-screen pt-20 bg-white">

                {/* ===== HERO SECTION ===== */}
                <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden bg-rose-50/30">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-0"></div>
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-2/3">
                                <nav className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
                                    <Link href="/portfolio" className="hover:text-navy transition-colors">Portfolio</Link>
                                    <ChevronRight className="w-4 h-4" />
                                    <span className="text-rose-700">Adonai Estate Case Study</span>
                                </nav>
                                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-navy">
                                    Adonai Estate Ltd — Presenting a <span className="text-rose-700 italic">Market Leader</span> to the World
                                </h1>
                                <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-3xl">
                                    A clarity-driven real estate website and listing platform built to support scale, credibility, and diaspora clients.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {['Corporate Website', 'Property Listing Platform', 'Brand Repositioning'].map((tag) => (
                                        <span key={tag} className="px-4 py-2 rounded-full bg-white border border-rose-100 text-rose-800 text-sm font-bold shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/3 w-full">
                                <a href="https://adonaiestateltd.com" target="_blank" rel="noopener noreferrer" className="block relative rounded-3xl overflow-hidden bg-white p-8 border border-rose-100 shadow-2xl hover:shadow-rose-200/50 transition-all hover:scale-[1.02] group">
                                    <Image
                                        src="/adonai_estate_logo.jpg"
                                        alt="Adonai Estate Ltd Logo"
                                        width={400}
                                        height={400}
                                        className="w-full h-auto object-contain transition-transform group-hover:scale-105"
                                        priority
                                    />
                                    <div className="absolute top-4 right-4 text-rose-300 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ExternalLink className="w-5 h-5" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== CLIENT OVERVIEW ===== */}
                <section className="py-20 bg-white border-b border-slate-100">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid lg:grid-cols-3 gap-12 md:gap-20">
                            <div className="lg:col-span-2">
                                <h2 className="font-display text-3xl font-bold text-navy mb-6">About the Company</h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                    Adonai Estate Ltd is the biggest and leading real estate company in the Volta Region. With over a decade of experience, the company offers brokerage services, property management, land sales and registration, and real estate consultancy. They operate multiple development sites across the Volta Region and serve both local and diaspora clients.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div className="p-6 rounded-2xl bg-rose-50/30 border border-rose-50">
                                        <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                                            <Award className="w-5 h-5 text-rose-700" /> Experience
                                        </h3>
                                        <p className="text-slate-600 text-sm">Established in 2014 (11+ years of market leadership).</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-rose-50/30 border border-rose-50">
                                        <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                                            <Map className="w-5 h-5 text-rose-700" /> Reach
                                        </h3>
                                        <p className="text-slate-600 text-sm">Serving the Volta Region & International Diaspora.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-1">
                                <div className="bg-rose-950 rounded-3xl p-8 text-white sticky top-24">
                                    <h3 className="text-xl font-bold mb-6 font-display">At a Glance</h3>
                                    <div className="space-y-6">
                                        <div>
                                            <p className="text-rose-400/50 text-xs uppercase tracking-widest font-bold mb-1">Company</p>
                                            <p className="font-bold">Adonai Estate Ltd</p>
                                        </div>
                                        <div>
                                            <p className="text-rose-400/50 text-xs uppercase tracking-widest font-bold mb-1">Market Position</p>
                                            <p className="font-bold">#1 Real Estate Company in Volta Region</p>
                                        </div>
                                        <div>
                                            <p className="text-rose-400/50 text-xs uppercase tracking-widest font-bold mb-1">Primary Goal</p>
                                            <p className="font-bold">Digital Scale & Diaspora Trust</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== THE CHALLENGE ===== */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="text-center mb-16">
                            <span className="text-rose-700 font-bold tracking-widest uppercase text-sm mb-4 block">The Problem</span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy">The Challenge</h2>
                        </div>
                        <div className="prose prose-lg max-w-none text-slate-600">
                            <p className="mb-8 text-xl">
                                Despite being a market leader, Adonai Estate Ltd faced a digital positioning problem. Their existing online presence did not reflect their scale, leadership, or the clarity of their services.
                            </p>
                            <p className="mb-12">
                                They were preparing to scale aggressively and attract diaspora clients, investors from outside the region, and high-value buyers. They needed a website that could communicate trust instantly and support property discovery.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4 mb-12">
                                {[
                                    'Scale & Experience mismatch',
                                    'Fragmented service clarity',
                                    'Undervalued development sites',
                                    'Lack of diaspora trust-marks'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-rose-100 shadow-sm">
                                        <div className="w-2 h-2 rounded-full bg-rose-700"></div>
                                        <span className="text-sm font-bold text-navy">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-navy p-8 rounded-3xl text-white">
                                <p className="text-lg italic font-medium leading-relaxed text-center">
                                    "They needed a website that could communicate trust instantly, explain what they do clearly, and support property discovery."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== PROJECT GOALS ===== */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="lg:w-1/2">
                                <h2 className="font-display text-4xl font-bold text-navy mb-8">Project Goals</h2>
                                <div className="grid gap-6">
                                    {[
                                        { title: 'Repositioning', desc: 'Reposition the brand digitally as a market leader.' },
                                        { title: 'Information Clarity', desc: 'Clearly communicate services and expertise.' },
                                        { title: 'Structured Showcase', desc: 'Showcase development sites in a structured, professional way.' },
                                        { title: 'Transparency', desc: 'Provide transparent property listings with pricing.' },
                                        { title: 'Diaspora Trust', desc: 'Build trust with diaspora and remote clients.' }
                                    ].map((goal, i) => (
                                        <div key={i} className="flex gap-4 p-6 rounded-2xl bg-rose-50/20 border border-slate-100 hover:border-rose-200 transition-colors group">
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-rose-700 font-bold shadow-sm group-hover:bg-rose-700 group-hover:text-white transition-all">
                                                {i + 1}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-navy mb-1">{goal.title}</h4>
                                                <p className="text-slate-600 text-sm">{goal.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/2 relative">
                                <div className="absolute inset-0 bg-rose-500/5 rounded-full blur-[100px]"></div>
                                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white p-4">
                                    <div className="aspect-[16/9] relative rounded-2xl overflow-hidden">
                                        <Image
                                            src="/hero_image.jpg"
                                            alt="Adonai Estate development showcase"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-navy/20"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== THE SOLUTION ===== */}
                <section className="py-24 bg-navy text-white overflow-hidden relative">
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="text-center mb-20">
                            <span className="text-rose-500 font-bold tracking-widest uppercase text-sm mb-4 block">Strategic Solution</span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Clarity-First Implementation</h2>
                            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                                Adaze Web Studio delivered a strategic digital solution focused on authority and buyer confidence.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Solution 1 */}
                            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors group text-center">
                                <div className="w-16 h-16 rounded-2xl bg-rose-500/20 flex items-center justify-center text-rose-500 mb-8 mx-auto group-hover:scale-110 transition-transform">
                                    <Monitor className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-6 font-display">1. Corporate Website</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                    Aligns the brand with enterprise-level expectations through clarity of message and professional structure.
                                </p>
                            </div>

                            {/* Solution 2 */}
                            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors group text-center">
                                <div className="w-16 h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-500 mb-8 mx-auto group-hover:scale-110 transition-transform">
                                    <Map className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-6 font-display">2. Development Showcase</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                    A dedicated structure to show across multiple sites, locations, and value context to build buyer confidence.
                                </p>
                            </div>

                            {/* Solution 3 */}
                            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors group text-center">
                                <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-500 mb-8 mx-auto group-hover:scale-110 transition-transform">
                                    <Database className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-6 font-display">3. Listing Platform</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                    Transparent property discovery with clear pricing, reducing friction for diaspora clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== STRATEGIC APPROACH ===== */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="font-display text-4xl font-bold text-navy mb-4">Strategic Approach</h2>
                            <p className="text-lg text-slate-600">For Adonai Estate Ltd, design alone was not enough.</p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-12">
                            {[
                                { title: 'Trust-Building', desc: 'Essential for real estate and diaspora buyers who cannot visit sites easily.' },
                                { title: 'Clarity', desc: 'Eliminating confusion about complex services and varied property offerings.' },
                                { title: 'Structure', desc: 'Making a large, multifaceted company easy to navigate and understand.' },
                                { title: 'Scalability', desc: 'Supporting massive future growth without needing a constant redesign.' }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 items-start">
                                    <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-700 flex-shrink-0 font-bold">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-navy mb-2">{item.title}</h4>
                                        <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== OUTCOME & IMPACT ===== */}
                <section className="py-24 bg-rose-950 text-white overflow-hidden relative">
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3"></div>
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="lg:w-1/2">
                                <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Outcome & Impact</h2>
                                <div className="space-y-6">
                                    {[
                                        'Present itself as a clear market leader online',
                                        'Communicate services and offerings without ambiguity',
                                        'Build stronger trust with remote and diaspora clients',
                                        'Showcase development sites professionally',
                                        'Support business growth and expansion plans'
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 group">
                                            <div className="w-6 h-6 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <span className="text-lg text-rose-100/80">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-sm">
                                    <h3 className="text-2xl font-bold mb-6 font-display text-rose-400">Why This Matters</h3>
                                    <p className="text-slate-300 leading-relaxed mb-8">
                                        The website now reflects the true strength of the brand, positioning Adonai Estate as a reliable enterprise-level partner for both local and international investors.
                                    </p>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                                            <p className="text-3xl font-bold text-white mb-1">11+</p>
                                            <p className="text-[10px] text-rose-400 uppercase font-bold tracking-widest">Years of Leadership</p>
                                        </div>
                                        <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                                            <p className="text-3xl font-bold text-white mb-1">Global</p>
                                            <p className="text-[10px] text-rose-400 uppercase font-bold tracking-widest">Diaspora Reach</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== FINAL CTA ===== */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-8">
                            Ready to Reposition Your Brand for Growth?
                        </h2>
                        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                            We help market leaders and growing companies build digital platforms that accurately reflect their scale and authority.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link href="/start" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-rose-700 hover:bg-rose-600 text-white font-bold text-xl rounded-full transition-all hover:scale-105 shadow-2xl shadow-rose-900/20 group">
                                Book a Free Consultation
                                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/portfolio" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-white border-2 border-slate-200 text-navy font-bold text-xl rounded-full hover:border-navy transition-all">
                                See More Real Estate Projects
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

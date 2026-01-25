import Image from 'next/image'
import Link from 'next/link'
import {
    ArrowRight,
    CheckCircle2,
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
    Code2,
    Building2,
    TrendingUp,
    Smartphone,
    Star
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Richard Adaze Case Study – Personal Brand & Authority Hub',
    description: "How Adaze Web Studio built a centralized digital hub for Richard Adaze, the 'Realtor Who Codes', bridging the gap between property and technology.",
}

export default function RichardAdazeCaseStudy() {
    return (
        <>
            <Navbar />
            <main id="main-content" className="min-h-screen pt-20 bg-white">

                {/* ===== HERO SECTION ===== */}
                <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden bg-slate-50/50">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-navy/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-0"></div>
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-2/3">
                                <nav className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
                                    <Link href="/portfolio" className="hover:text-navy transition-colors">Portfolio</Link>
                                    <ChevronRight className="w-4 h-4" />
                                    <span className="text-navy">Richard Adaze Case Study</span>
                                </nav>
                                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-navy text-balance">
                                    Richard Adaze — The <span className="text-primary italic">Bridge</span> Between Property & Tech
                                </h1>
                                <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-3xl">
                                    A professional personal brand website built to consolidate dual-expertise in real estate and software development into a single authoritative digital hub.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {['Personal Branding', 'Digital Architecture', 'PropTech Expert'].map((tag) => (
                                        <span key={tag} className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 text-sm font-bold shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/3 w-full">
                                <a href="https://richardadaze.com" target="_blank" rel="noopener noreferrer" className="block relative rounded-[2.5rem] overflow-hidden bg-white p-8 border border-slate-200 shadow-2xl hover:shadow-navy/10 transition-all hover:scale-[1.02] group">
                                    <Image
                                        src="/richard_adaze_logo.png"
                                        alt="Richard Adaze Logo"
                                        width={400}
                                        height={400}
                                        className="w-full h-auto object-contain transition-transform group-hover:scale-105"
                                        priority
                                    />
                                    <div className="absolute top-4 right-4 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
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
                                <h2 className="font-display text-3xl font-bold text-navy mb-6">About Richard Adaze</h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                    Richard Adaze is a rare hybrid professional—a Real Estate Strategist and Digital Innovator. As the Head of Marketing at Adonai Estate Ltd and the Founder of Adaze Web Studio, he serves as the bridge between the physical world of property acquisition and the digital world of software architecture.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                        <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                                            <Building2 className="w-5 h-5 text-primary" /> Real Estate Lead
                                        </h3>
                                        <p className="text-slate-600 text-sm">Managing marketing and sales for the Volta Region's premier estate firm.</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                        <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                                            <Code2 className="w-5 h-5 text-primary" /> Digital Architect
                                        </h3>
                                        <p className="text-slate-600 text-sm">Founder of Adaze Web Studio, building PropTech and business infrastructure.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-1">
                                <div className="bg-navy rounded-3xl p-8 text-white sticky top-24">
                                    <h3 className="text-xl font-bold mb-6 font-display">Project Focus</h3>
                                    <div className="space-y-6">
                                        <div>
                                            <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">Entity</p>
                                            <p className="font-bold">Richard Adaze</p>
                                        </div>
                                        <div>
                                            <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">Primary Goal</p>
                                            <p className="font-bold">Authority Consolidation</p>
                                        </div>
                                        <div>
                                            <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">Impact</p>
                                            <p className="font-bold">Trust-Native Hub</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== THE CHALLENGE ===== */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6 max-w-4xl text-center">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">The Problem</span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-8">The "Dual-Identity" Conflict</h2>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-12">
                            How do you present yourself as a top-tier Real Estate Marketing Executive and a high-level Software Developer without diluting your authority in either?
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4 text-left">
                            {[
                                'Communicating dual-expertise without confusing the visitor',
                                'Consolidating multiple business ventures into one personal brand',
                                'Building a professional digital "home base" for social media traffic',
                                'Positioning as a "Strategist" rather than just an agent or a coder'
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0 mt-0.5">
                                        <span className="text-xs font-bold">!</span>
                                    </div>
                                    <span className="text-slate-700 font-medium text-sm leading-snug">{item}</span>
                                </div>
                            ))}
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
                                        { title: 'The Bridge Concept', desc: 'Anchor the brand around the intersection of Property and Tech.' },
                                        { title: 'Authority Hub', desc: 'Provide a single destination for all professional inquiries and audits.' },
                                        { title: 'Minimalist UX', desc: 'Ensure the visitor is never more than 2 clicks away from any venture.' },
                                        { title: 'Thought Leadership', desc: 'Integrate deep-link paths for insights on land acquisition and tech.' }
                                    ].map((goal, i) => (
                                        <div key={i} className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-colors group">
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-navy font-bold shadow-sm group-hover:bg-navy group-hover:text-white transition-all">
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
                                <div className="absolute inset-0 bg-navy/5 rounded-full blur-[100px]"></div>
                                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white p-6">
                                    <div className="aspect-square bg-slate-50 rounded-2xl flex flex-col items-center justify-center p-12 text-center">
                                        <Target className="w-20 h-20 text-navy mb-6" />
                                        <h4 className="font-display text-2xl font-bold text-navy mb-2">Clarity Over Complexity</h4>
                                        <p className="text-slate-500 text-sm italic">"I'm not just a real estate professional who dabbles in tech... I'm the rare professional who has built and led companies in both worlds."</p>
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
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">The Result</span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">A Sleek "Digital Portal" Architecture</h2>
                            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                                We moved away from traditional personal blogs and built a high-conversion hub that routes traffic and establishes trust instantly.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors group">
                                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mx-auto mb-8 group-hover:scale-110 transition-transform">
                                    <Monitor className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-display">1. Strategic Split</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Explicitly defined horizontal paths for "Real Estate Strategy" vs "Digital Architecture."
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors group">
                                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mx-auto mb-8 group-hover:scale-110 transition-transform">
                                    <Smartphone className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-display">2. Mobile-Centric</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Designed as a "V-Card" on steroids for seamless sharing via WhatsApp and social media.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors group">
                                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mx-auto mb-8 group-hover:scale-110 transition-transform">
                                    <Zap className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-display">3. Unified CTA</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Reduced barriers for land buyers and business owners to reach Richard directly.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== OUTCOME & IMPACT ===== */}
                <section className="py-24 bg-white overflow-hidden relative">
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="lg:w-1/2">
                                <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-8">Outcome & Impact</h2>
                                <div className="space-y-4">
                                    {[
                                        'Instant authority for high-value real estate negotiations',
                                        'Professional gateway for Adaze Web Studio inquiries',
                                        'Clear positioning as a founder with a hybrid mindset',
                                        'Unified digital identity for media and podcast appearances',
                                        'Streamlined due-diligence for land clients'
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                                            <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy">
                                                <TrendingUp className="w-5 h-5" />
                                            </div>
                                            <span className="font-bold text-navy text-sm md:text-base">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="bg-slate-100 p-12 rounded-[3.5rem] border border-slate-200">
                                    <blockquote className="text-2xl font-medium text-navy italic mb-8 leading-relaxed">
                                        "My personal brand is now as structured as my businesses. I finally have a digital home that explains exactly who I am and what I build."
                                    </blockquote>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-white font-bold">RA</div>
                                        <div>
                                            <div className="font-bold text-navy">Richard Adaze</div>
                                            <div className="text-slate-500 text-sm uppercase tracking-widest font-bold">Real Estate Strategist</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== FINAL CTA ===== */}
                <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
                    <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-8 text-balance">
                            Build Your Professional <span className="text-primary italic">Authority Hub</span>
                        </h2>
                        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Are you a professional with multiple ventures or a personal brand that needs to convert? Let's build a hub that positions you as the expert.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link href="/start" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-navy hover:bg-slate-800 text-white font-bold text-xl rounded-full transition-all hover:scale-105 shadow-2xl shadow-navy/20 group">
                                Start My Brand Audit
                                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/portfolio" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-white border-2 border-slate-200 text-navy font-bold text-xl rounded-full hover:border-navy transition-all">
                                More Individual Case Studies
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

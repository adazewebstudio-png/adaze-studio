import Image from 'next/image'
import Link from 'next/link'
import {
    ArrowRight,
    Building2,
    ShieldCheck,
    Zap,
    Trophy,
    Target,
    Users,
    ChevronRight,
    ExternalLink,
    HardHat,
    Ruler,
    Truck,
    Briefcase,
    Globe
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Adonai Engineering Case Study – Corporate Identity for Civil Engineering',
    description: 'How Adaze Web Studio built a high-trust corporate digital identity for Adonai Engineering & Construction Ltd, enabling them to bid for major infrastructure contracts.',
}

export default function AdonaiEngineeringCaseStudy() {
    return (
        <>
            <Navbar />
            <main id="main-content" className="min-h-screen pt-20 bg-white">

                {/* ===== HERO SECTION ===== */}
                <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden bg-slate-50">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-0"></div>
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-2/3">
                                <nav className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
                                    <Link href="/portfolio" className="hover:text-navy transition-colors">Portfolio</Link>
                                    <ChevronRight className="w-4 h-4" />
                                    <span className="text-red-800">Adonai Engineering Case Study</span>
                                </nav>
                                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-navy text-balance">
                                    Engineered for <span className="text-red-700 italic">Trust</span> & Scale
                                </h1>
                                <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-3xl">
                                    A "Capability-First" corporate website designed to establish instant industrial authority for a new engineering and construction firm.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {['Civil Engineering', 'Corporate Identity', 'Bidding Compliance'].map((tag) => (
                                        <span key={tag} className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 text-sm font-bold shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/3 w-full">
                                <a href="https://adonaiengineeringltd.com" target="_blank" rel="noopener noreferrer" className="block relative rounded-3xl overflow-hidden bg-white p-8 border border-slate-200 shadow-2xl hover:shadow-red-900/10 transition-all hover:scale-[1.02] group">
                                    <Image
                                        src="/adonai_engineering_logo.jpg"
                                        alt="Adonai Engineering Logo"
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
                                <h2 className="font-display text-3xl font-bold text-navy mb-6">About Adonai Engineering</h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                    Adonai Engineering & Construction Ltd is a Ghanaian firm specializing in residential, commercial, and estate infrastructure projects. Unlike general contractors, they position themselves on "disciplined execution" and "engineering integrity," aiming to serve large-scale developers and government bodies.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                        <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                                            <HardHat className="w-5 h-5 text-red-700" /> Direct Execution
                                        </h3>
                                        <p className="text-slate-600 text-sm">A "Build-First" company that handles construction, not just consulting.</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                        <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                                            <Ruler className="w-5 h-5 text-red-700" /> Technical Discipline
                                        </h3>
                                        <p className="text-slate-600 text-sm">Focused on safety, durability, and strict adherence to standards.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-1">
                                <div className="bg-navy rounded-3xl p-8 text-white sticky top-24">
                                    <h3 className="text-xl font-bold mb-6 font-display">Project Focus</h3>
                                    <div className="space-y-6">
                                        <div>
                                            <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">Company</p>
                                            <p className="font-bold">Adonai Engineering Ltd</p>
                                        </div>
                                        <div>
                                            <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">Industry</p>
                                            <p className="font-bold">Civil Engineering & Construction</p>
                                        </div>
                                        <div>
                                            <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">Key Outcome</p>
                                            <p className="font-bold">Regulation-Ready Profile</p>
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
                        <span className="text-red-700 font-bold tracking-widest uppercase text-sm mb-4 block">The Challenge</span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-8">The "New Player" Trust Gap</h2>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-12">
                            How does a new engineering firm compete for massive infrastructure contracts against established giants without a 20-year portfolio?
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4 text-left">
                            {[
                                'Establishing institutional trust from Day 1',
                                'Demonstrating capacity without disclosing confidential client projects',
                                'Avoiding the "residential contractor" stereotype to attract corporate bids',
                                'Creating a digital profile that survives rigid due-diligence audits'
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

                {/* ===== THE STRATEGY ===== */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="lg:w-1/2">
                                <h2 className="font-display text-4xl font-bold text-navy mb-8">Strategic Solution</h2>
                                <div className="grid gap-6">
                                    {[
                                        { title: 'The "Institution" Aesthetic', desc: 'We bypassed modern "tech" trends for a solid, industrial look that signals stability and permanence.' },
                                        { title: 'Capability-Based Architecture', desc: 'Instead of focusing on individual houses, we structured the site around core competencies (Civil Works, Estate Development).' },
                                        { title: 'Process Transparency', desc: 'Detailed explanations of their execution workflow to demonstrate technical mastery.' },
                                        { title: 'Privacy-First Portfolio', desc: 'Created an "Experience Signal" section that validates capacity without violating client confidentiality.' }
                                    ].map((goal, i) => (
                                        <div key={i} className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-red-700/20 transition-colors group">
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-navy font-bold shadow-sm group-hover:bg-red-700 group-hover:text-white transition-all">
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
                                <div className="absolute inset-0 bg-red-900/5 rounded-full blur-[100px]"></div>
                                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white p-6">
                                    <div className="aspect-square bg-slate-50 rounded-2xl flex flex-col items-center justify-center p-12 text-center">
                                        <Briefcase className="w-20 h-20 text-red-700 mb-6" />
                                        <h4 className="font-display text-2xl font-bold text-navy mb-2">Corporate First</h4>
                                        <p className="text-slate-500 text-sm italic">"We don't just build houses; we execute engineering projects. our website needed to speak the language of government regulators and investors."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== OUTCOME & IMPACT ===== */}
                <section className="py-24 bg-navy text-white overflow-hidden relative">
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="text-center mb-20">
                            <span className="text-red-500 font-bold tracking-widest uppercase text-sm mb-4 block">The Result</span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Designed for the Boardroom</h2>
                            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                                The new digital presence allows Adonai Engineering to walk into any negotiation with a pre-validated reputation for excellence.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors group">
                                <div className="w-14 h-14 rounded-2xl bg-red-700/20 flex items-center justify-center text-red-500 mb-8 group-hover:scale-110 transition-transform">
                                    <ShieldCheck className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-display">Instant Credibility</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Passes the "eye test" for corporate due diligence and bank verification processes.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors group">
                                <div className="w-14 h-14 rounded-2xl bg-red-700/20 flex items-center justify-center text-red-500 mb-8 group-hover:scale-110 transition-transform">
                                    <Globe className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-display">Expansion Ready</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Positioned not just for local work, but for the company's "Africa-facing growth posture."
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors group">
                                <div className="w-14 h-14 rounded-2xl bg-red-700/20 flex items-center justify-center text-red-500 mb-8 group-hover:scale-110 transition-transform">
                                    <Truck className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-display">Service Clarity</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Clearly segments complex offerings like "Civil Works" and "Estate Development" for targeted clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== FINAL CTA ===== */}
                <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
                    <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-8 text-balance">
                            Ready to Build Your <span className="text-red-700 italic">Corporate Legacy</span>?
                        </h2>
                        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                            For engineering firms, construction companies, and industrial players: we build digital identities that win contracts.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link href="/start" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-red-800 hover:bg-red-700 text-white font-bold text-xl rounded-full transition-all hover:scale-105 shadow-2xl shadow-red-900/20 group">
                                Start Your Corporate Project
                                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/portfolio" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-white border-2 border-slate-200 text-navy font-bold text-xl rounded-full hover:border-navy transition-all">
                                View All Projects
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

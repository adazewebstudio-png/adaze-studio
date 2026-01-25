import Image from 'next/image'
import Link from 'next/link'
import {
    ArrowRight,
    CheckCircle2,
    Landmark,
    ShieldCheck,
    Zap,
    Trophy,
    Target,
    Users,
    Monitor,
    Lock,
    ChevronRight,
    Database,
    ExternalLink,
    Eye,
    TrendingUp
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'AYECCU Case Study – Co-operative Credit Union Website & Member Portal',
    description: 'How Adaze Web Studio built a professional public website and secure member financial management portal for AYECCU, a growing co-operative credit union in Ghana.',
}

export default function AyeccuCaseStudy() {
    return (
        <>
            <Navbar />
            <main id="main-content" className="min-h-screen pt-20 bg-white">

                {/* ===== HERO SECTION ===== */}
                <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden bg-emerald-50/30">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-0"></div>
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-2/3">
                                <nav className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
                                    <Link href="/portfolio" className="hover:text-navy transition-colors">Portfolio</Link>
                                    <ChevronRight className="w-4 h-4" />
                                    <span className="text-emerald-600">AYECCU Case Study</span>
                                </nav>
                                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-navy">
                                    AYECCU — Building Trust, Structure, and <span className="text-emerald-600 italic">Digital Access</span>
                                </h1>
                                <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-3xl">
                                    A professional public website and secure member financial management portal designed to support transparency, operations, and growth.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {['Co-operative Website', 'Member Financial Portal'].map((tag) => (
                                        <span key={tag} className="px-4 py-2 rounded-full bg-white border border-emerald-100 text-emerald-800 text-sm font-bold shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/3 w-full">
                                <a href="https://ayecghana.org" target="_blank" rel="noopener noreferrer" className="block relative rounded-3xl overflow-hidden bg-white p-8 border border-emerald-100 shadow-2xl hover:shadow-emerald-200/50 transition-all hover:scale-[1.02] group">
                                    <Image
                                        src="/ayeccu_logo.jpg"
                                        alt="AYECCU Logo"
                                        width={300}
                                        height={150}
                                        className="w-full h-auto object-contain transition-transform group-hover:scale-105"
                                        priority
                                    />
                                    <div className="absolute top-4 right-4 text-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity">
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
                                <h2 className="font-display text-3xl font-bold text-navy mb-6">About the Organization</h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                    AYECCU is a co-operative credit union established to support young entrepreneurs through savings, credit, and financial empowerment. As a member-driven institution, trust, transparency, and proper record management are critical to its operations.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div className="p-6 rounded-2xl bg-emerald-50/30 border border-emerald-50">
                                        <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                                            <Target className="w-5 h-5 text-emerald-600" /> Focus
                                        </h3>
                                        <p className="text-slate-600 text-sm">Financial empowerment for young entrepreneurs.</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-emerald-50/30 border border-emerald-50">
                                        <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                                            <Users className="w-5 h-5 text-emerald-600" /> Structure
                                        </h3>
                                        <p className="text-slate-600 text-sm">Member-driven co-operative credit union.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-1">
                                <div className="bg-emerald-950 rounded-3xl p-8 text-white sticky top-24">
                                    <h3 className="text-xl font-bold mb-6 font-display">Project Quick Facts</h3>
                                    <div className="space-y-6">
                                        <div>
                                            <p className="text-emerald-400/50 text-xs uppercase tracking-widest font-bold mb-1">Client</p>
                                            <p className="font-bold">Adonai Young Entrepreneurs Co-operative Credit Union (AYECCU)</p>
                                        </div>
                                        <div>
                                            <p className="text-emerald-400/50 text-xs uppercase tracking-widest font-bold mb-1">Industry</p>
                                            <p className="font-bold">Financial Services / Co-operative</p>
                                        </div>
                                        <div>
                                            <p className="text-emerald-400/50 text-xs uppercase tracking-widest font-bold mb-1">Status</p>
                                            <p className="font-bold flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div> Digital System Live
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== THE CHALLENGE ===== */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <div className="text-center mb-16">
                            <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4 block">The Context</span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy">The Challenge</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
                                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                                    <Eye className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-4">Public Credibility</h3>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    AYECCU needed a professional website to clearly communicate their mission, leadership, and policies. Without this, it was difficult to present the organization clearly to members and partners.
                                </p>
                                <ul className="space-y-3">
                                    {['Governance Structure', 'Co-op Values', 'Transparency Issues'].map(item => (
                                        <li key={item} className="flex items-center gap-3 text-sm text-slate-500 italic">
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6">
                                    <Lock className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-4">Member & Financial Management</h3>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    Internally, managing member records and financial information required a more structured and secure system than manual or fragmented tools could offer.
                                </p>
                                <ul className="space-y-3">
                                    {['Data Fragmentation', 'Security Risks', 'Manual Process Delays'].map(item => (
                                        <li key={item} className="flex items-center gap-3 text-sm text-slate-500 italic">
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="mt-12 bg-navy p-8 rounded-3xl text-white text-center">
                            <p className="text-lg italic font-medium">
                                "AYECCU needed both visibility and operational structure — not just an informational website."
                            </p>
                        </div>
                    </div>
                </section>

                {/* ===== PROJECT GOALS ===== */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="lg:w-1/2">
                                <h2 className="font-display text-4xl font-bold text-navy mb-8">Project Goals</h2>
                                <div className="space-y-6">
                                    {[
                                        { title: 'Trustworthy Presence', desc: 'Establish a clear and authoritative online presence.' },
                                        { title: 'Clear Communication', desc: 'Communicate the co-operative’s structure, leadership, and purpose.' },
                                        { title: 'Secure Data System', desc: 'Provide a secure digital system for managing members and financial data.' },
                                        { title: 'Process Optimization', desc: 'Improve internal organization and reduce manual processes.' },
                                        { title: 'Scalable Growth', desc: 'Build a scalable platform that could grow with the co-operative.' }
                                    ].map((goal, i) => (
                                        <div key={i} className="flex gap-4 items-start group">
                                            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-1 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-navy">{goal.title}</h4>
                                                <p className="text-slate-600 text-sm">{goal.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white p-6">
                                    <div className="aspect-[4/3] bg-emerald-50 rounded-2xl flex flex-col items-center justify-center p-12 text-center">
                                        <ShieldCheck className="w-20 h-20 text-emerald-600 mb-6" />
                                        <h4 className="font-display text-2xl font-bold text-navy mb-2">Security-First Architecture</h4>
                                        <p className="text-slate-500 text-sm">Every member record is protected by multi-layer encryption and role-based access control.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== THE SOLUTION ===== */}
                <section className="py-24 bg-emerald-950 text-white relative">
                    <div className="absolute top-0 right-0 w-full h-full bg-grid-emerald-900 opacity-10"></div>
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="text-center mb-20">
                            <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4 block">Tailored Engineering</span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">The Solution</h2>
                            <p className="text-xl text-emerald-100/70 max-w-3xl mx-auto leading-relaxed">
                                Adaze Web Studio designed and built a two-part digital solution, tailored specifically for a co-operative credit union.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Solution 1 */}
                            <div className="bg-white/5 border border-white/10 p-12 rounded-[2.5rem] group hover:bg-white/10 transition-colors">
                                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-8 group-hover:scale-110 transition-transform">
                                    <Monitor className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-bold mb-6 font-display">1. Public Co-operative Website</h3>
                                <p className="text-emerald-100/60 mb-8 leading-relaxed">
                                    The official digital identity of AYECCU, reinforcing trust and transparency through clear information architecture.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {['Mandate & Vision', 'Leadership Profiles', 'Member Policies', 'Co-op Values'].map(item => (
                                        <div key={item} className="bg-white/5 px-4 py-3 rounded-xl flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                            <span className="text-xs font-bold text-emerald-100">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Solution 2 */}
                            <div className="bg-white/5 border border-white/10 p-12 rounded-[2.5rem] group hover:bg-white/10 transition-colors">
                                <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 transition-transform">
                                    <Database className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-bold mb-6 font-display">2. Member Financial Portal</h3>
                                <p className="text-emerald-100/60 mb-8 leading-relaxed">
                                    A secure internal system for record management, replacing fragmented tools with a unified database.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {['Member Records', 'Restricted Access', 'Unified Database', 'Internal Visibility'].map(item => (
                                        <div key={item} className="bg-white/5 px-4 py-3 rounded-xl flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                            <span className="text-xs font-bold text-emerald-100">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== OUR APPROACH ===== */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="font-display text-4xl font-bold text-navy mb-4">Our Approach</h2>
                            <p className="text-lg text-slate-600">Focusing on security, clarity, and real-world utility.</p>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: 'Clarity', desc: 'Information easy to understand for everyone.' },
                                { title: 'Structure', desc: 'Reflecting governance structure digitally.' },
                                { title: 'Security', desc: 'Controlled access and data protection.' },
                                { title: 'Scalability', desc: 'Supporting future growth.' }
                            ].map((item, i) => (
                                <div key={i} className="text-center group">
                                    <div className="w-20 h-20 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center text-emerald-600 mx-auto mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                                        <Zap className="w-8 h-8" />
                                    </div>
                                    <h4 className="font-bold text-navy mb-2">{item.title}</h4>
                                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== OUTCOME & IMPACT ===== */}
                <section className="py-24 bg-slate-50 overflow-hidden relative">
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="lg:w-1/2">
                                <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-8">Outcome & Impact</h2>
                                <div className="space-y-4">
                                    {[
                                        'A professional and trustworthy online presence',
                                        'Clear communication of leadership, mandate, and values',
                                        'Improved organization of member and financial information',
                                        'Reduced reliance on manual processes',
                                        'A digital foundation that supports long-term growth'
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow">
                                            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                                <Trophy className="w-5 h-5" />
                                            </div>
                                            <span className="font-bold text-navy text-sm md:text-base">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="bg-navy p-12 rounded-[3.5rem] text-white">
                                    <h3 className="text-2xl font-bold mb-6 font-display">Why This Project Matters</h3>
                                    <p className="text-slate-400 leading-relaxed mb-8 italic">
                                        "This project highlights Adaze Web Studio’s ability to work with financial institutions where trust and accuracy are critical. We merged public communication with secure internal tools seamlessly."
                                    </p>
                                    <div className="flex items-center gap-8">
                                        <div>
                                            <p className="text-emerald-500 text-4xl font-bold mb-1">50+</p>
                                            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Active Members</p>
                                        </div>
                                        <div className="w-px h-12 bg-white/10"></div>
                                        <div>
                                            <p className="text-blue-500 text-4xl font-bold mb-1">24/7</p>
                                            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Digital Access</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== CAPABILITIES ===== */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl text-center">
                        <h2 className="font-display text-3xl font-bold text-navy mb-12">Capabilities Demonstrated</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                'Financial Website Design',
                                'Secure Member Portal Development',
                                'Role-based Access & Encryption',
                                'Information Architecture for Trust',
                                'Scalable System Design'
                            ].map((tech) => (
                                <span key={tech} className="px-6 py-3 rounded-xl bg-slate-50 border border-slate-200 text-navy font-bold text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== FINAL CTA ===== */}
                <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
                    <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                        <span className="inline-block p-1.5 px-4 bg-emerald-100 text-emerald-700 rounded-full font-bold text-xs uppercase tracking-widest mb-8">
                            Ready to Build?
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-8">
                            Need a Website or System for Your Co-operative or Organization?
                        </h2>
                        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                            We help co-operatives, associations, and member-based organizations build digital platforms that support transparency, operations, and growth.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link href="/start" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xl rounded-full transition-all hover:scale-105 shadow-2xl shadow-emerald-200 group">
                                Book a Free Consultation
                                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/portfolio" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-white border-2 border-slate-200 text-navy font-bold text-xl rounded-full hover:border-navy transition-all">
                                Explore More Case Studies
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

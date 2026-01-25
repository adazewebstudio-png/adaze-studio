import Image from 'next/image'
import Link from 'next/link'
import {
    ArrowRight,
    CheckCircle2,
    Globe,
    BookOpen,
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
    ExternalLink
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'VRARED Case Study – Real Estate Association Website, MLS & LMS Platform',
    description: 'How Adaze Web Studio built a complete digital ecosystem for the Volta Regional Association of Real Estate Developers, including an association website, MLS platform, and online learning system.',
}

export default function VraredCaseStudy() {
    return (
        <>
            <Navbar />
            <main id="main-content" className="min-h-screen pt-20 bg-white">

                {/* ===== HERO SECTION ===== */}
                <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden bg-slate-50">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-0"></div>
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-2/3">
                                <nav className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
                                    <Link href="/portfolio" className="hover:text-navy transition-colors">Portfolio</Link>
                                    <ChevronRight className="w-4 h-4" />
                                    <span className="text-primary">VRARED Case Study</span>
                                </nav>
                                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-navy">
                                    VRARED — Building a <span className="text-primary italic">Digital Home</span> for Real Estate Professionals
                                </h1>
                                <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-3xl">
                                    A complete digital ecosystem for a professional real estate association, combining public credibility, verified listings, and member education.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {['Association Website', 'MLS Platform', 'Learning Management System'].map((tag) => (
                                        <span key={tag} className="px-4 py-2 rounded-full bg-white border border-slate-200 text-navy text-sm font-bold shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/3 w-full">
                                <a href="https://vrared.org" target="_blank" rel="noopener noreferrer" className="block relative rounded-3xl overflow-hidden bg-white p-8 border border-slate-200 shadow-2xl hover:shadow-primary/20 transition-all hover:scale-[1.02] group">
                                    <Image
                                        src="/vrared_logo.png"
                                        alt="VRARED Logo"
                                        width={300}
                                        height={150}
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
                                <h2 className="font-display text-3xl font-bold text-navy mb-6">About the Organization</h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                    VRARED is a professional association formed to unite real estate developers, brokers, and agents in the Volta Region under one recognized body. The association aims to promote professionalism, trust, collaboration, and continuous learning within the real estate industry.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                        <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                                            <Target className="w-5 h-5 text-primary" /> Location
                                        </h3>
                                        <p className="text-slate-600">Volta Region, Ghana</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                        <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                                            <Users className="w-5 h-5 text-primary" /> Industry
                                        </h3>
                                        <p className="text-slate-600">Real Estate / Professional Association</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-1">
                                <div className="bg-navy rounded-3xl p-8 text-white sticky top-24">
                                    <h3 className="text-xl font-bold mb-6 font-display">Project Quick Facts</h3>
                                    <div className="space-y-6">
                                        <div>
                                            <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">Client</p>
                                            <p className="font-bold">Volta Regional Association of Real Estate Developers (VRARED)</p>
                                        </div>
                                        <div>
                                            <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">Status</p>
                                            <p className="font-bold flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-emerald-500"></div> Live & Operational
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">Role</p>
                                            <p className="font-bold">Design, Development, Strategy & System Integration</p>
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
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">The Problem</span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy">The Challenge</h2>
                        </div>
                        <div className="prose prose-lg max-w-none text-slate-600">
                            <p className="mb-8 text-xl">
                                Before working with Adaze Web Studio, VRARED faced several challenges common to growing professional associations:
                            </p>
                            <ul className="space-y-4 mb-12">
                                {[
                                    'No centralized digital platform representing the association',
                                    'Difficulty clearly communicating their mandate, leadership, and structure',
                                    'Lack of a trusted system for verified property listings',
                                    'No digital infrastructure to support member education and training',
                                    'Fragmented visibility for developers, brokers, and agents in the region'
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0 mt-1">
                                            <span className="text-xs font-bold">!</span>
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="bg-navy p-8 rounded-3xl text-white">
                                <p className="text-lg italic font-medium leading-relaxed">
                                    "VRARED needed more than a website — they needed a digital foundation that could support credibility, operations, and long-term growth."
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
                                        { title: 'Authority', desc: 'Establish a clear and authoritative online presence for the association.' },
                                        { title: 'Unity', desc: 'Unite real estate professionals under one digital platform.' },
                                        { title: 'Trust', desc: 'Provide a trusted Multi Listing Service (MLS) for property listings.' },
                                        { title: 'Education', desc: 'Enable professional development through online learning.' },
                                        { title: 'Scale', desc: 'Build a scalable system that could grow with the association.' }
                                    ].map((goal, i) => (
                                        <div key={i} className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary transition-colors group">
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary font-bold shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
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
                                <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px]"></div>
                                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white p-4">
                                    <div className="aspect-[16/9] bg-slate-100 rounded-2xl flex items-center justify-center">
                                        <Monitor className="w-20 h-20 text-slate-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== THE SOLUTION ===== */}
                <section className="py-24 bg-navy text-white overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-800 opacity-20"></div>
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="text-center mb-20">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">The Deliverables</span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">The Solution</h2>
                            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                                Adaze Web Studio designed and developed a multi-layered digital ecosystem, tailored specifically to the needs of a real estate association.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Deliverable 1 */}
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors group">
                                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                                    <Globe className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-6 font-display">1. Association Website</h3>
                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    A structured public-facing website that serves as the official digital identity of the association.
                                </p>
                                <ul className="space-y-3">
                                    {['Mission, Vision & Mandate', 'Leadership & Executive Members', 'Membership Requirements', 'News & Announcements'].map(item => (
                                        <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                                            <CheckCircle2 className="w-4 h-4 text-primary" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Deliverable 2 */}
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors group">
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 transition-transform">
                                    <Search className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-6 font-display">2. Multi Listing Service (MLS)</h3>
                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    A custom platform for property discovery and professional credibility.
                                </p>
                                <ul className="space-y-3">
                                    {['Verified Member Listings', 'Centralized Listing Management', 'Association-Backed Verification', 'Public Property Discovery'].map(item => (
                                        <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                                            <CheckCircle2 className="w-4 h-4 text-blue-400" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Deliverable 3 */}
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors group">
                                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-8 group-hover:scale-110 transition-transform">
                                    <BookOpen className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-6 font-display">3. Learning Management (LMS)</h3>
                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    An online learning platform to support continuous professional development.
                                </p>
                                <ul className="space-y-3">
                                    {['Course Creation & Management', 'Member & Non-Member Training', 'Structured Learning Content', 'Positioning as a Knowledge Hub'].map(item => (
                                        <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== OUR APPROACH ===== */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="font-display text-4xl font-bold text-navy mb-4">Our Approach</h2>
                            <p className="text-lg text-slate-600">Our approach focused on clarity, structure, and scalability.</p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-8">
                            {[
                                { title: 'Strategic Mapping', icon: <Database />, desc: 'We mapped the association’s real-world structure into the digital platform.' },
                                { title: 'User-Centric Design', icon: <Users />, desc: 'Designed clear user journeys for members, administrators, and the public.' },
                                { title: 'Future-Ready', icon: <Zap />, desc: 'Ensured the system could evolve as the association grows.' },
                                { title: 'Operational Focus', icon: <Layout />, desc: 'Every component was built to solve a real operational or communication need.' }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
                                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                                        {item.icon}
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
                <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3"></div>
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="lg:w-1/2">
                                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">The Results</span>
                                <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Outcome & Impact</h2>
                                <div className="space-y-6">
                                    {[
                                        'A unified and professional digital presence',
                                        'Improved credibility and visibility for the association',
                                        'A centralized system for verified property listings',
                                        'A foundation for ongoing education and professional growth',
                                        'A scalable digital infrastructure to support future expansion'
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 group">
                                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-navy transition-all">
                                                <Trophy className="w-3.5 h-3.5" />
                                            </div>
                                            <span className="text-lg text-slate-300">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-sm">
                                    <h3 className="text-2xl font-bold mb-6 font-display">Why This Project Matters</h3>
                                    <p className="text-slate-400 leading-relaxed mb-8">
                                        This project demonstrates Adaze Web Studio’s ability to design for organizations, build interconnected systems (website + MLS + LMS), and translate complex organizational needs into usable digital platforms.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="text-center p-4 bg-white/5 rounded-2xl">
                                            <p className="text-primary text-3xl font-bold mb-1">100%</p>
                                            <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Custom Built</p>
                                        </div>
                                        <div className="text-center p-4 bg-white/5 rounded-2xl">
                                            <p className="text-primary text-3xl font-bold mb-1">Scale</p>
                                            <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Ready System</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== TECHNOLOGIES ===== */}
                <section className="py-24 bg-white border-b border-slate-100">
                    <div className="container mx-auto px-6 max-w-7xl text-center">
                        <h2 className="font-display text-3xl font-bold text-navy mb-12">Technologies & Capabilities</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                'Custom Web Design & Development',
                                'Role-based Access Control',
                                'MLS Platform Architecture',
                                'Learning Management Integration',
                                'Scalable System Design',
                                'SEO & AI Optimization'
                            ].map((tech) => (
                                <span key={tech} className="px-6 py-3 rounded-xl bg-slate-50 border border-slate-200 text-navy font-bold text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== FINAL CTA ===== */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                        <span className="inline-block p-1.5 px-4 bg-primary/10 text-primary rounded-full font-bold text-xs uppercase tracking-widest mb-8">
                            Ready to Build?
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-8">
                            Need a Digital Platform for Your Association or Organization?
                        </h2>
                        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                            We help professional bodies, cooperatives, and organizations build structured digital systems that support credibility, operations, and growth.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link href="/start" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-primary hover:bg-amber-400 text-navy font-bold text-xl rounded-full transition-all hover:scale-105 shadow-2xl shadow-primary/30 group">
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

import Image from 'next/image'
import Link from 'next/link'
import {
    ArrowRight,
    CheckCircle2,
    Hammer,
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
    Brush,
    Images,
    Star
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Mawuli POP Ceiling Case Study – Craftsman Portfolio & Lead Generation Website',
    description: 'How Adaze Web Studio built a professional showcase for Mawuli POP Ceiling, highlighting 16+ years of expertise in high-end interior design and construction.',
}

export default function MawuliPopCaseStudy() {
    return (
        <>
            <Navbar />
            <main id="main-content" className="min-h-screen pt-20 bg-white">

                {/* ===== HERO SECTION ===== */}
                <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden bg-orange-50/30">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-0"></div>
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-2/3">
                                <nav className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
                                    <Link href="/portfolio" className="hover:text-navy transition-colors">Portfolio</Link>
                                    <ChevronRight className="w-4 h-4" />
                                    <span className="text-orange-600">Mawuli POP Case Study</span>
                                </nav>
                                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-navy">
                                    Mawuli POP Ceiling — Turning <span className="text-orange-600 italic">Craftsmanship</span> Into a Brand
                                </h1>
                                <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-3xl">
                                    A professional portfolio website built to showcase 16+ years of expert POP design experience and generate high-quality project leads.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {['Craftsman Portfolio', 'Lead Generation System', 'Gallery Showcase'].map((tag) => (
                                        <span key={tag} className="px-4 py-2 rounded-full bg-white border border-orange-100 text-orange-800 text-sm font-bold shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/3 w-full">
                                <a href="https://mawulipopceiling.com" target="_blank" rel="noopener noreferrer" className="block relative rounded-3xl overflow-hidden bg-white p-8 border border-orange-100 shadow-2xl hover:shadow-orange-200/50 transition-all hover:scale-[1.02] group">
                                    <Image
                                        src="/mawuli_pop_logo.png"
                                        alt="Mawuli POP Ceiling Logo"
                                        width={400}
                                        height={400}
                                        className="w-full h-auto object-contain transition-transform group-hover:scale-105"
                                        priority
                                    />
                                    <div className="absolute top-4 right-4 text-orange-300 opacity-0 group-hover:opacity-100 transition-opacity">
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
                                <h2 className="font-display text-3xl font-bold text-navy mb-6">About the Expert</h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                    Mawuli POP Ceiling consists of a team of highly skilled POP (Plaster of Paris) design specialists with over 16 years of experience in interior decoration and ceiling work. They specialize in creating luxurious, durable, and artistic ceiling designs for residential and commercial spaces across Ghana.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div className="p-6 rounded-2xl bg-orange-50/30 border border-orange-50">
                                        <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                                            <Trophy className="w-5 h-5 text-orange-600" /> Experience
                                        </h3>
                                        <p className="text-slate-600 text-sm">16+ years of mastery in POP design and installation.</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-orange-50/30 border border-orange-50">
                                        <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                                            <ShieldCheck className="w-5 h-5 text-orange-600" /> Reputation
                                        </h3>
                                        <p className="text-slate-600 text-sm">Trusted craftsman known for precision and high-end finishes.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-1">
                                <div className="bg-orange-950 rounded-3xl p-8 text-white sticky top-24">
                                    <h3 className="text-xl font-bold mb-6 font-display">Project Focus</h3>
                                    <div className="space-y-6">
                                        <div>
                                            <p className="text-orange-400/50 text-xs uppercase tracking-widest font-bold mb-1">Company</p>
                                            <p className="font-bold">Mawuli POP Ceiling</p>
                                        </div>
                                        <div>
                                            <p className="text-orange-400/50 text-xs uppercase tracking-widest font-bold mb-1">Impact</p>
                                            <p className="font-bold">From "Word of Mouth" to Digital Authority</p>
                                        </div>
                                        <div>
                                            <p className="text-orange-400/50 text-xs uppercase tracking-widest font-bold mb-1">Primary Tool</p>
                                            <p className="font-bold">Lead Generation Portfolio</p>
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
                            <span className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4 block">The Problem</span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy">The Challenge</h2>
                        </div>
                        <div className="prose prose-lg max-w-none text-slate-600">
                            <p className="mb-8 text-xl text-center">
                                How do you take a highly skilled craftsman whose work is mostly offline and word-of-mouth, and position him as a premium expert online?
                            </p>
                            <p className="mb-12">
                                Mawuli had over a decade of stunning projects, but no central place to showcase them. Potential clients had to rely on fragmented photos on his phone or social media to see his work. This made it difficult to:
                            </p>
                            <ul className="space-y-4 mb-12">
                                {[
                                    'Establish professional authority and trust with new clients',
                                    'Provide a high-quality gallery for potential buyers to browse',
                                    'Capture and manage inquiries in a structured way',
                                    'Clearly explain the value of premium POP vs. standard alternatives'
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0 mt-1">
                                            <span className="text-xs font-bold">!</span>
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
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
                                        { title: 'Digital Authority', desc: 'Position the craftsman as a leading expert in the POP industry.' },
                                        { title: 'Visual Gallery', desc: 'Build a high-impact gallery to showcase 16+ years of work.' },
                                        { title: 'Lead Generation', desc: 'Create direct pathways for potential clients to request quotes.' },
                                        { title: 'Service Clarity', desc: 'Clearly explain the different types of POP and design options.' }
                                    ].map((goal, i) => (
                                        <div key={i} className="flex gap-4 p-6 rounded-2xl bg-orange-50/20 border border-slate-100 hover:border-orange-200 transition-colors group">
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-orange-600 font-bold shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-all">
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
                                <div className="absolute inset-0 bg-orange-500/5 rounded-full blur-[100px]"></div>
                                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white p-4">
                                    <div className="aspect-[4/3] bg-orange-50 rounded-2xl flex flex-col items-center justify-center p-12 text-center">
                                        <Images className="w-20 h-20 text-orange-600 mb-6" />
                                        <h4 className="font-display text-2xl font-bold text-navy mb-2">Portfolio-Centric Design</h4>
                                        <p className="text-slate-500 text-sm">Visual-heavy architecture designed to let the work speak for itself.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== THE SOLUTION ===== */}
                <section className="py-24 bg-orange-950 text-white overflow-hidden relative">
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="text-center mb-20">
                            <span className="text-orange-400 font-bold tracking-widest uppercase text-sm mb-4 block">Our Work</span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Visual & Strategic Results</h2>
                            <p className="text-xl text-orange-100/70 max-w-3xl mx-auto leading-relaxed">
                                We designed a website that shifts the focus from "getting a job" to "delivering an experience."
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors group">
                                <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center text-orange-400 mb-8 group-hover:scale-110 transition-transform">
                                    <Brush className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-display">1. Expert Branding</h3>
                                <p className="text-orange-100/60 text-sm leading-relaxed">
                                    Crafted a professional digital identity that separates Mawuli from informal laborers.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors group">
                                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-8 group-hover:scale-110 transition-transform">
                                    <Images className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-display">2. Interactive Gallery</h3>
                                <p className="text-orange-100/60 text-sm leading-relaxed">
                                    Organized hundreds of project photos into themed categories for easy browsing.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors group">
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 transition-transform">
                                    <Zap className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-display">3. Inquiry Engine</h3>
                                <p className="text-orange-100/60 text-sm leading-relaxed">
                                    Integrated Whatsapp and contact forms to convert casual browsers into serious leads.
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
                                        'Professional digital presence that builds instant trust',
                                        'A centralized hub for showcasing 16+ years of work',
                                        'Increased lead generation from new clients',
                                        'Ability to share a single link with potential partners',
                                        'Positioned as a premium brand in the construction industry'
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                                            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                                                <Trophy className="w-5 h-5" />
                                            </div>
                                            <span className="font-bold text-navy text-sm md:text-base">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="bg-orange-600 p-12 rounded-[3.5rem] text-white shadow-2xl shadow-orange-200">
                                    <div className="flex gap-1 mb-6">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 fill-current" />)}
                                    </div>
                                    <blockquote className="text-2xl font-medium italic mb-8 leading-relaxed">
                                        "Adaze built me a website that is helping me show my work to people all over the country. Now, I just send a link and my work does the talking."
                                    </blockquote>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">M</div>
                                        <div>
                                            <div className="font-bold">Mawuli</div>
                                            <div className="text-orange-100 text-sm uppercase tracking-widest font-bold">Founder, Mawuli POP Ceiling</div>
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
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-8">
                            Are You a Craftsman or Business Owner Ready to Brand Up?
                        </h2>
                        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                            We help master craftsmen and business owners turn their years of experience into powerful digital brands that attract better clients.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link href="/start" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xl rounded-full transition-all hover:scale-105 shadow-2xl shadow-orange-200 group">
                                Book a Free Consultation
                                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/portfolio" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-white border-2 border-slate-200 text-navy font-bold text-xl rounded-full hover:border-navy transition-all">
                                More Growing Business Projects
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

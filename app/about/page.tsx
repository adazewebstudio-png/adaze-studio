import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Target, Zap, ShieldCheck, Search, Code2, Rocket, BarChart3, Users, Globe, XCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

// Force static generation for instant loading
export const dynamic = 'force-static'

export const metadata: Metadata = {
    title: 'About Us - Leading Web Design Agency in Ho, Volta Region',
    description: 'Learn about Adaze Web Studio - the premier web design and software development agency in Ho, Ghana. We help businesses grow with modern websites and apps. Meet our team and discover our mission.',
    keywords: ['about Adaze Web Studio', 'web design agency Ho', 'software company Volta Region', 'web developers Ghana', 'tech agency Ho'],
    openGraph: {
        title: 'About Adaze Web Studio | Web Design Agency in Ghana',
        description: 'Discover how we help businesses grow with modern digital solutions',
        url: 'https://adazewebstudio.com/about',
        type: 'website',
    },
    alternates: {
        canonical: 'https://adazewebstudio.com/about',
    },
}

export default function About() {
    return (
        <>
            <Navbar />
            <main id="main-content" className="min-h-screen flex flex-col pt-20">

                {/* ===== HERO SECTION (Premium Grid + Glow) ===== */}
                <section className="pt-24 pb-20 md:pt-36 md:pb-32 px-6 relative overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
                    <div className="absolute top-0 center w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 left-1/2 -translate-x-1/2"></div>

                    <div className="container mx-auto max-w-5xl relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider mb-8 border border-red-100 shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            The Hard Truth
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-8 text-navy">
                            Stop Wasting Money on <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Websites That Do Nothing.</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                            If your website or app is not generating leads, sales, or efficiency, it is actively holding your business back. Most agencies deliver pretty designs. <strong className="text-navy">We deliver results that make your business grow.</strong>
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/start" className="inline-flex items-center justify-center px-10 py-5 bg-navy hover:bg-slate-800 text-white font-bold rounded-full transition-all hover:scale-105 shadow-xl shadow-navy/20 group">
                                Book a Free Consultation
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ===== WHAT WE DO (Glass Cards) ===== */}
                <section className="py-24 bg-slate-50 relative border-y border-slate-200 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl opacity-60"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-60"></div>

                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="text-center mb-20 max-w-4xl mx-auto">
                            <p className="text-primary font-bold tracking-widest uppercase mb-4 text-sm">What We Do</p>
                            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-navy">
                                We Build It. <span className="text-primary decoration-4 underline decoration-primary/20 underline-offset-4">You Own It.</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Adaze Web Studio creates high-performance websites, web apps, and mobile apps that do more than exist online.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="p-10 rounded-[2rem] bg-white border border-slate-100 shadow-xl hover:shadow-2xl shadow-slate-200/50 hover:shadow-slate-200/50 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-amber-500/20 transition-colors"></div>
                                <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mb-8 text-amber-600  group-hover:scale-110 transition-transform">
                                    <BarChart3 className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-navy mb-4 font-display">Generates Leads</h3>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    We engineer every page to convert traffic into revenue, turning passive visitors into active customers.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="p-10 rounded-[2rem] bg-white border border-slate-100 shadow-xl hover:shadow-2xl shadow-slate-200/50 hover:shadow-slate-200/50 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-blue-500/20 transition-colors"></div>
                                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-8 text-blue-600 group-hover:scale-110 transition-transform">
                                    <Zap className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-navy mb-4 font-display">Automates Work</h3>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    We build tools that save you time, automating repetitive tasks so you can focus on growing your business.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="p-10 rounded-[2rem] bg-white border border-slate-100 shadow-xl hover:shadow-2xl shadow-slate-200/50 hover:shadow-slate-200/50 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-emerald-500/20 transition-colors"></div>
                                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-8 text-emerald-600 group-hover:scale-110 transition-transform">
                                    <ShieldCheck className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-navy mb-4 font-display">Unlocks Authority</h3>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    Position your business as the leader in your space with full ownership, full control, and zero vendor lock-in.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== WHO WE SERVE (Immersive Dark Section) ===== */}
                <section className="py-28 bg-navy relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-slate-900 opacity-40"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 blur-[100px] rounded-full"></div>

                    <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary text-xs font-bold uppercase tracking-wider mb-8">
                            <Users className="w-3 h-3" /> Who We Serve
                        </div>
                        <h2 className="font-display text-4xl md:text-6xl font-bold mb-12 text-white leading-tight">
                            Businesses, Associations, & Entrepreneurs <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-200">Who Refuse Mediocrity.</span>
                        </h2>

                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 max-w-4xl mx-auto hover:bg-white/10 transition-colors">
                            <p className="text-2xl md:text-3xl text-slate-100 font-medium leading-relaxed italic font-serif">
                                "If you are tired of digital tools that fail, platforms that confuse your audience, or websites that sit there looking nice while customers leave, we are the solution."
                            </p>
                        </div>
                    </div>
                </section>

                {/* ===== MISSION & VISION (Bento Grid) ===== */}
                <section className="py-24 bg-white relative">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

                    <div className="container mx-auto px-6 max-w-6xl relative z-10">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Mission Tile */}
                            <div className="p-12 rounded-[2.5rem] bg-navy text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/30 transition-colors"></div>
                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-primary text-xs font-bold uppercase tracking-wider mb-8">
                                        <Target className="w-3 h-3" /> Our Mission
                                    </div>
                                    <h3 className="text-4xl font-bold font-display mb-6">Empower & Grow</h3>
                                    <p className="text-slate-300 text-lg leading-relaxed">
                                        To empower small businesses in the Volta Region and beyond by building accessible, high-performance websites and applications that drive tangible growth and operational efficiency.
                                    </p>
                                </div>
                            </div>

                            {/* Vision Tile */}
                            <div className="p-12 rounded-[2.5rem] bg-slate-50 border border-slate-200 relative overflow-hidden group">
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy/5 rounded-full blur-3xl -ml-16 -mb-16"></div>
                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-wider mb-8">
                                        <Globe className="w-3 h-3" /> Our Vision
                                    </div>
                                    <h3 className="text-4xl font-bold font-display text-navy mb-6">Global Transformation</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed">
                                        To become the leading digital transformation partner in Ghana, recognized globally for our commitment to Powering Growth through innovative code and exceptional design.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-16 max-w-2xl mx-auto">
                            <p className="text-xl font-bold text-navy">
                                We do not just design websites. <span className="text-primary underline decoration-2 underline-offset-4">We transform businesses online.</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* ===== WHY WE ARE DIFFERENT (Visual Battle) ===== */}
                <section className="py-24 bg-slate-100 border-y border-slate-200">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-navy">
                                Most Agencies Are Broken. <br />
                                <span className="text-primary">We Are Not.</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-200">
                            {/* The Old Way */}
                            <div className="space-y-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                                <h3 className="text-xl font-bold text-slate-400 uppercase tracking-widest text-center mb-8">The Old Way</h3>
                                <div className="flex items-start gap-4">
                                    <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-slate-800 text-lg mb-1">Pretty Templates</p>
                                        <p className="text-slate-500">Looks nice, does nothing. No strategy behind the pixels.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-slate-800 text-lg mb-1">Guesswork</p>
                                        <p className="text-slate-500">Vague timelines, hidden fees, and "hope it works" mentality.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-slate-800 text-lg mb-1">Compromise</p>
                                        <p className="text-slate-500">Generic solutions that don't fit your actual business needs.</p>
                                    </div>
                                </div>
                            </div>

                            {/* The Adaze Way */}
                            <div className="space-y-8 relative">
                                <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-100 -ml-6 hidden md:block"></div>
                                <h3 className="text-xl font-bold text-primary uppercase tracking-widest text-center mb-8">The Adaze Way</h3>
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-navy text-lg mb-1">Conversion Tools</p>
                                        <p className="text-slate-600">We build tools that convert visitors into paying customers.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-navy text-lg mb-1">Clear Strategy</p>
                                        <p className="text-slate-600">Fast execution, measurable results, and transparent process.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-navy text-lg mb-1">Domination</p>
                                        <p className="text-slate-600">Every solution is designed to dominate your space and scale.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <p className="text-lg text-navy font-bold bg-white inline-block px-8 py-4 rounded-full border border-slate-200 shadow-sm">
                                You are not here to experiment. <span className="text-primary">You are here to win.</span> We make sure you do.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ===== OUR PROCESS (Connected Steps) ===== */}
                <section className="py-24 bg-white relative">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="text-center mb-20">
                            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-navy">
                                We Turn Ideas Into Growth, <span className="text-primary italic">Fast.</span>
                            </h2>
                            <p className="text-slate-600 text-lg">No fluff. No delays. Just results.</p>
                        </div>

                        <div className="relative">
                            {/* Connected Line Background */}
                            <div className="absolute top-[80px] left-0 w-full h-1 bg-gradient-to-r from-red-100 via-purple-100 to-emerald-100 hidden md:block"></div>

                            <div className="grid md:grid-cols-3 gap-12">
                                {/* Step 1 */}
                                <div className="relative text-center group">
                                    <div className="w-40 h-40 mx-auto bg-white border-8 border-red-50 rounded-full flex items-center justify-center mb-8 shadow-2xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                                        <Search className="w-16 h-16 text-red-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-navy mb-4">1. Discover</h3>
                                    <p className="text-slate-600 leading-relaxed px-4">
                                        We dissect your business, audience, and challenges to pinpoint what actually works.
                                    </p>
                                </div>

                                {/* Step 2 */}
                                <div className="relative text-center group">
                                    <div className="w-40 h-40 mx-auto bg-white border-8 border-purple-50 rounded-full flex items-center justify-center mb-8 shadow-2xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                                        <Code2 className="w-16 h-16 text-purple-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-navy mb-4">2. Design & Build</h3>
                                    <p className="text-slate-600 leading-relaxed px-4">
                                        Every feature, interaction, and page is engineered for performance, speed, and conversions.
                                    </p>
                                </div>

                                {/* Step 3 */}
                                <div className="relative text-center group">
                                    <div className="w-40 h-40 mx-auto bg-white border-8 border-emerald-50 rounded-full flex items-center justify-center mb-8 shadow-2xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                                        <Rocket className="w-16 h-16 text-emerald-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-navy mb-4">3. Launch & Support</h3>
                                    <p className="text-slate-600 leading-relaxed px-4">
                                        We deliver solutions that work immediately and continue to grow as your business scales.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== FINAL CALL TO ACTION (Premium Footer) ===== */}
                <section className="py-24 bg-navy relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-slate-900 opacity-20"></div>
                    {/* Glowing Accent */}
                    <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>

                    <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
                            Your Digital Presence Should Be Working for You, <br />
                            <span className="text-primary italic">Not Against You.</span>
                        </h2>

                        <div className="space-y-6 mb-12">
                            <p className="text-xl text-slate-300">
                                If your website is broken, your app is failing, or your competitors are winning online, waiting will only cost you more.
                            </p>
                            <p className="text-2xl font-bold text-white">
                                We are Adaze Web Studio.
                            </p>
                        </div>

                        <Link href="/start" className="inline-flex items-center justify-center px-12 py-6 bg-primary hover:bg-amber-400 text-navy text-xl font-bold rounded-full transition-all hover:scale-105 shadow-2xl shadow-primary/20 group">
                            Book a Free Consultation Now
                            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <p className="text-slate-500 mt-10 font-medium">
                            Tell us what is broken and we will tell you exactly how to fix it, fast.
                        </p>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

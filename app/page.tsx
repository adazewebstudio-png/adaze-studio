import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Globe, Smartphone, Code2, ShoppingCart, BarChart3, ShieldCheck, Zap, Users, Layout, TrendingUp, Clock, Lock } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Force static generation for instant loading
export const dynamic = 'force-static'

export default function Home() {
    return (
        <>
            <Navbar />
            <main id="main-content" className="min-h-screen flex flex-col pt-20">

                {/* ===== HERO SECTION ===== */}
                <section className="relative pt-16 pb-24 md:pt-32 md:pb-40 overflow-hidden bg-white">
                    {/* Background Elements */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-10"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 -z-10"></div>
                    <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10"></div>

                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                            {/* Copy */}
                            <div className="lg:w-1/2 text-center lg:text-left">
                                <span className="inline-block py-1.5 px-3 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-wider mb-8 border border-navy/10 leading-relaxed">
                                    Trusted by real estate, finance, and member-based organizations across Ghana
                                </span>
                                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.25] md:leading-[1.1] mb-6 text-navy tracking-tight">
                                    Conversion-Focused Web Design & Custom Software for <span className="text-primary relative whitespace-nowrap">
                                        Growing Businesses
                                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                        </svg>
                                    </span> in Ghana
                                </h1>
                                <p className="text-lg md:text-xl text-slate-600 mb-8 leading-[1.8] max-w-2xl mx-auto lg:mx-0">
                                    We design and build high-performance websites, portals, and apps that help organizations generate qualified leads, streamline operations, and scale with confidence.
                                </p>

                                {/* Qualifier Statement */}
                                <div className="mb-10 text-sm font-semibold text-slate-500 bg-slate-50 p-4 rounded-l border-l-4 border-primary inline-block text-left">
                                    We’re not a fit if you want a cheap website. <br className="hidden sm:block" />
                                    <span className="text-navy">We are a fit if you want a site that performs.</span>
                                </div>

                                <div className="flex flex-col items-center lg:items-start gap-4">
                                    <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start w-full">
                                        <Link href="/start" className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-amber-400 text-navy font-bold text-lg rounded-full transition-all hover:scale-105 shadow-xl shadow-primary/25 group">
                                            Get a Free 30-Minute Website Audit
                                        </Link>
                                        <Link href="/#case-studies" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-slate-200 hover:border-navy hover:bg-navy hover:text-white text-navy font-bold text-lg rounded-full transition-all">
                                            View Case Studies
                                        </Link>
                                    </div>
                                    <p className="text-sm text-slate-500 flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Discover 5 specific issues hurting your conversions.
                                    </p>
                                </div>
                            </div>

                            {/* Visual */}
                            <div className="lg:w-1/2 w-full relative">
                                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-2 md:p-4 rotate-1 hover:rotate-0 transition-transform duration-500">
                                    <div className="aspect-[4/3] relative rounded-xl overflow-hidden bg-slate-50">
                                        <Image
                                            src="/hero_image.jpg"
                                            alt="Adaze Web Studio digital solutions"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -top-10 -right-10 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
                                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== AUTHORITY & SOCIAL PROOF ===== */}
                <section className="py-20 bg-slate-50 border-y border-slate-200">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
                                Built to Perform. Designed to Convert.
                            </h2>
                        </div>

                        {/* Stats Row */}
                        <div className="grid md:grid-cols-3 gap-8 mb-20">
                            {/* Stat/Proof 1 */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-navy mb-2">3 Major Platforms</h3>
                                <p className="text-slate-600 font-medium">Delivered & Live</p>
                            </div>

                            {/* Stat/Proof 2 */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-2">Diverse Industries</h3>
                                <p className="text-slate-600 font-medium">Real Estate, Finance, Membership Orgs</p>
                            </div>

                            {/* Stat/Proof 3 */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-2">Built for Scale</h3>
                                <p className="text-slate-600 font-medium">Secure, Scalable Systems</p>
                            </div>
                        </div>

                        {/* Testimonial Cards */}
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Testimonial 1: VRARED */}
                            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all relative">
                                <div className="h-12 w-full relative mb-6 flex justify-start">
                                    <Image src="/vrared_logo.png" alt="VRARED Logo" width={120} height={40} className="object-contain object-left" />
                                </div>
                                <blockquote className="text-slate-600 leading-relaxed mb-6">
                                    "The MLS and directory system Adaze built has completely transformed how our association verifies members and manages listings. It's fast, professional, and easy to use."
                                </blockquote>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">VR</div>
                                    <div>
                                        <div className="font-bold text-navy text-sm">Executive Team</div>
                                        <div className="text-slate-500 text-xs">VRARED</div>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 2: AYECCU */}
                            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all relative">
                                <div className="h-12 w-full relative mb-6 flex justify-start">
                                    <Image src="/ayeccu_logo.jpg" alt="AYECCU Logo" width={120} height={40} className="object-contain object-left" />
                                </div>
                                <blockquote className="text-slate-600 leading-relaxed mb-6">
                                    "Our members can now access their financial data securely online. The platform Adaze developed is top-notch and has increased trust in our cooperative."
                                </blockquote>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">AY</div>
                                    <div>
                                        <div className="font-bold text-navy text-sm">Management Board</div>
                                        <div className="text-slate-500 text-xs">AYECCU</div>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 3: Adaze Properties Hub */}
                            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all relative">
                                <div className="h-12 w-full relative mb-6 flex justify-start">
                                    <Image src="/adaze_properties_logo.jpg" alt="Adaze Properties Hub Logo" width={120} height={40} className="object-contain object-left" />
                                </div>
                                <blockquote className="text-slate-600 leading-relaxed mb-6">
                                    "Having a dedicated platform for our properties has streamlined our sales process and made it easier for clients to find what they need. Highly recommended."
                                </blockquote>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-sm">AP</div>
                                    <div>
                                        <div className="font-bold text-navy text-sm">Director</div>
                                        <div className="text-slate-500 text-xs">Adaze Properties Hub</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== SERVICES OVERVIEW ===== */}
                <section className="py-24 bg-white relative overflow-hidden" id="services">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="max-w-3xl mb-20">
                            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">What We Do</span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
                                Everything we build is designed to perform — not just look good.
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Service 1 */}
                            <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-navy hover:text-white hover:border-navy hover:shadow-xl transition-all duration-300">
                                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-white/10 group-hover:text-white transition-colors">
                                    <Globe className="w-7 h-7 text-primary group-hover:text-amber-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 font-display">Web Design & Conversion</h3>
                                <p className="text-slate-600 group-hover:text-slate-300 leading-relaxed text-sm">
                                    High-performance websites optimized for speed, search visibility, and lead generation.
                                </p>
                            </div>

                            {/* Service 2 */}
                            <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-navy hover:text-white hover:border-navy hover:shadow-xl transition-all duration-300">
                                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-white/10 group-hover:text-white transition-colors">
                                    <Code2 className="w-7 h-7 text-blue-600 group-hover:text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 font-display">Custom Software & Portals</h3>
                                <p className="text-slate-600 group-hover:text-slate-300 leading-relaxed text-sm">
                                    Secure platforms for member management, internal operations, and business automation.
                                </p>
                            </div>

                            {/* Service 3 */}
                            <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-navy hover:text-white hover:border-navy hover:shadow-xl transition-all duration-300">
                                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-white/10 group-hover:text-white transition-colors">
                                    <ShoppingCart className="w-7 h-7 text-emerald-600 group-hover:text-emerald-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 font-display">E-Commerce Development</h3>
                                <p className="text-slate-600 group-hover:text-slate-300 leading-relaxed text-sm">
                                    Online stores designed for speed, usability, and consistent sales growth.
                                </p>
                            </div>

                            {/* Service 4 */}
                            <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-navy hover:text-white hover:border-navy hover:shadow-xl transition-all duration-300">
                                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-white/10 group-hover:text-white transition-colors">
                                    <Smartphone className="w-7 h-7 text-purple-600 group-hover:text-purple-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 font-display">Mobile App Development</h3>
                                <p className="text-slate-600 group-hover:text-slate-300 leading-relaxed text-sm">
                                    Cross-platform mobile apps for businesses building digital products and services.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 text-center">
                            <Link href="/services" className="inline-flex items-center text-primary font-bold hover:text-amber-600 transition-colors group text-lg">
                                Explore Our Services <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ===== PROCESS ===== */}
                <section className="py-24 bg-navy text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-slate-900 opacity-20"></div>
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="text-center mb-20">
                            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">A Simple, Proven Process</h2>
                            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                                We've refined our workflow to deliver exceptional results without the headaches.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8 relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-slate-800 -z-10"></div>

                            {/* Step 1 */}
                            <div className="relative">
                                <div className="w-16 h-16 rounded-full bg-primary text-navy font-bold text-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 shadow-lg shadow-primary/20">1</div>
                                <h3 className="text-xl font-bold mb-3">Audit & Strategy</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    We start by understanding your goals, users, and current challenges.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="relative">
                                <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-700 text-white font-bold text-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">2</div>
                                <h3 className="text-xl font-bold mb-3">Design & Build</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    We design and build a fast, scalable solution tailored to your business.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="relative">
                                <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-700 text-white font-bold text-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">3</div>
                                <h3 className="text-xl font-bold mb-3">Optimise & Launch</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Performance, SEO, and conversion optimization are built in — not added later.
                                </p>
                            </div>

                            {/* Step 4 */}
                            <div className="relative">
                                <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-700 text-white font-bold text-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">4</div>
                                <h3 className="text-xl font-bold mb-3">Support & Growth</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    We provide ongoing support and improvements as your business grows.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== FEATURED CASE STUDIES ===== */}
                <section id="case-studies" className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                            <div>
                                <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
                                    Platforms and websites built for real-world use, with measurable outcomes.
                                </h2>
                                <p className="text-slate-600 text-lg">See how we solve complex problems for Ghanaian businesses.</p>
                            </div>
                            <Link href="/portfolio" className="hidden md:inline-flex items-center justify-center px-6 py-3 bg-white border border-slate-200 hover:border-primary text-navy font-bold rounded-full transition-all hover:shadow-lg">
                                View All Case Studies
                            </Link>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Case Study 1: VRARED */}
                            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
                                <div className="h-64 bg-slate-100 relative p-10 flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-blue-50/50 group-hover:bg-blue-50/30 transition-colors"></div>
                                    <Image src="/vrared_logo.png" alt="VRARED Logo" width={200} height={100} className="object-contain relative z-10 group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="p-8 md:p-10 flex-grow flex flex-col">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="bg-blue-100 text-blue-700 px-3 py-1 text-xs font-bold uppercase tracking-wide rounded-full">Real Estate Directory</span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-navy mb-4 font-display">VRARED</h3>

                                    {/* Metrics */}
                                    <div className="mb-8 space-y-4">
                                        <div className="flex items-start gap-3">
                                            <div className="p-1.5 bg-green-100 rounded-full text-green-700 mt-0.5"><TrendingUp className="w-4 h-4" /></div>
                                            <div>
                                                <p className="font-bold text-navy text-sm">Digitized 100%</p>
                                                <p className="text-slate-500 text-xs text-balance">Of manual member records into a searchable database.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="p-1.5 bg-green-100 rounded-full text-green-700 mt-0.5"><Clock className="w-4 h-4" /></div>
                                            <div>
                                                <p className="font-bold text-navy text-sm">90% Faster</p>
                                                <p className="text-slate-500 text-xs text-balance">Member verification time reduced from weeks to minutes.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Link href="/portfolio/vrared" className="inline-flex items-center text-navy font-bold hover:text-primary transition-colors mt-auto">
                                        Read Case Study <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </div>
                            </div>

                            {/* Case Study 2: AYECCU */}
                            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
                                <div className="h-64 bg-slate-100 relative p-10 flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-emerald-50/50 group-hover:bg-emerald-50/30 transition-colors"></div>
                                    <Image src="/ayeccu_logo.jpg" alt="AYECCU Logo" width={200} height={100} className="object-contain relative z-10 group-hover:scale-110 transition-transform duration-500 rounded-xl" />
                                </div>
                                <div className="p-8 md:p-10 flex-grow flex flex-col">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 text-xs font-bold uppercase tracking-wide rounded-full">FinTech Platform</span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-navy mb-4 font-display">AYECCU</h3>

                                    {/* Metrics */}
                                    <div className="mb-8 space-y-4">
                                        <div className="flex items-start gap-3">
                                            <div className="p-1.5 bg-green-100 rounded-full text-green-700 mt-0.5"><Lock className="w-4 h-4" /></div>
                                            <div>
                                                <p className="font-bold text-navy text-sm">Secure Data</p>
                                                <p className="text-slate-500 text-xs text-balance">Bank-grade security implemented for sensitive financial data.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="p-1.5 bg-green-100 rounded-full text-green-700 mt-0.5"><Users className="w-4 h-4" /></div>
                                            <div>
                                                <p className="font-bold text-navy text-sm">50+ Members</p>
                                                <p className="text-slate-500 text-xs text-balance">Platform scaled to support growing cooperative membership.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Link href="/portfolio/ayeccu" className="inline-flex items-center text-navy font-bold hover:text-primary transition-colors mt-auto">
                                        Read Case Study <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </div>
                            </div>

                            {/* Case Study 3: Adaze Properties Hub */}
                            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
                                <div className="h-64 bg-slate-100 relative p-10 flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-amber-50/50 group-hover:bg-amber-50/30 transition-colors"></div>
                                    <Image src="/adaze_properties_logo.jpg" alt="Adaze Properties Hub Logo" width={200} height={100} className="object-contain relative z-10 group-hover:scale-110 transition-transform duration-500 rounded-xl" />
                                </div>
                                <div className="p-8 md:p-10 flex-grow flex flex-col">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="bg-amber-100 text-amber-700 px-3 py-1 text-xs font-bold uppercase tracking-wide rounded-full">Property Sales</span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-navy mb-4 font-display">Adaze Properties Hub</h3>

                                    {/* Metrics */}
                                    <div className="mb-8 space-y-4">
                                        <div className="flex items-start gap-3">
                                            <div className="p-1.5 bg-green-100 rounded-full text-green-700 mt-0.5"><TrendingUp className="w-4 h-4" /></div>
                                            <div>
                                                <p className="font-bold text-navy text-sm">300% Visibility</p>
                                                <p className="text-slate-500 text-xs text-balance">Increase in search visibility for key property listings.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="p-1.5 bg-green-100 rounded-full text-green-700 mt-0.5"><Users className="w-4 h-4" /></div>
                                            <div>
                                                <p className="font-bold text-navy text-sm">50+ Leads/Mo</p>
                                                <p className="text-slate-500 text-xs text-balance">Consistent stream of qualified buyer inquiries generated.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Link href="/portfolio" className="inline-flex items-center text-navy font-bold hover:text-primary transition-colors mt-auto">
                                        Read Case Study <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 md:hidden text-center">
                            <Link href="/portfolio" className="inline-flex items-center justify-center px-6 py-3 bg-white border border-slate-200 hover:border-primary text-navy font-bold rounded-full transition-all hover:shadow-lg w-full">
                                View All Case Studies
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ===== WHY CHOOSE ADAZE ===== */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="bg-navy rounded-[2.5rem] p-8 md:p-16 lg:p-20 relative overflow-hidden">
                            {/* Decoration */}
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3"></div>

                            <div className="flex flex-col lg:flex-row gap-16 relative z-10">
                                <div className="lg:w-1/3">
                                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                                        Why Businesses Choose Adaze
                                    </h2>
                                    <p className="text-slate-300 text-lg">
                                        We don't just build websites. We build assets that work for your business 24/7.
                                    </p>
                                </div>

                                <div className="lg:w-2/3">
                                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1">
                                                <Target className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-bold text-lg mb-2">Conversion-First</h3>
                                                <p className="text-slate-400 text-sm">Design focused on results, leads, and sales — not just chasing design trends.</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1">
                                                <Zap className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-bold text-lg mb-2">Fast, Secure & SEO-Ready</h3>
                                                <p className="text-slate-400 text-sm">Builds that Google loves and customers trust. Optimization is standard.</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1">
                                                <Globe className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-bold text-lg mb-2">Local & Global</h3>
                                                <p className="text-slate-400 text-sm">Deep local market expertise combined with global development standards.</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1">
                                                <Users className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-bold text-lg mb-2">Transparent Process</h3>
                                                <p className="text-slate-400 text-sm">Clear communication, no hidden fees, and scale-ready solutions.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== FAQ SECTION ===== */}
                <section className="py-24 bg-slate-50 border-t border-slate-200">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="text-center mb-16">
                            <h2 className="font-display text-4xl font-bold text-navy mb-4">Common Questions</h2>
                            <p className="text-slate-600">Answers to your questions about working with us.</p>
                        </div>

                        <div className="space-y-4">
                            {/* FAQ Item 1 */}
                            <details className="group bg-white rounded-2xl border border-slate-200 overflow-hidden open:shadow-md transition-all duration-300">
                                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-navy text-lg select-none list-none">
                                    How much does a website cost in Ghana?
                                    <span className="transform transition-transform group-open:rotate-180 text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                                    Website costs in Ghana vary based on complexity. At Adaze Web Studio, basic business websites generally start from GH₵ 2,000, while e-commerce platforms and custom web applications typically range from GH₵ 5,000 to GH₵ 20,000+. We provide a detailed audit and fixed-price quote to ensure total transparency.
                                </div>
                            </details>

                            {/* FAQ Item 2 */}
                            <details className="group bg-white rounded-2xl border border-slate-200 overflow-hidden open:shadow-md transition-all duration-300">
                                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-navy text-lg select-none list-none">
                                    How long does it take to build a website or app?
                                    <span className="transform transition-transform group-open:rotate-180 text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                                    Adaze Web Studio is known for speed. Most standard business websites are delivered in 5–14 days. Larger enterprise platforms, mobile apps, or member portals (like those for VRARED or AYECCU) typically take 4–8 weeks, depending on specific functional requirements.
                                </div>
                            </details>

                            {/* FAQ Item 3 */}
                            <details className="group bg-white rounded-2xl border border-slate-200 overflow-hidden open:shadow-md transition-all duration-300">
                                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-navy text-lg select-none list-none">
                                    Do you redesign existing websites for better conversion?
                                    <span className="transform transition-transform group-open:rotate-180 text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                                    Yes. We specialize in high-impact redesigns that solve core business problems. We audit your current UX, performance, and messaging to transform slow, underperforming sites into fast, conversion-driven digital assets.
                                </div>
                            </details>

                            {/* FAQ Item 4 */}
                            <details className="group bg-white rounded-2xl border border-slate-200 overflow-hidden open:shadow-md transition-all duration-300">
                                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-navy text-lg select-none list-none">
                                    Is SEO, AEO, and performance included?
                                    <span className="transform transition-transform group-open:rotate-180 text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                                    Absolutely. Every build includes technical SEO, Answer Engine Optimization (AEO), and high-performance benchmarking. We implement structured data (JSON-LD) so that AI bots and search engines can clearly understand and recommend your services.
                                </div>
                            </details>

                            {/* FAQ Item 5 */}
                            <details className="group bg-white rounded-2xl border border-slate-200 overflow-hidden open:shadow-md transition-all duration-300">
                                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-navy text-lg select-none list-none">
                                    What support do you offer after launch?
                                    <span className="transform transition-transform group-open:rotate-180 text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                                    We provide proactive maintenance, security monitoring, and performance updates. Beyond simple fixes, we offer "Growth Support" to monitor your analytics and continually optimize your site based on real user behavior.
                                </div>
                            </details>
                        </div>
                    </div>
                </section>

                {/* ===== FINAL CTA SECTION ===== */}
                <section className="py-24 md:py-32 relative bg-navy overflow-hidden">
                    <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
                    <div className="absolute -top-[300px] -right-[300px] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                        <span className="inline-block text-primary font-bold tracking-wider uppercase text-sm mb-4">Start Growing Today</span>
                        <h2 className="font-display text-4xl md:text-5xl md:leading-tight font-bold mb-6 text-white">
                            Ready to Fix What’s Stopping Your Website From Converting?
                        </h2>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Get a free 30-minute website growth audit and discover what's stopping your site from converting visitors into customers.
                        </p>
                        <div className="flex flex-col items-center gap-4">
                            <Link href="/start" className="inline-flex items-center justify-center px-10 py-5 bg-primary hover:bg-amber-400 text-navy text-xl font-bold rounded-full transition-all hover:scale-105 shadow-xl shadow-primary/30 group">
                                Get My Free Audit
                                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <p className="text-slate-400 text-sm">No obligation. Actionable insights you can use immediately.</p>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

function Target({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
        </svg>
    )
}

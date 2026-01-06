import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, AlertTriangle, Target, Rocket, Globe, Code2, Smartphone, Search, Wrench, Send, CheckCircle2, Zap, BarChart3, Layout } from 'lucide-react'
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
                <section className="pt-12 pb-20 md:pt-24 md:pb-32 px-6 relative overflow-hidden bg-white bg-grid-slate-100">
                    {/* Background Gradient Blob */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

                    <div className="container mx-auto max-w-7xl relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                            {/* Hero Text */}
                            <div className="md:w-1/2 text-center md:text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-wider mb-6 border border-navy/10">
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                    Web Design & Development Agency
                                </div>
                                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-navy">
                                    Your website is <br className="hidden md:block" />
                                    <span className="text-red-500">costing you customers.</span>
                                </h1>
                                <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
                                    Most websites look good but fail to convert. We build digital platforms engineered to turn attention into revenue.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                    <Link href="/start" className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-amber-400 text-navy font-bold rounded-full transition-all hover:scale-105 shadow-xl shadow-primary/25 group">
                                        Fix My Website
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/#portfolio" className="inline-flex items-center justify-center px-8 py-4 bg-white border border-slate-200 hover:border-primary hover:text-primary text-navy font-bold rounded-full transition-all hover:shadow-lg">
                                        View Our Work
                                    </Link>
                                </div>
                                <div className="flex items-center justify-center md:justify-start gap-6 mt-10 text-slate-400 text-sm font-medium">
                                    <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Conversion Focused</span>
                                    <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Fast Performance</span>
                                </div>
                            </div>

                            {/* Hero Visual */}
                            <div className="md:w-1/2 w-full relative">
                                <div className="relative w-full aspect-square md:aspect-[4/3] max-w-lg mx-auto">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-2xl transform scale-90"></div>
                                    <Image
                                        src="/hero_image.jpg"
                                        alt="Abstract 3D architectural representation of digital growth and structure"
                                        fill
                                        className="object-contain drop-shadow-2xl animate-fade-in"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== PROBLEM SECTION (Visual Grid) ===== */}
                <section className="py-20 md:py-28 bg-white relative border-y border-slate-100">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-navy">
                                Most websites are <span className="text-red-500">invisible liabilities.</span>
                            </h2>
                            <p className="text-lg text-slate-600">
                                If your site isn't clearly guiding people to buy, it's not just sitting there—it's actively repelling your future clients.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6 text-red-600">
                                    <Layout className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-3">Confusing Layouts</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Visitors leave locally within seconds if they can't instantly find what they need. Confusion kills conversion.
                                </p>
                            </div>
                            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6 text-red-600">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-3">Slow Performance</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Every second of load time drops your sales by 20%. Slow sites don't get ranked, and they don't sell.
                                </p>
                            </div>
                            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6 text-red-600">
                                    <Target className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-3">Weak Messaging</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Vague assertions like "We offer quality services" mean nothing. Your copy needs to cut through the noise.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== SERVICES SECTION (Cards) ===== */}
                <section className="py-20 md:py-28 bg-slate-50 bg-grid-slate-100">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                            <div className="max-w-2xl">
                                <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-navy">
                                    We build <span className="text-primary">growth engines.</span>
                                </h2>
                                <p className="text-lg text-slate-600">
                                    From high-conversion landing pages to complex web applications.
                                </p>
                            </div>
                            <Link href="/services" className="hidden md:inline-flex items-center text-primary hover:text-amber-600 font-bold transition-colors group">
                                View all services
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Service 1 */}
                            <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16 transition-all group-hover:bg-primary/10"></div>
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 relative z-10">
                                    <Globe className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-navy mb-4 font-display relative z-10">Websites</h3>
                                <p className="text-slate-600 leading-relaxed mb-6 relative z-10">
                                    Fast, responsive, and SEO-optimized sites designed to turn visitors into paying customers.
                                </p>
                                <ul className="space-y-2 text-sm text-slate-500 relative z-10">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Landing Pages</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Corporate Sites</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> E-commerce</li>
                                </ul>
                            </div>

                            {/* Service 2 */}
                            <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/5 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl -mr-16 -mt-16 transition-all group-hover:bg-purple-500/10"></div>
                                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-8 relative z-10">
                                    <Code2 className="w-7 h-7 text-purple-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-navy mb-4 font-display relative z-10">Web Types</h3>
                                <p className="text-slate-600 leading-relaxed mb-6 relative z-10">
                                    Custom software solutions for businesses that have outgrown spreadsheets and basic tools.
                                </p>
                                <ul className="space-y-2 text-sm text-slate-500 relative z-10">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500" /> Client Portals</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500" /> SaaS Platforms</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500" /> Internal Tools</li>
                                </ul>
                            </div>

                            {/* Service 3 */}
                            <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/5 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl -mr-16 -mt-16 transition-all group-hover:bg-emerald-500/10"></div>
                                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-8 relative z-10">
                                    <Smartphone className="w-7 h-7 text-emerald-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-navy mb-4 font-display relative z-10">Mobile Apps</h3>
                                <p className="text-slate-600 leading-relaxed mb-6 relative z-10">
                                    Native iOS and Android applications that provide seamless mobile experiences for your users.
                                </p>
                                <ul className="space-y-2 text-sm text-slate-500 relative z-10">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> iOS & Android</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Cross-platform</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> App Store Launch</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 text-center md:hidden">
                            <Link href="/services" className="inline-flex items-center text-primary hover:text-amber-600 font-bold transition-colors group">
                                View all services
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ===== WORK SECTION (Split Layouts) ===== */}
                <section id="portfolio" className="py-20 md:py-28 bg-white border-y border-slate-100">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-navy">
                                Proven Results.
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                We help ambitious organizations across Ghana transform their digital presence.
                            </p>
                        </div>

                        <div className="space-y-20 md:space-y-32">
                            {/* Project 1 - VRARED */}
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="order-2 md:order-1 relative group">
                                    <div className="absolute inset-0 bg-primary/20 rounded-3xl rotate-3 scale-95 group-hover:rotate-6 transition-transform -z-10"></div>
                                    <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 shadow-xl">
                                        <div className="aspect-[4/3] relative flex items-center justify-center p-12 bg-white">
                                            <Image src="/vrared_logo.png" alt="VRARED corporate website" fill className="object-contain p-12" />
                                        </div>
                                    </div>
                                </div>
                                <div className="order-1 md:order-2">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                                        Real Estate / Regulatory
                                    </div>
                                    <h3 className="text-4xl font-bold font-display text-navy mb-4">VRARED</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                        The Volta Region Association of Real Estate Developers needed a digital platform to verify members, an MLS for their brokers, LMS for training and build public trust. We built a comprehensive directory system that establishes instantaneous credibility.
                                    </p>
                                    <ul className="grid grid-cols-2 gap-4 mb-8">
                                        <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-primary" /> Member Verification</li>
                                        <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-primary" /> Public Directory</li>
                                        <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-primary" /> MLS System</li>
                                        <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-primary" /> Learning Management</li>
                                        <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-primary" /> SEO Optimized</li>
                                    </ul>
                                    <a href="https://vrared.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-navy text-white rounded-full hover:bg-slate-800 transition-colors font-semibold">
                                        View Live Site <ArrowRight className="w-4 h-4 ml-2" />
                                    </a>
                                </div>
                            </div>

                            {/* Project 2 - AYECCU */}
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="order-1 md:order-2 relative group">
                                    <div className="absolute inset-0 bg-emerald-500/20 rounded-3xl -rotate-3 scale-95 group-hover:-rotate-6 transition-transform -z-10"></div>
                                    <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 shadow-xl">
                                        <div className="aspect-[4/3] relative flex items-center justify-center p-12 bg-white">
                                            <Image src="/ayeccu_logo.jpg" alt="AYECCU financial platform" fill className="object-contain p-12" />
                                        </div>
                                    </div>
                                </div>
                                <div className="order-2 md:order-1">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
                                        Finance / Cooperative
                                    </div>
                                    <h3 className="text-4xl font-bold font-display text-navy mb-4">AYECCU</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                        Asogli Youth Entrepreneurs needed a comprehensive management system to run the credit union's operations. We created a secure, professional financial platform that digitizes member records and sets a new standard for trust.
                                    </p>
                                    <ul className="grid grid-cols-2 gap-4 mb-8">
                                        <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Operations Management</li>
                                        <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Mobile First</li>
                                        <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Lead Generation</li>
                                    </ul>
                                    <a href="https://ayecghana.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-navy text-white rounded-full hover:bg-slate-800 transition-colors font-semibold">
                                        View Live Site <ArrowRight className="w-4 h-4 ml-2" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-20 text-center">
                            <Link href="/portfolio" className="inline-flex items-center px-8 py-4 bg-white border-2 border-slate-200 text-navy font-bold rounded-full hover:border-navy hover:bg-navy hover:text-white transition-all group">
                                View Full Portfolio <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ===== FINAL CTA SECTION ===== */}
                <section className="py-24 md:py-32 relative bg-navy overflow-hidden">
                    <div className="absolute inset-0 bg-grid-slate-900 opacity-20"></div>
                    <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                            Ready to stop losing customers?
                        </h2>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                            A better website is the highest ROI investment you can make this year. Let's build it.
                        </p>
                        <Link href="/start" className="inline-flex items-center justify-center px-10 py-5 bg-primary hover:bg-amber-400 text-navy text-xl font-bold rounded-full transition-all hover:scale-105 shadow-xl shadow-primary/30 group">
                            Book a Free Consultation
                            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </section>

            </main >
            <Footer />
        </>
    )
}

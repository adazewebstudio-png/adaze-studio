import Link from 'next/link'
import { ArrowRight, Globe, Smartphone, ShieldCheck, Code2, ShoppingCart, CheckCircle2, Zap, Users, Search, TrendingUp, Lock, Layout } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

// Force static generation for instant loading
export const dynamic = 'force-static'

export const metadata = {
    title: 'Digital Services & Solutions | Adaze Web Studio',
    description: 'Web design, custom software, e-commerce, and mobile app development services in Ghana. Built for performance and measurable growth.',
}

export default function Services() {
    return (
        <>
            <Navbar />
            <main id="main-content" className="min-h-screen pt-20 bg-white">

                {/* ===== HERO SECTION ===== */}
                <section className="relative py-20 md:py-32 overflow-hidden bg-slate-50">
                    <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100/50 text-blue-700 text-sm font-bold uppercase tracking-wider mb-6 border border-blue-200">
                            Our Services
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-navy leading-[1.1]">
                            Digital Solutions Built to Solve <span className="text-primary">Real Business Problems</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
                            We design and develop websites, software platforms, and digital products for businesses that need more than aesthetics — they need performance, reliability, and measurable growth.
                        </p>
                        <p className="text-lg font-medium text-navy">
                            Every service we offer is focused on clarity, conversion, and long-term scalability.
                        </p>
                    </div>
                </section>

                {/* ===== SERVICE 1: WEB DESIGN ===== */}
                <section className="py-24 border-b border-slate-100" id="web-design">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex flex-col lg:flex-row gap-16 items-start">
                            <div className="lg:w-1/2 sticky top-24">
                                <div className="inline-flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm mb-4">
                                    <Globe className="w-5 h-5" />
                                    Web Design & Conversion Optimization
                                </div>
                                <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                                    Websites Built to Rank, Convert, and Build Trust
                                </h2>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    Your website is not a design asset — it’s a business tool. We design high-performance websites that attract the right traffic, communicate value clearly, and convert visitors into leads or customers.
                                </p>

                                <div className="bg-slate-50 rounded-2xl p-8 mb-8 border border-slate-100">
                                    <h4 className="font-bold text-navy mb-4 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                        This is ideal if your current website:
                                    </h4>
                                    <ul className="space-y-3">
                                        {[
                                            "Looks good but doesn’t generate leads",
                                            "Loads slowly or performs poorly on mobile",
                                            "Doesn’t rank on Google",
                                            "Fails to communicate credibility or clarity"
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-3 text-slate-600 text-sm">
                                                <span className="text-red-400 mt-0.5">✕</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link href="/start?service=web" className="inline-flex items-center text-white bg-navy hover:bg-slate-800 px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-navy/20 group">
                                    Request a Website Growth Audit <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="lg:w-1/2 space-y-12">
                                {/* Deliverables */}
                                <div>
                                    <h3 className="text-2xl font-bold text-navy mb-6 font-display">What We Deliver</h3>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {[
                                            "Custom UI/UX design",
                                            "SEO-ready site structure",
                                            "Conversion-focused layouts",
                                            "Fast load times",
                                            "Mobile-first performance",
                                            "Clear calls-to-action"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                                <span className="font-medium text-slate-700 text-sm">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Context Block */}
                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-bold text-slate-400 uppercase text-xs tracking-wider mb-4">Best For</h4>
                                        <ul className="space-y-2 text-slate-700 font-medium">
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div>Service-based businesses</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div>Professional organizations</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div>Rebrands & Redesigns</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-400 uppercase text-xs tracking-wider mb-4">Outcome</h4>
                                        <p className="text-slate-700 leading-relaxed bg-primary/5 p-4 rounded-xl border border-primary/10 text-sm">
                                            A website that attracts qualified traffic, builds trust instantly, and consistently converts visitors into leads.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== SERVICE 2: CUSTOM SOFTWARE ===== */}
                <section className="py-24 bg-slate-50 border-b border-slate-200" id="software">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">
                            <div className="lg:w-1/2 sticky top-24">
                                <div className="inline-flex items-center gap-2 text-blue-600 font-bold tracking-wider uppercase text-sm mb-4">
                                    <Code2 className="w-5 h-5" />
                                    Custom Software & Business Portals
                                </div>
                                <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                                    Secure Platforms That Replace Manual Work and Scattered Tools
                                </h2>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    We build custom software systems and portals for businesses that need control, automation, and security — not off-the-shelf limitations.
                                </p>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    If your operations rely on spreadsheets, WhatsApp, email chains, or disconnected tools, custom software can radically simplify how your business runs.
                                </p>

                                <Link href="/start?service=software" className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-blue-600/20 group">
                                    Discuss a Custom Platform <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="lg:w-1/2 space-y-12">
                                {/* Deliverables */}
                                <div>
                                    <h3 className="text-2xl font-bold text-navy mb-6 font-display">What We Build</h3>
                                    <div className="space-y-3">
                                        {[
                                            "Member management systems",
                                            "Internal business dashboards",
                                            "Secure client portals",
                                            "Verification and approval systems",
                                            "Workflow automation platforms"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200">
                                                <Layout className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                                <span className="font-bold text-navy">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white p-8 rounded-2xl border border-slate-200">
                                    <h3 className="text-lg font-bold text-navy mb-4 font-display">What This Solves</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            "Manual admin work",
                                            "Data errors",
                                            "Security issues",
                                            "Poor visibility"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Context Block */}
                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-bold text-slate-400 uppercase text-xs tracking-wider mb-4">Best For</h4>
                                        <ul className="space-y-2 text-slate-700 font-medium text-sm">
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></div>Associations & Membership Orgs</li>
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></div>Financial Cooperatives</li>
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></div>Real Estate Platforms</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-400 uppercase text-xs tracking-wider mb-4">Outcome</h4>
                                        <p className="text-slate-700 leading-relaxed bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm">
                                            A secure, scalable system that improves efficiency, reduces errors, and gives you full ownership of your data.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== SERVICE 3: E-COMMERCE ===== */}
                <section className="py-24 border-b border-slate-100" id="ecommerce">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex flex-col lg:flex-row gap-16 items-start">
                            <div className="lg:w-1/2 sticky top-24">
                                <div className="inline-flex items-center gap-2 text-emerald-600 font-bold tracking-wider uppercase text-sm mb-4">
                                    <ShoppingCart className="w-5 h-5" />
                                    E-Commerce Development
                                </div>
                                <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                                    Online Stores Designed to Convert Visitors Into Buyers
                                </h2>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    We build fast, secure e-commerce websites focused on usability, trust, and conversion — not just product listings.
                                </p>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    From product discovery to checkout, every step is optimized to reduce friction and increase completed purchases.
                                </p>

                                <Link href="/start?service=ecommerce" className="inline-flex items-center text-white bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-emerald-600/20 group">
                                    Plan Your E-Commerce Build <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="lg:w-1/2 space-y-12">
                                {/* Deliverables */}
                                <div>
                                    <h3 className="text-2xl font-bold text-navy mb-6 font-display">What We Deliver</h3>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {[
                                            "Custom e-commerce design",
                                            "Mobile-first shopping",
                                            "Optimized product pages",
                                            "Secure payment gateways",
                                            "Speed optimization",
                                            "Conversion-focused checkout"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                                <span className="font-medium text-slate-700 text-sm">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-emerald-50/50 p-8 rounded-2xl border border-emerald-100">
                                    <h3 className="text-lg font-bold text-navy mb-4 font-display">What Makes Our Approach Different</h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Emphasis on usability and buyer trust",
                                            "Clean, distraction-free product layouts",
                                            "Performance optimization for real-world networks",
                                            "SEO-friendly structure for product discovery"
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-3 text-slate-700 text-sm">
                                                <Zap className="w-4 h-4 text-emerald-600 mt-0.5" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Context Block */}
                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-bold text-slate-400 uppercase text-xs tracking-wider mb-4">Best For</h4>
                                        <ul className="space-y-2 text-slate-700 font-medium text-sm">
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2"></div>Established businesses</li>
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2"></div>Scaling brands</li>
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2"></div>Long-term growth focused</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-400 uppercase text-xs tracking-wider mb-4">Outcome</h4>
                                        <p className="text-slate-700 leading-relaxed bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-sm">
                                            An online store that loads fast, builds confidence, and consistently turns visitors into customers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== SERVICE 4: MOBILE APPS ===== */}
                <section className="py-24 bg-slate-50" id="mobile">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">
                            <div className="lg:w-1/2 sticky top-24">
                                <div className="inline-flex items-center gap-2 text-purple-600 font-bold tracking-wider uppercase text-sm mb-4">
                                    <Smartphone className="w-5 h-5" />
                                    Mobile App Development
                                </div>
                                <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                                    Cross-Platform Mobile Apps Built for Real Business Use
                                </h2>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    We design and develop cross-platform mobile applications for businesses launching digital products, internal tools, or customer-facing platforms.
                                </p>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    Our focus is not “apps for the sake of apps” — it’s building solutions that solve specific problems and integrate seamlessly with your business.
                                </p>

                                <Link href="/start?service=app" className="inline-flex items-center text-white bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-purple-600/20 group">
                                    Talk to Us About Your App <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="lg:w-1/2 space-y-12">
                                {/* Deliverables */}
                                <div>
                                    <h3 className="text-2xl font-bold text-navy mb-6 font-display">What We Build</h3>
                                    <div className="space-y-3">
                                        {[
                                            "Cross-platform mobile apps (iOS & Android)",
                                            "Customer-facing applications",
                                            "Internal business apps",
                                            "Apps connected to existing portals"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200">
                                                <Smartphone className="w-5 h-5 text-purple-500 flex-shrink-0" />
                                                <span className="font-bold text-navy">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white p-8 rounded-2xl border border-slate-200">
                                    <h3 className="text-lg font-bold text-navy mb-4 font-display">Our Development Approach</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600">
                                        {[
                                            "Clear scope definition",
                                            "UX focused on clarity",
                                            "Secure architecture",
                                            "Scalable infrastructure",
                                            "Ongoing support",
                                            "Iteration readiness"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-purple-500" /> {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Context Block */}
                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-bold text-slate-400 uppercase text-xs tracking-wider mb-4">Best For</h4>
                                        <ul className="space-y-2 text-slate-700 font-medium text-sm">
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2"></div>Verified App Ideas</li>
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2"></div>Platform Extensions</li>
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2"></div>Internal Operations</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-400 uppercase text-xs tracking-wider mb-4">Outcome</h4>
                                        <p className="text-slate-700 leading-relaxed bg-purple-50 p-4 rounded-xl border border-purple-100 text-sm">
                                            A stable, scalable mobile app that supports your business goals — not a technical liability.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== GUIDE SECTION ===== */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">Not Sure Which Service You Need?</h2>
                            <p className="text-slate-600 text-lg">Many clients come to us knowing their problem, not the solution. That’s normal.</p>
                        </div>

                        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12">
                            <h3 className="font-bold text-slate-400 uppercase text-xs tracking-wider mb-8 text-center">Quick Guide</h3>
                            <div className="space-y-4">
                                <Link href="#web-design" className="flex items-center justify-between p-6 bg-white rounded-xl border border-slate-200 hover:border-primary hover:shadow-md transition-all group">
                                    <span className="font-medium text-slate-700">Need more leads or credibility?</span>
                                    <span className="flex items-center gap-2 font-bold text-navy group-hover:text-primary">Web Design <ArrowRight className="w-4 h-4" /></span>
                                </Link>
                                <Link href="#software" className="flex items-center justify-between p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group">
                                    <span className="font-medium text-slate-700">Managing members, data, or operations?</span>
                                    <span className="flex items-center gap-2 font-bold text-navy group-hover:text-blue-600">Custom Software <ArrowRight className="w-4 h-4" /></span>
                                </Link>
                                <Link href="#ecommerce" className="flex items-center justify-between p-6 bg-white rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all group">
                                    <span className="font-medium text-slate-700">Selling products online?</span>
                                    <span className="flex items-center gap-2 font-bold text-navy group-hover:text-emerald-600">E-Commerce <ArrowRight className="w-4 h-4" /></span>
                                </Link>
                                <Link href="#mobile" className="flex items-center justify-between p-6 bg-white rounded-xl border border-slate-200 hover:border-purple-500 hover:shadow-md transition-all group">
                                    <span className="font-medium text-slate-700">Launching or extending a digital product?</span>
                                    <span className="flex items-center gap-2 font-bold text-navy group-hover:text-purple-600">Mobile App <ArrowRight className="w-4 h-4" /></span>
                                </Link>
                            </div>
                            <div className="mt-8 text-center text-slate-500 text-sm">
                                We’ll help you choose the right approach — and tell you honestly if we’re not the best fit.
                            </div>
                            <div className="mt-8 text-center">
                                <Link href="/start" className="inline-flex items-center justify-center font-bold text-primary underline decoration-2 underline-offset-4 hover:text-amber-600 transition-colors">
                                    Book a Free Consultation
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== WHY CHOOSE ADAZE ===== */}
                <section className="py-24 bg-navy text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="lg:w-1/2">
                                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Why Businesses Choose Adaze Web Studio</h2>
                                <p className="text-slate-300 text-lg leading-relaxed">
                                    We partner with ambitious organizations to build digital assets that stand the test of time.
                                </p>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="grid gap-6">
                                    {[
                                        "Proven experience across multiple industries",
                                        "Focus on performance, not vanity metrics",
                                        "Clear communication and structured delivery",
                                        "Secure, scalable technical foundations",
                                        "Solutions built for long-term use, not quick wins"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                            <span className="font-medium text-slate-100">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== FINAL CTA ===== */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl text-center">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
                            Let’s Build Something That Actually Works
                        </h2>
                        <p className="text-xl text-slate-600 mb-10">
                            If you’re looking for a digital partner that prioritizes results, clarity, and sustainability, we’re ready to help.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/start" className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-amber-400 text-navy font-bold text-lg rounded-full transition-all hover:scale-105 shadow-xl shadow-primary/25">
                                Get a Free Website Growth Audit
                            </Link>
                            <Link href="/portfolio" className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-slate-200 hover:border-navy text-navy font-bold text-lg rounded-full transition-all">
                                View Case Studies <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

import Image from 'next/image'
import Link from 'next/link'
import {
    ArrowRight,
    CheckCircle2,
    Target,
    ShieldCheck,
    Code2,
    Rocket,
    Users,
    Globe,
    XCircle,
    Cpu,
    Layers,
    Handshake,
    Lightbulb,
    HardHat
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

// Force static generation for instant loading
export const dynamic = 'force-static'

export const metadata: Metadata = {
    title: 'About Adaze Web Studio – Engineering Digital Authority in Ghana',
    description: 'We are a strategy-first digital consultancy in Ho, Ghana. Founded by Richard Adaze, "The Realtor Who Codes", we build high-performance websites that bridge the gap between technical excellence and business growth.',
    keywords: ['Adaze Web Studio', 'Richard Adaze', 'Web Design Agency Ghana', 'Software Consultancy Ho', 'Next.js Developers Ghana'],
    openGraph: {
        title: 'About Adaze Web Studio | Engineering Digital Authority',
        description: 'Meet the team building the digital backbone of Ghanaian business.',
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

                {/* ===== HERO SECTION (Authority & Location) ===== */}
                <section className="pt-24 pb-20 md:pt-36 md:pb-24 px-6 relative overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

                    <div className="container mx-auto max-w-5xl relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-navy text-xs font-bold uppercase tracking-wider mb-8 border border-slate-200">
                            <Globe className="w-3 h-3 text-primary" />
                            Based in Ho, Building Globally
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-8 text-navy text-balance">
                            Engineering Digital <span className="text-primary italic">Authority</span> from the Heart of Ghana.
                        </h1>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                            We are not just a design agency. We are a digital consultancy dedicated to building high-performance assets that own their market.
                        </p>
                    </div>
                </section>

                {/* ===== THE ORIGIN STORY (The Human Element) ===== */}
                <section className="py-20 bg-slate-50 border-y border-slate-200">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            {/* Founder Image Placeholder - USER MUST REPLACE */}
                            <div className="lg:w-1/2 relative">
                                <div className="absolute top-0 -left-4 w-full h-full border-2 border-primary rounded-[2rem] translate-x-4 translate-y-4 hidden md:block"></div>
                                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-slate-200 aspect-square group">
                                    <Image
                                        src="/richard-profile.png"
                                        alt="Richard Adaze - Founder of Adaze Web Studio"
                                        fill
                                        className="object-cover object-center"
                                        priority
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-navy/90 backdrop-blur-sm p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                                        <p className="font-display font-bold text-xl">Richard Adaze</p>
                                        <p className="text-primary text-sm font-medium">Founder & Lead Architect</p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-1/2">
                                <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-6">
                                    "I was tired of seeing businesses get stuck."
                                </h2>
                                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                    <p>
                                        Before I was a software engineer, I was in real estate. I saw firsthand how businesses, developers, agents, and entrepreneurs, were being held back by "pretty" websites that did absolutely nothing for their bottom line.
                                    </p>
                                    <p>
                                        Agencies were selling them templates. I wanted to sell them <strong>Infrastructure.</strong>
                                    </p>
                                    <p>
                                        I founded <span className="text-navy font-bold">Adaze Web Studio</span> in Ho with a simple mission: <span className="italic text-slate-800 font-medium">to empower small businesses in the Volta Region and beyond by building accessible, high-performance websites that drive tangible growth.</span> we bridge the gap between "Corporate Reliability" and "Digital Innovation."
                                    </p>
                                    <p>
                                        When you work with us, you don't talk to a salesman. You talk to an architect who understands both Code and Capital.
                                    </p>
                                </div>
                                <div className="mt-8 flex gap-4">
                                    <div className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-navy shadow-sm flex items-center gap-2">
                                        <Code2 className="w-4 h-4 text-primary" /> Full-Stack Engineering
                                    </div>
                                    <div className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-navy shadow-sm flex items-center gap-2">
                                        <Handshake className="w-4 h-4 text-primary" /> Business Strategy
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== THE ADAZE WAY (Reframed Battle Cards) ===== */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Our Philosophy</span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-navy">
                                Why Visionaries Choose Us
                            </h2>
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                                We refuse to play the "Agency Game" of hidden fees and slow delivery.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-lg">
                            {/* The Confusion (Old Way) */}
                            <div className="space-y-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-xl font-bold text-slate-400 uppercase tracking-widest text-center mb-8">The Typical Agency</h3>
                                <div className="flex items-start gap-4">
                                    <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-slate-800 text-lg mb-1">Renters, Not Owners</p>
                                        <p className="text-slate-500">They lock you into subscriptions (Wix/Squarespace) so you never truly own your platform.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-slate-800 text-lg mb-1">Guesswork Design</p>
                                        <p className="text-slate-500">"It looks nice" is not a strategy. Lack of data-driven decisions.</p>
                                    </div>
                                </div>
                            </div>

                            {/* The Adaze Way */}
                            <div className="space-y-8 relative">
                                <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 -ml-6 hidden md:block"></div>
                                <h3 className="text-xl font-bold text-primary uppercase tracking-widest text-center mb-8">The Adaze Standard</h3>
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-navy text-lg mb-1">Code Ownership</p>
                                        <p className="text-slate-600">We build custom. You own the code. You own the data. Zero lock-in.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-navy text-lg mb-1">Strategic Architecture</p>
                                        <p className="text-slate-600">Every pixel is engineered to build authority and convert traffic.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== OUR CRAFT / TECH STACK (Proof of Competence) ===== */}
                <section className="py-24 bg-navy text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-slate-800 opacity-20"></div>
                    <div className="container mx-auto px-6 max-w-6xl relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/2">
                                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                                    We Speak the Language of <span className="text-primary">Performance.</span>
                                </h2>
                                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                                    We don't use drag-and-drop builders. We write clean, semantic code that Google loves and competitors envy. Our "Modern Stack" ensures your site is fast, secure, and scalable.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                                        <Cpu className="w-6 h-6 text-primary" />
                                        <span className="font-bold">Next.js Enterprise</span>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                                        <Layers className="w-6 h-6 text-primary" />
                                        <span className="font-bold">Sanity CMS</span>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                                        <ShieldCheck className="w-6 h-6 text-primary" />
                                        <span className="font-bold">TypeScript Safety</span>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                                        <Rocket className="w-6 h-6 text-primary" />
                                        <span className="font-bold">Vercel Scaling</span>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 relative">
                                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                                <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl">
                                    {/* Abstract Code Visualization */}
                                    <div className="space-y-3 font-mono text-sm">
                                        <div className="flex gap-2 text-slate-500">
                                            <span>01</span>
                                            <span className="text-purple-400">import</span>
                                            <span className="text-white">Success</span>
                                            <span className="text-purple-400">from</span>
                                            <span className="text-green-400">'@adaze/strategy'</span>
                                        </div>
                                        <div className="flex gap-2 text-slate-500">
                                            <span>02</span>
                                            <span className="text-blue-400">const</span>
                                            <span className="text-yellow-400">result</span>
                                            <span className="text-white">=</span>
                                            <span className="text-blue-400">await</span>
                                            <span className="text-yellow-400">buildAuthority</span>
                                            <span className="text-white">()</span>
                                        </div>
                                        <div className="flex gap-2 text-slate-500">
                                            <span>03</span>
                                            <span className="text-purple-400">if</span>
                                            <span className="text-white">(</span>
                                            <span className="text-white">readyToScale</span>
                                            <span className="text-white">)</span>
                                            <span className="text-white">{`{`}</span>
                                        </div>
                                        <div className="flex gap-2 text-slate-500 pl-4">
                                            <span>04</span>
                                            <span className="text-yellow-400">launchGlobal</span>
                                            <span className="text-white">()</span>
                                        </div>
                                        <div className="flex gap-2 text-slate-500">
                                            <span>05</span>
                                            <span className="text-white">{`}`}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== TRUSTED BY (Social Proof) ===== */}
                <section className="py-20 bg-slate-50 border-t border-slate-200">
                    <div className="container mx-auto px-6 max-w-6xl text-center">
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-8">Trusted by Established Brands</p>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Simple text representations or logos would go here */}
                            <span className="text-2xl font-display font-bold text-navy flex items-center gap-2">
                                <Users className="w-6 h-6" /> VRARED
                            </span>
                            <span className="text-2xl font-display font-bold text-navy flex items-center gap-2">
                                <Building2 className="w-6 h-6" /> Adonai Estate Limited
                            </span>
                            <span className="text-2xl font-display font-bold text-navy flex items-center gap-2">
                                <HardHat className="w-6 h-6" /> Adonai Engineering
                            </span>
                        </div>
                    </div>
                </section>

                {/* ===== RELATIONAL CTA ===== */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                        <div className="mb-6 inline-flex p-3 bg-red-50 rounded-full text-red-600 mb-6">
                            <Lightbulb className="w-8 h-8" />
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
                            Let's Build Something <span className="text-primary italic">Lasting.</span>
                        </h2>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                            We are selective about who we work with because we invest heavily in every project. If you are ready for a serious digital upgrade, let's talk strategy.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-navy hover:bg-slate-800 text-white font-bold rounded-full transition-all hover:scale-105 shadow-xl shadow-navy/20 group">
                                Meet with a Strategist
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/portfolio" className="inline-flex items-center justify-center px-10 py-5 bg-white border-2 border-slate-200 hover:border-navy text-navy font-bold rounded-full transition-all">
                                View Our Work
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ===== WHAT IS ADAZE (Styled AEO Block) ===== */}
                <section className="py-20 bg-slate-50 border-t border-slate-200">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16"></div>

                            <h3 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                                <span className="w-8 h-1 bg-primary rounded-full"></span>
                                What is Adaze Web Studio?
                            </h3>

                            <div className="space-y-6 text-slate-600 leading-relaxed">
                                <p className="text-lg">
                                    <strong className="text-navy">Adaze Web Studio</strong> is a premier digital consultancy and software development agency based in <span className="text-navy font-medium">Ho, Volta Region, Ghana</span>. Founded by <strong className="text-navy">Richard Adaze</strong>, the studio specializes in building high-performance websites, creating custom web applications using Next.js, and providing corporate digital identity services.
                                </p>
                                <p>
                                    We differentiate ourselves through a <strong className="text-primary">"code-ownership" model</strong>, ensuring clients fully own their digital assets without vendor lock-in.
                                </p>

                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Core Expertise</p>
                                    <p className="text-slate-700">
                                        Our portfolio includes Civil Engineering corporate websites like <span className="font-bold text-navy">Adonai Engineering</span>, industry associations like <span className="font-bold text-navy">VRARED</span>, major real estate players like <span className="font-bold text-navy">Adonai Estate Ltd</span>, as well as Personal Brand portfolios and SME growth platforms.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

function Building2(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
            <path d="M9 22v-4h6v4" />
            <path d="M8 6h.01" />
            <path d="M16 6h.01" />
            <path d="M12 6h.01" />
            <path d="M12 10h.01" />
            <path d="M12 14h.01" />
            <path d="M16 10h.01" />
            <path d="M16 14h.01" />
            <path d="M8 10h.01" />
            <path d="M8 14h.01" />
        </svg>
    )
}

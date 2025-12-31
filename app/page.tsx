import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Code2, Rocket, Globe, Smartphone, CheckCircle2, ChevronRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen flex flex-col">

                {/* Hero Section */}
                <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative overflow-hidden">
                    <div className="container mx-auto max-w-6xl relative z-10">
                        <div className="md:w-3/4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6 animate-fade-in">
                                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                                Accepting New Clients
                            </div>
                            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-8 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent animate-slide-up">
                                Powering Your <br />
                                <span className="text-white">Digital Growth.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
                                We build ultra-modern websites and innovative applications that transform businesses. Based in Ho, serving the world.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                                <Link href="/start" className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-blue-600 text-white font-semibold rounded-full transition-all hover:scale-105 group">
                                    Get Started
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link href="#portfolio" className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold rounded-full transition-all backdrop-blur-sm">
                                    View Our Work
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who We Are & Promise (Replaces Old Services) */}
                <section className="py-24 bg-slate-900/50 relative">
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col md:flex-row gap-16">
                            <div className="md:w-1/2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-6">
                                    Who We Are
                                </div>
                                <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                                    More Than Just <br /> Code.
                                </h2>
                                <p className="text-lg text-slate-400 leading-relaxed mb-6">
                                    Adaze Web Studio is a specialized software consultancy in Ho. We believe in building digital products that don't just look good, but actually work to grow your revenue and efficiency.
                                </p>
                                <Link href="/about" className="text-primary hover:text-blue-400 font-medium inline-flex items-center">
                                    Read Our Full Story <ChevronRight className="w-4 h-4 ml-1" />
                                </Link>
                            </div>
                            <div className="md:w-1/2">
                                <div className="p-8 rounded-3xl bg-slate-950 border border-white/10">
                                    <h3 className="text-2xl font-bold mb-4 font-display text-white">Our Promise</h3>
                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                                <Rocket className="w-5 h-5 text-blue-400" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">Impact First</h4>
                                                <p className="text-sm text-slate-400">We prioritize features that drive real business results, not just vanity metrics.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                                                <Code2 className="w-5 h-5 text-purple-400" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">Global Quality</h4>
                                                <p className="text-sm text-slate-400">We code to international standards (Clean Code, CI/CD, Security) right here from Ho.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Portfolio Section */}

                {/* Our Products Section */}
                <section className="py-24 relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                                In-House Innovation
                            </div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
                            <p className="text-slate-400 max-w-2xl">
                                Solutions we've built for the world.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-emerald-950/50 to-slate-900 border border-emerald-500/20 rounded-3xl overflow-hidden relative group">
                            <div className="grid md:grid-cols-2 gap-12 items-center p-8 md:p-12">
                                <div className="order-2 md:order-1">
                                    <h3 className="text-3xl font-bold font-display text-white mb-4">YourFlow</h3>
                                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                        Take control of your financial future. YourFlow is a comprehensive personal finance app that combines expense tracking, budgeting, and financial education to help you hit your goals.
                                    </p>
                                    <div className="flex flex-wrap gap-3 mb-8">
                                        <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">Mobile App</span>
                                        <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">FinTech</span>
                                        <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">Education</span>
                                    </div>
                                    <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-all">
                                        Learn More
                                    </button>
                                </div>
                                <div className="order-1 md:order-2 relative aspect-[16/9] md:aspect-square md:max-h-[400px] bg-white rounded-2xl overflow-hidden border border-white/5 flex items-center justify-center p-8">
                                    <Image src="/yourflow_logo.png" alt="YourFlow Logo" fill className="object-contain p-8" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Selected Work (Client Projects) */}
                <section id="portfolio" className="py-24 bg-slate-950">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                            <div className="max-w-xl">
                                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Selected Work</h2>
                                <p className="text-slate-400">
                                    Digital solutions crafted for our partners.
                                </p>
                            </div>
                            <Link href="/portfolio" className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors font-medium">
                                View All Projects <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Project 1 - Adaze Properties Hub */}
                            <Link href="https://adazepropertieshub.com" target="_blank" className="group block relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 hover:border-primary/50 transition-all hover:scale-[1.02]">
                                <div className="aspect-[4/3] bg-white relative flex items-center justify-center p-8">
                                    <Image src="/adaze_logo.jpg" alt="Adaze Properties Hub" fill className="object-contain p-6" />
                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-20 transition-opacity" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold font-display group-hover:text-primary transition-colors mb-2">Adaze Properties Hub</h3>
                                    <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                                        A full-service real estate hub offering brokerage, land surveying, architectural design, construction, and investment advisory for litigation-free property acquisition.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wide text-slate-300">Brokerage</span>
                                        <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wide text-slate-300">Surveying & Mapping</span>
                                        <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wide text-slate-300">Development</span>
                                        <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wide text-slate-300">Investment</span>
                                    </div>
                                </div>
                            </Link>

                            {/* Project 2 - VRARED */}
                            <Link href="https://vrared.org" target="_blank" className="group block relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 hover:border-accent/50 transition-all hover:scale-[1.02]">
                                <div className="aspect-[4/3] bg-white relative flex items-center justify-center p-8">
                                    <Image src="/vrared_logo.png" alt="VRARED Logo" fill className="object-contain p-6" />
                                    <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-10 transition-opacity" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold font-display group-hover:text-accent transition-colors mb-2">VRARED</h3>
                                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                                        The official regulatory body unifying real estate developers, brokers, and agents in the Volta Region. We champion ethical standards and verify professionals.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wide text-slate-300">Corporate</span>
                                        <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wide text-slate-300">Membership</span>
                                        <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wide text-slate-300">Regulatory</span>
                                    </div>
                                </div>
                            </Link>

                            {/* Project 3 - Rhema Estate Premier */}
                            <div className="group block relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 hover:border-violet-500/50 transition-all hover:scale-[1.02]">
                                <div className="aspect-[4/3] bg-white relative flex items-center justify-center p-8">
                                    <Image src="/rhema_logo.jpg" alt="Rhema Premier Estates Logo" fill className="object-contain p-6" />
                                    <div className="absolute inset-0 bg-violet-500/10 opacity-0 group-hover:opacity-10 transition-opacity" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold font-display group-hover:text-violet-400 transition-colors mb-2">Rhema Premier Estates</h3>
                                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                                        Premium real estate development showcase.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wide text-slate-300">Real Estate</span>
                                    </div>
                                </div>
                            </div>

                            {/* Project 4 - AYECCU */}
                            <Link href="https://ayecghana.org" target="_blank" className="group block relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 hover:border-emerald-500/50 transition-all hover:scale-[1.02]">
                                <div className="aspect-[4/3] bg-white relative flex items-center justify-center p-8">
                                    <Image src="/ayeccu_logo.jpg" alt="AYECCU Logo" fill className="object-contain p-6" />
                                    <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-10 transition-opacity" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold font-display group-hover:text-emerald-400 transition-colors mb-2">AYECCU</h3>
                                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                                        Financial platform for entrepreneurs.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wide text-slate-300">Finance</span>
                                        <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wide text-slate-300">Co-operative</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-24 relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-8 md:p-16 border border-white/10 relative">
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

                            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                                <div>
                                    <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">World-Class Quality,<br />Right Here in Ho.</h2>
                                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                        You don't need to look to Accra or abroad for premium software development. Adaze Web Studio brings global standards to the Volta Region.
                                    </p>

                                    <div className="space-y-4">
                                        {[
                                            "Ultra-modern, responsive designs",
                                            "SEO-optimized for maximum visibility",
                                            "Secure and scalable architecture",
                                            "Ongoing support and maintenance"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                                <span className="text-slate-300">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="aspect-square rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-700/50 border border-white/10 p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-grid-slate-700/[0.2] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,transparent,black)]" />
                                        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                            <Rocket className="w-12 h-12 text-primary" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2 relative z-10">Launch Fast</h3>
                                        <p className="text-slate-400 relative z-10">We deliver high-quality MVPs and websites in record time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section id="contact" className="py-24">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 max-w-4xl mx-auto">Ready to power up your growth?</h2>
                        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                            Let's build something amazing together. Book a free consultation today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="mailto:enquiries@adazewebstudio.com" className="px-8 py-4 bg-primary hover:bg-blue-600 text-white font-semibold rounded-full transition-all hover:scale-105">
                                Email Us
                            </Link>
                            <Link href="tel:+233506562811" className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold rounded-full transition-all backdrop-blur-sm">
                                Call +233 50 656 2811
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

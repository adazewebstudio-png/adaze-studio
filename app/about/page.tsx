import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Users, Target, Zap, MapPin } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-32 pb-20">
                {/* Hero Section */}
                <section className="relative px-6 mb-24">
                    <div className="container mx-auto max-w-5xl text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-8">
                            About Adaze Web Studio
                        </div>
                        <h1 className="font-display text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                            Bridging the Gap Between <br /> Local Business and Global Tech.
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            We are a premier software development agency based in Ho, Ghana. We believe that small businesses deserve enterprise-grade technology to compete in the modern digital economy.
                        </p>
                    </div>
                </section>

                {/* Mission & Vision Grid */}
                <section className="px-6 mb-24">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />
                                <Target className="w-10 h-10 text-primary mb-6" />
                                <h2 className="text-2xl font-bold mb-4 font-display">Our Mission</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    To empower small businesses in the Volta Region and beyond by building accessible, high-performance websites and applications that drive tangible growth and operational efficiency.
                                </p>
                            </div>
                            <div className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-accent/50 transition-colors relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all" />
                                <Zap className="w-10 h-10 text-accent mb-6" />
                                <h2 className="text-2xl font-bold mb-4 font-display">Our Vision</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    To become the leading digital transformation partner in Ghana, recognized globally for our commitment to "Powering Growth" through innovative code and exceptional design.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="px-6 mb-24 relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid md:grid-cols-3 gap-12 text-center">
                            {[
                                { title: "Excellence in Code", desc: "We don't just build; we engineer. Every line of code is optimized for speed, security, and scalability." },
                                { title: "Client-Centric Growth", desc: "Your success is our metric. We measure our achievements by the growth and ROI we generate for you." },
                                { title: "Local Roots, Global Reach", desc: "Proudly based in Ho, we bring Silicon Valley standards to the Volta Region's business ecosystem." }
                            ].map((val, i) => (
                                <div key={i} className="bg-slate-950 z-10 p-6">
                                    <h3 className="text-xl font-bold mb-3 font-display">{val.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{val.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>



                {/* Contact Section */}
                <section id="contact" className="py-24 bg-slate-900/50">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Let's Build the Future.</h2>
                        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
                            Ready to start your project? Reach out to us directly. We are always open to discussing new ideas and partnerships.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                                <a href="mailto:enquiries@adazewebstudio.com" className="text-primary hover:text-blue-400 text-lg font-medium block break-words">
                                    enquiries@<br />adazewebstudio.com
                                </a>
                                <p className="text-slate-500 text-sm mt-3">We reply within 24 hours.</p>
                            </div>
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                                <a href="tel:+233506562811" className="text-primary hover:text-blue-400 text-lg font-medium block">
                                    +233 50 656 2811
                                </a>
                                <p className="text-slate-500 text-sm mt-3">Mon - Fri, 9am - 5pm UTC</p>
                            </div>
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-2">Virtual Meeting</h3>
                                <Link href="#" className="text-primary hover:text-blue-400 text-lg font-medium block">
                                    Schedule Google Meet
                                </Link>
                                <p className="text-slate-500 text-sm mt-3">Book a free 30-min discovery call.</p>
                            </div>
                        </div>


                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

import Link from 'next/link'
import { ArrowRight, Globe, Smartphone, Shield, Code2, Layers } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { serviceCategories } from '@/lib/packages'
import { Metadata } from 'next'

// Force static generation for instant loading
export const dynamic = 'force-static'

export const metadata: Metadata = {
    title: 'Web Design & Development Services in Ho, Ghana',
    description: 'Professional web design, mobile app development, e-commerce solutions, and SEO services in Ho, Volta Region. Get a modern website that grows your business. Free consultation available!',
    keywords: ['web design services Ho', 'mobile app development Ghana', 'e-commerce website Ghana', 'SEO services Volta Region', 'website development Ho'],
    openGraph: {
        title: 'Our Services | Adaze Web Studio',
        description: 'Web design, mobile apps, e-commerce, and SEO services in Ghana',
        url: 'https://adazewebstudio.com/services',
        type: 'website',
    },
    alternates: {
        canonical: 'https://adazewebstudio.com/services',
    },
}

const iconMap: { [key: string]: React.ReactNode } = {
    Globe: <Globe className="w-12 h-12" />,
    Code2: <Code2 className="w-12 h-12" />,
    Smartphone: <Smartphone className="w-12 h-12" />,
    Layers: <Layers className="w-12 h-12" />,
}

const colorMap: { [key: string]: { bg: string; border: string; text: string; hoverBorder: string } } = {
    blue: { bg: "bg-amber-50 text-amber-600", border: "border-amber-100", hoverBorder: "group-hover:border-amber-400", text: "text-amber-600" },
    purple: { bg: "bg-purple-50 text-purple-600", border: "border-purple-100", hoverBorder: "group-hover:border-purple-400", text: "text-purple-600" },
    emerald: { bg: "bg-emerald-50 text-emerald-600", border: "border-emerald-100", hoverBorder: "group-hover:border-emerald-400", text: "text-emerald-600" },
    amber: { bg: "bg-amber-50 text-amber-600", border: "border-amber-100", hoverBorder: "group-hover:border-amber-400", text: "text-amber-600" },
}

export default function Services() {
    return (
        <>
            <Navbar />
            <main id="main-content" className="min-h-screen pt-32 pb-20 bg-slate-50">

                {/* Hero */}
                <section className="px-6 mb-24 text-center">
                    <div className="container mx-auto max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
                            What We Build
                        </div>
                        <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-navy">
                            Solutions That<br /> <span className="text-primary">Power Your Growth.</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            From simple websites to complex applications, we craft digital experiences that transform how you do business.
                        </p>
                    </div>
                </section>

                {/* What We Do Grid */}
                <section className="px-6 mb-24">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl font-bold text-navy text-center mb-12 font-display">Our Expertise</h2>
                        <div className="grid md:grid-cols-4 gap-6">
                            <div className="p-8 rounded-[2rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-amber-400 transition-all text-center group">
                                <Globe className="w-8 h-8 text-amber-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-lg font-bold text-navy mb-2 font-display">Web Design</h3>
                                <p className="text-slate-600 text-sm">Beautiful, responsive websites that look great on any device.</p>
                            </div>
                            <div className="p-8 rounded-[2rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-purple-400 transition-all text-center group">
                                <Code2 className="w-8 h-8 text-purple-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-lg font-bold text-navy mb-2 font-display">Web Apps</h3>
                                <p className="text-slate-600 text-sm">Custom web applications that automate and scale your operations.</p>
                            </div>
                            <div className="p-8 rounded-[2rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-emerald-400 transition-all text-center group">
                                <Smartphone className="w-8 h-8 text-emerald-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-lg font-bold text-navy mb-2 font-display">Mobile Apps</h3>
                                <p className="text-slate-600 text-sm">iOS and Android apps your customers will love using.</p>
                            </div>
                            <div className="p-8 rounded-[2rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-amber-400 transition-all text-center group">
                                <Shield className="w-8 h-8 text-amber-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-lg font-bold text-navy mb-2 font-display">Consulting</h3>
                                <p className="text-slate-600 text-sm">Strategic guidance to help you choose the right technology.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Service Categories */}
                <section className="px-6 relative">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold text-navy text-center mb-4 font-display">Choose Your Package</h2>
                        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                            Each package is tailored to specific needs. Click to explore what's included and get a custom quote.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            {serviceCategories.map((category, i) => {
                                const colors = colorMap[category.color] || colorMap.blue
                                return (
                                    <Link
                                        key={category.id}
                                        href={`/services/${category.id}`}
                                        className={`group relative p-8 rounded-[2.5rem] border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl bg-white ${colors.border} ${colors.hoverBorder}`}
                                    >
                                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${colors.bg}`}>
                                            {iconMap[category.icon]}
                                        </div>

                                        <div className="mb-4">
                                            <p className={`text-xs uppercase tracking-wider font-bold mb-2 ${colors.text}`}>
                                                {category.tagline}
                                            </p>
                                            <h3 className="text-2xl font-bold text-navy font-display group-hover:text-primary transition-colors">
                                                {category.name}
                                            </h3>
                                        </div>

                                        <p className="text-slate-600 mb-8 leading-relaxed">
                                            {category.description}
                                        </p>

                                        {/* Sub-packages preview */}
                                        <div className="mb-8">
                                            <p className="text-xs text-slate-400 uppercase tracking-wider mb-3 font-semibold">Includes options for:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {category.subPackages.slice(0, 3).map((sub, j) => (
                                                    <span key={j} className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-600">
                                                        {sub.name}
                                                    </span>
                                                ))}
                                                {category.subPackages.length > 3 && (
                                                    <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-500 pl-2">
                                                        +{category.subPackages.length - 3} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className={`inline-flex items-center gap-2 font-bold ${colors.text} group-hover:gap-3 transition-all`}>
                                            Explore Package <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="px-6 mt-24">
                    <div className="container mx-auto max-w-4xl text-center">
                        <div className="p-12 rounded-[2.5rem] bg-navy relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold text-white mb-4 font-display">Not Sure Which Package?</h2>
                                <p className="text-slate-300 mb-8 max-w-xl mx-auto text-lg">
                                    No problem. Tell us about your project and we'll recommend the perfect solution — no strings attached.
                                </p>
                                <Link href="/start" className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-amber-400 text-navy font-bold rounded-full transition-all hover:scale-105 shadow-xl shadow-primary/25">
                                    Start a Conversation <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

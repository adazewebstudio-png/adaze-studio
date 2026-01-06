"use client"
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Check, Send, Globe, Code2, Smartphone, Layers } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { serviceCategories } from '@/lib/packages'

const iconMap: { [key: string]: React.ReactNode } = {
    Globe: <Globe className="w-8 h-8" />,
    Code2: <Code2 className="w-8 h-8" />,
    Smartphone: <Smartphone className="w-8 h-8" />,
    Layers: <Layers className="w-8 h-8" />,
}

const colorMap: { [key: string]: { bg: string; text: string; button: string } } = {
    blue: { bg: "bg-amber-500/10", text: "text-amber-400", button: "bg-amber-500 hover:bg-amber-600" },
    purple: { bg: "bg-purple-500/10", text: "text-purple-400", button: "bg-purple-500 hover:bg-purple-600" },
    emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", button: "bg-emerald-500 hover:bg-emerald-600" },
    amber: { bg: "bg-amber-500/10", text: "text-amber-400", button: "bg-amber-500 hover:bg-amber-600" },
}

export default function ServiceDetailPage() {
    const params = useParams()
    const router = useRouter()
    const slug = params.slug as string

    // Find the current category
    const currentCategory = serviceCategories.find(c => c.id === slug)

    // If category not found, show error
    if (!currentCategory) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col">
                <Navbar />
                <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-3xl font-bold text-white mb-4">Service Not Found</h1>
                    <p className="text-slate-400 mb-8">We couldn't find the service you're looking for.</p>
                    <Link href="/services" className="px-6 py-3 bg-primary text-white rounded-xl font-semibold">
                        View All Services
                    </Link>
                </div>
                <Footer />
            </div>
        )
    }

    const colors = colorMap[currentCategory.color] || colorMap.blue

    return (
        <main className="bg-slate-950 min-h-screen flex flex-col">
            <Navbar />

            <div className="pt-32 pb-20 px-6 container mx-auto">
                {/* Back Link */}
                <Link href="/services" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to All Services
                </Link>

                {/* Header */}
                <div className="max-w-4xl mb-16">
                    <div className={`w-20 h-20 rounded-2xl ${colors.bg} flex items-center justify-center mb-6 ${colors.text}`}>
                        {iconMap[currentCategory.icon]}
                    </div>
                    <p className={`text-sm uppercase tracking-wider font-semibold mb-2 ${colors.text}`}>
                        {currentCategory.tagline}
                    </p>
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                        {currentCategory.name}
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed">
                        {currentCategory.longDescription}
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Left Column: Sub-packages */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-white mb-8 font-display">Available Options</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {currentCategory.subPackages.map((sub, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-white/20 transition-colors">
                                    <h3 className="text-lg font-bold text-white mb-2">{sub.name}</h3>
                                    <p className="text-slate-400 text-sm">{sub.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Features */}
                        <div className="mt-12">
                            <h2 className="text-2xl font-bold text-white mb-8 font-display">What's Included</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {currentCategory.features.map((feat, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5">
                                        <Check className={`w-5 h-5 ${colors.text} shrink-0`} />
                                        <span className="text-slate-300">{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Info Cards */}
                        <div className="grid grid-cols-2 gap-4 mt-12">
                            <div className="p-6 rounded-xl bg-white/5 border border-white/5">
                                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Ideal For</p>
                                <p className="text-white font-medium">{currentCategory.idealFor}</p>
                            </div>
                            <div className="p-6 rounded-xl bg-white/5 border border-white/5">
                                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Typical Turnaround</p>
                                <p className="text-white font-medium">{currentCategory.turnaround}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Inquiry Form */}
                    <div className="relative">
                        <div className="sticky top-32 bg-slate-900 rounded-3xl border border-white/10 p-8 shadow-2xl shadow-black/50">
                            <h2 className="text-2xl font-bold text-white mb-2">Get a Quote</h2>
                            <p className="text-slate-400 text-sm mb-6">Tell us about your project and we'll get back to you within 24 hours.</p>

                            <form name="service-quote" method="POST" data-netlify="true" className="space-y-5">
                                {/* Netlify Form Configuration */}
                                <input type="hidden" name="form-name" value="service-quote" />
                                <input type="hidden" name="subject" value={`Quote Request: ${currentCategory.name}`} />
                                <input type="hidden" name="service_category" value={currentCategory.name} />

                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Your Name</label>
                                    <input
                                        type="text" id="name" name="name" required placeholder="John Doe"
                                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-slate-300">Phone / WhatsApp</label>
                                    <input
                                        type="tel" id="phone" name="phone" required placeholder="+233..."
                                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                                    <input
                                        type="email" id="email" name="email" required placeholder="john@company.com"
                                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-slate-300">Tell us about your project</label>
                                    <textarea
                                        id="message" name="message" rows={4} required
                                        placeholder="What do you need? Any specific features or requirements?"
                                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button type="submit" className={`w-full py-4 ${colors.button} text-white font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2`}>
                                    <Send className="w-5 h-5" />
                                    Get My Quote
                                </button>

                                <p className="text-center text-xs text-slate-500">
                                    No commitment. We'll provide a detailed proposal.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}

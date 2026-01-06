"use client"
import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Check, Send, AlertCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { packages } from '@/lib/packages'

export default function ServiceDetailPage() {
    const params = useParams()
    const router = useRouter()
    const slug = params.slug as string

    // Find the current package
    const currentPackage = packages.find(p => p.id === slug)

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        contactPreference: 'email',
        message: '' // For custom/other
    })

    // If package not found, show error or redirect
    if (!currentPackage) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col">
                <Navbar />
                <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-3xl font-bold text-white mb-4">Package Not Found</h1>
                    <p className="text-slate-400 mb-8">We couldn't find the service package you're looking for.</p>
                    <Link href="/services" className="px-6 py-3 bg-primary text-white rounded-xl font-semibold">
                        View All Services
                    </Link>
                </div>
                <Footer />
            </div>
        )
    }

    const handlePackageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSlug = e.target.value
        if (newSlug) {
            router.push(`/services/${newSlug}`)
        }
    }

    const isCustom = slug === 'enterprise-custom'

    return (
        <main className="bg-slate-950 min-h-screen flex flex-col">
            <Navbar />

            <div className="pt-32 pb-20 px-6 container mx-auto">
                {/* Back Link */}
                <Link href="/services" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to All Packages
                </Link>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Column: Package Details */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
                            Selected Package
                        </div>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">
                            {currentPackage.name}
                        </h1>

                        <div className="prose prose-invert max-w-none mb-10">
                            <p className="text-lg text-slate-300 leading-relaxed mb-6">
                                {currentPackage.longDescription}
                            </p>

                            <div className="bg-slate-900/50 rounded-2xl border border-white/10 p-6 mb-8">
                                <h3 className="text-white font-semibold mb-4">What's Included:</h3>
                                <ul className="space-y-3">
                                    {currentPackage.features.map((feat, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-300">
                                            <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Ideal For</p>
                                    <p className="text-white font-medium">{currentPackage.idealFor}</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Turnaround</p>
                                    <p className="text-white font-medium">{currentPackage.turnaround}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Inquiry Form */}
                    <div className="relative">
                        <div className="sticky top-32 bg-slate-900 rounded-3xl border border-white/10 p-8 shadow-2xl shadow-black/50">
                            <h2 className="text-2xl font-bold text-white mb-6">Start Your Project</h2>
                            <form action="https://formsubmit.co/adazewebstudio@gmail.com" method="POST" className="space-y-5">
                                {/* Hidden Config */}
                                <input type="hidden" name="_subject" value={`New Inquiry: ${currentPackage.name}`} />
                                <input type="hidden" name="_template" value="table" />
                                <input type="hidden" name="_captcha" value="false" />

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Selected Package</label>
                                    <select
                                        name="package_selection"
                                        value={slug}
                                        onChange={handlePackageChange}
                                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
                                    >
                                        {packages.map(p => (
                                            <option key={p.id} value={p.id}>{p.name}</option>
                                        ))}
                                    </select>
                                    <p className="text-xs text-slate-500">
                                        Changing this will reload the page with new details.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Your Name</label>
                                    <input
                                        type="text" id="name" name="name" required placeholder="John Doe"
                                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-slate-300">Phone</label>
                                        <input
                                            type="tel" id="phone" name="phone" required placeholder="+233..."
                                            className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                                        <input
                                            type="email" id="email" name="email" required placeholder="john@..."
                                            className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Preferred Contact Method</label>
                                    <div className="grid grid-cols-3 gap-3">
                                        <label className="cursor-pointer">
                                            <input type="radio" name="contact_preference" value="whatsapp" className="peer sr-only" defaultChecked />
                                            <div className="px-3 py-2 rounded-lg bg-slate-950 border border-white/10 text-slate-400 text-sm text-center peer-checked:bg-primary/20 peer-checked:text-primary peer-checked:border-primary/50 transition-all">
                                                WhatsApp
                                            </div>
                                        </label>
                                        <label className="cursor-pointer">
                                            <input type="radio" name="contact_preference" value="phone" className="peer sr-only" />
                                            <div className="px-3 py-2 rounded-lg bg-slate-950 border border-white/10 text-slate-400 text-sm text-center peer-checked:bg-primary/20 peer-checked:text-primary peer-checked:border-primary/50 transition-all">
                                                Phone Call
                                            </div>
                                        </label>
                                        <label className="cursor-pointer">
                                            <input type="radio" name="contact_preference" value="email" className="peer sr-only" />
                                            <div className="px-3 py-2 rounded-lg bg-slate-950 border border-white/10 text-slate-400 text-sm text-center peer-checked:bg-primary/20 peer-checked:text-primary peer-checked:border-primary/50 transition-all">
                                                Email
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                {isCustom && (
                                    <div className="space-y-2 animate-in fade-in slide-in-from-top-4 duration-500">
                                        <label htmlFor="message" className="text-sm font-medium text-slate-300">Tell us about your project</label>
                                        <textarea
                                            id="message" name="message" rows={4} required
                                            placeholder="What are you looking to build?"
                                            className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all resize-none"
                                        ></textarea>
                                    </div>
                                )}

                                {!isCustom && (
                                    <div className="space-y-2">
                                        <label htmlFor="notes" className="text-sm font-medium text-slate-300">Additional Notes (Optional)</label>
                                        <textarea
                                            id="notes" name="notes" rows={2}
                                            placeholder="Any specific requirements?"
                                            className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all resize-none"
                                        ></textarea>
                                    </div>
                                )}

                                <button type="submit" className="w-full py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2">
                                    <Send className="w-5 h-5" />
                                    Submit Inquiry
                                </button>

                                <p className="text-center text-xs text-slate-500">
                                    We'll get back to you within 24 hours.
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

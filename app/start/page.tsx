"use client"
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Send } from 'lucide-react'

export default function StartProject() {
    const [service, setService] = useState('')
    const [packageOption, setPackageOption] = useState('')
    const [isCustom, setIsCustom] = useState(false)

    // Service to Package Mapping
    const servicePackages: { [key: string]: string[] } = {
        "Website Design": [
            "Freelancers & Creatives (GH₵ 600 - 1,000)",
            "Small Business Starter (GH₵ 1,500)",
            "Real Estate Agent (GH₵ 2,000)",
            "Real Estate Company (GH₵ 3,000)",
            "Real Estate Agency Pro (GH₵ 5,000)",
            "Pro E-Commerce (GH₵ 2,500 - 4,000)",
            "Other / Custom Requirement"
        ],
        "Web Application": [
            "Enterprise & Custom (Custom Quote)",
            "Custom SAAS Platform",
            "Internal Business Tool",
            "Other / Custom Requirement"
        ],
        "Mobile App": [
            "iOS & Android App",
            "Other / Custom Requirement"
        ],
        "Other": [
            "Consultation",
            "Maintenance",
            "Custom Request"
        ]
    }

    const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setService(e.target.value)
        setPackageOption('')
        setIsCustom(false)
    }

    const handlePackageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = e.target.value
        setPackageOption(val)
        if (val.includes("Other") || val.includes("Custom") || service === "Other") {
            setIsCustom(true)
        } else {
            setIsCustom(false)
        }
    }

    return (
        <main className="bg-slate-950 min-h-screen flex flex-col">
            <Navbar />

            <div className="flex-grow container mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column: Context */}
                <div className="max-w-xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
                        Let's build something amazing
                    </div>
                    <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
                        Tell us about your project.
                    </h1>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        We're interested in learning about your goals and how we can help you achieve them. Fill out this brief form, and we'll get back to you within 24 hours with some initial thoughts and a quote.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-slate-300">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                <span className="text-lg">1</span>
                            </div>
                            <p>We analyze your requirements.</p>
                        </div>
                        <div className="flex items-center gap-4 text-slate-300">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                <span className="text-lg">2</span>
                            </div>
                            <p>We propose a tailored strategy.</p>
                        </div>
                        <div className="flex items-center gap-4 text-slate-300">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                <span className="text-lg">3</span>
                            </div>
                            <p>We build and launch your vision.</p>
                        </div>
                    </div>
                </div>

                {/* Right Column: The Form */}
                <div className="bg-slate-900/50 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
                    <form action="https://formsubmit.co/adazewebstudio@gmail.com" method="POST" className="space-y-6">
                        {/* Hidden Inputs for FormSubmit Configuration */}
                        <input type="hidden" name="_subject" value="New Project Inquiry - Adaze Web Studio" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_captcha" value="false" />

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-300">Your Name</label>
                                <input type="text" id="name" name="name" required placeholder="John Doe"
                                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                                <input type="email" id="email" name="email" required placeholder="john@company.com"
                                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-slate-300">Phone Number</label>
                                <input type="tel" id="phone" name="phone" required placeholder="+233 ..."
                                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="whatsapp" className="text-sm font-medium text-slate-300">WhatsApp Number</label>
                                <input type="tel" id="whatsapp" name="whatsapp" placeholder="+233 ..."
                                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="service" className="text-sm font-medium text-slate-300">Which Service?</label>
                            <select
                                id="service"
                                name="service"
                                required
                                value={service}
                                onChange={handleServiceChange}
                                className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
                            >
                                <option value="" className="text-slate-500">Select a Service...</option>
                                {Object.keys(servicePackages).map(svc => (
                                    <option key={svc} value={svc}>{svc}</option>
                                ))}
                            </select>
                        </div>

                        {service && (
                            <div className="space-y-2 animate-in fade-in slide-in-from-top-4 duration-500">
                                <label htmlFor="package" className="text-sm font-medium text-slate-300">Which Package?</label>
                                <select
                                    id="package"
                                    name="package"
                                    required
                                    value={packageOption}
                                    onChange={handlePackageChange}
                                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
                                >
                                    <option value="" className="text-slate-500">Select a Package...</option>
                                    {servicePackages[service].map(pkg => (
                                        <option key={pkg} value={pkg}>{pkg}</option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {isCustom && (
                            <div className="space-y-2 animate-in fade-in slide-in-from-top-4 duration-500">
                                <label htmlFor="message" className="text-sm font-medium text-slate-300">Tell us what you need</label>
                                <textarea id="message" name="message" required rows={4} placeholder="Describe your project requirements here..."
                                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"></textarea>
                            </div>
                        )}

                        <button type="submit" className="w-full py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2">
                            <Send className="w-5 h-5" />
                            Send Proposal Request
                        </button>

                        <p className="text-center text-xs text-slate-500 mt-4">
                            We respect your privacy. No spam, ever.
                        </p>
                    </form>
                </div>
            </div>

            <Footer />
        </main>
    )
}

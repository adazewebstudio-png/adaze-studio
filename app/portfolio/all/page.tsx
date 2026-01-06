import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, ExternalLink, Filter } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Force static generation
export const dynamic = 'force-static'

// Project Data
const projects = [
    {
        title: "VRARED",
        category: "Real Estate Association",
        description: "Verified directory & MLS ecosystem.",
        image: "/vrared_logo.png",
        link: "https://vrared.org",
        color: "bg-navy"
    },
    {
        title: "AYECCU",
        category: "Finance / Credit Union",
        description: "Secure digital banking portal.",
        image: "/ayeccu_logo.jpg",
        link: "https://ayecghana.org",
        color: "bg-emerald-900"
    },
    {
        title: "Adaze Properties",
        category: "Real Estate Company",
        description: "Comprehensive property sales hub.",
        image: "/adaze_properties_logo.jpg",
        link: "https://adazepropertieshub.com",
        color: "bg-blue-900"
    },
    // Placeholder for future expansion
    {
        title: "More Coming Soon",
        category: "In Development",
        description: "We are currently building the future.",
        image: null,
        link: "/start",
        color: "bg-slate-100"
    }
]

export default function AllProjects() {
    return (
        <>
            <Navbar />
            <main id="main-content" className="min-h-screen flex flex-col pt-20">

                {/* ===== HEADER ===== */}
                <section className="pt-16 pb-12 px-6 bg-white border-b border-slate-100">
                    <div className="container mx-auto max-w-7xl">
                        <Link href="/portfolio" className="inline-flex items-center text-slate-500 hover:text-navy mb-8 transition-colors group">
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Selected Works
                        </Link>
                        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                            <div>
                                <h1 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
                                    Project Archive
                                </h1>
                                <p className="text-slate-600 text-lg max-w-xl">
                                    A complete collection of the digital platforms, websites, and applications we've engineered.
                                </p>
                            </div>
                            <div className="hidden md:flex gap-2">
                                <button className="px-4 py-2 rounded-full bg-navy text-white text-sm font-medium">All Projects</button>
                                <button className="px-4 py-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 text-sm font-medium transition-colors">Websites</button>
                                <button className="px-4 py-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 text-sm font-medium transition-colors">Web Apps</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== GRID ===== */}
                <section className="py-20 bg-slate-50 min-h-[60vh]">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <div key={index} className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all flex flex-col">
                                    {/* Image Area */}
                                    <div className={`aspect-[4/3] relative flex items-center justify-center p-12 ${project.image ? 'bg-white' : 'bg-slate-100'} border-b border-slate-100 overflow-hidden`}>
                                        {project.image ? (
                                            <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                                                <Image src={project.image} alt={project.title} fill className="object-contain" />
                                            </div>
                                        ) : (
                                            <div className="text-slate-300 font-display font-bold text-6xl opacity-20">?</div>
                                        )}

                                        {/* Overlay Link */}
                                        {project.image && (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <div className="inline-flex items-center px-6 py-3 bg-white text-navy font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                                                </div>
                                            </a>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex-1 flex flex-col">
                                        <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                                            {project.category}
                                        </div>
                                        <h3 className="text-2xl font-bold text-navy mb-3 font-display">{project.title}</h3>
                                        <p className="text-slate-600 mb-6 flex-1">
                                            {project.description}
                                        </p>

                                        {project.image ? (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-navy hover:text-primary transition-colors">
                                                Visit Website <ArrowRight className="ml-2 w-4 h-4" />
                                            </a>
                                        ) : (
                                            <span className="text-sm text-slate-400 font-medium">Coming Soon</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== CTA ===== */}
                <section className="py-20 bg-navy relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-slate-900 opacity-20"></div>
                    <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                        <h2 className="font-display text-3xl font-bold mb-6 text-white">
                            Have a project in mind?
                        </h2>
                        <Link href="/start" className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-amber-400 text-navy font-bold rounded-full transition-all hover:scale-105 shadow-xl">
                            Start Your Project
                        </Link>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

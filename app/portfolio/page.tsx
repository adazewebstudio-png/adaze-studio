'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
    ArrowRight,
    CheckCircle2,
    Building2,
    Landmark,
    Globe,
    Layout,
    ShieldCheck,
    Zap,
    ExternalLink,
    ChevronDown,
    Monitor,
    Database,
    Users,
    Search,
    Check,
    TrendingUp,
    Lock,
    Star,
    User,
    Hammer
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Portfolio Item Type Definitions
type ProjectCategory = 'All' | 'Associations & Cooperatives' | 'Real Estate' | 'Growing Businesses' | 'Individual Professionals' | 'Corporate & Engineering';

interface Project {
    id: string;
    name: string;
    industry: string;
    category: ProjectCategory[];
    description: string;
    outcome: string;
    image: string;
    link: string;
    isFeatured?: boolean;
    problemSummary?: string;
    challenge?: string;
    solution?: string;
    solutionPoints?: string[];
}

const projects: Project[] = [
    {
        id: 'ayeccu',
        name: 'AYECCU',
        industry: 'Financial / Cooperative Organization',
        category: ['Associations & Cooperatives'],
        description: 'Co-operative Credit Union Website & Member Portal',
        problemSummary: 'AYECCU needed a clear public presence and a secure system to manage members and financial operations.',
        challenge: 'As a growing co-operative credit union, AYECCU needed a professional website to clearly communicate its mission, vision, mandate, leadership, and activities, while also managing member financial records efficiently.',
        solution: 'We built a structured website to present all public-facing information clearly, alongside a secure Member Financial Management Portal for internal operations.',
        outcome: 'Improved public credibility, better communication with members, and a centralized system for managing cooperative activities.',
        image: '/ayeccu_logo.jpg',
        link: '/portfolio/ayeccu',
        isFeatured: true
    },
    {
        id: 'vrared',
        name: 'VRARED',
        industry: 'Real Estate Association / Professional Body',
        category: ['Associations & Cooperatives', 'Real Estate'],
        description: 'Association Website, MLS & Learning Platform',
        problemSummary: 'Real estate professionals in the Volta Region needed a unified platform for credibility, listings, and education.',
        challenge: 'VRARED wanted to unite developers, brokers, and agents under one recognized body while providing verified listings and professional development opportunities.',
        solution: 'We built a comprehensive digital ecosystem including:',
        solutionPoints: [
            'An association website to present mandate, leadership, and structure',
            'A Multi Listing Service (MLS) platform for verified property listings',
            'An online learning (LMS) platform for member and non-member training'
        ],
        outcome: 'A centralized digital presence that strengthens professional trust, supports member growth, and positions VRARED as an authority in the region.',
        image: '/vrared_logo.png',
        link: '/portfolio/vrared',
        isFeatured: true
    },
    {
        id: 'adaze-properties',
        name: 'Adaze Properties Hub Ltd',
        industry: 'Real Estate Company',
        category: ['Real Estate'],
        description: 'Real Estate Website & Listing Platform',
        problemSummary: 'The business needed a single platform to clearly present its full range of real estate services and property listings.',
        challenge: 'Adaze Properties Hub Ltd offers brokerage, property management, development, surveying, architectural design, and rentals — but needed a structured way to communicate everything clearly.',
        solution: 'We built a professional website that explains each service clearly and integrated a property listing platform to showcase available properties.',
        outcome: 'Improved service clarity, stronger brand presentation, and a central hub for property discovery.',
        image: '/adaze_properties_logo.jpg',
        link: 'https://adazepropertieshub.com',
        isFeatured: true
    },
    {
        id: 'adonai-estate',
        name: 'Adonai Estate Ltd',
        industry: 'Established Real Estate Company',
        category: ['Real Estate'],
        description: 'Enterprise Real Estate Website & Listings',
        problemSummary: 'A leading real estate company needed a website that matched its scale, reputation, and future growth ambitions.',
        challenge: 'With over 11 years of operation and multiple development sites across the Volta Region, Adonai Estate Ltd needed a website that: clearly presented its brand and authority, explained its services with clarity, showcased development sites and pricing, and attracted clients locally and from the diaspora.',
        solution: 'We designed and built a structured, brand-aligned website with clear messaging, detailed project showcases, and a property listing platform.',
        outcome: 'A professional digital presence that reflects the company’s leadership position and supports its expansion goals.',
        image: '/adonai_estate_logo.jpg',
        link: '/portfolio/adonai-estate',
        isFeatured: true
    },
    {
        id: 'mawuli-pop',
        name: 'Mawuli POP Ceiling',
        industry: 'Construction / POP Design',
        category: ['Growing Businesses'],
        description: 'A portfolio website built to showcase over 16 years of POP design experience, position the craftsman as a trusted expert, and attract new clients.',
        outcome: 'Professional digital presence that builds trust and generates local business leads.',
        image: '/mawuli_pop_logo.png',
        link: '/portfolio/mawuli-pop'
    },
    {
        id: 'richard-adaze',
        name: 'Richard Adaze',
        industry: 'Personal Brand / Professional Website',
        category: ['Individual Professionals'],
        description: 'A personal website built to showcase professional identity, share insights on tech and real estate, and increase visibility.',
        outcome: 'Increased visibility and established authority for the personal brand.',
        image: '/richard_adaze_logo.png',
        link: '/portfolio/richard-adaze'
    },
    {
        id: 'adonai-engineering',
        name: 'Adonai Engineering Ltd',
        industry: 'Construction & Civil Engineering',
        category: ['Corporate & Engineering'],
        description: 'Corporate Website for Engineering & Construction Firm',
        problemSummary: 'A new engineering firm needed a serious, corporate digital identity to compete for major contracts.',
        challenge: 'Adonai Engineering needed to project "Stability" and "Capacity" from Day 1. They did not want a flashy creative site, but a solid, industrial-grade profile that would reassure government regulators and large-scale developers.',
        solution: 'We deployed a high-structure, "Capability-First" architecture that highlights technical discipline, safety standards, and rigorous process over mere aesthetics.',
        outcome: 'Established instant corporate credibility, allowing the firm to bid for commercial infrastructure projects immediately upon launch.',
        image: '/adonai_engineering_logo.jpg',
        link: '/portfolio/adonai-engineering',
        isFeatured: true
    }
];

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const featuredProjects = projects.filter(p => p.isFeatured);
    const secondaryProjects = projects.filter(p => !p.isFeatured);

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category.includes(activeFilter));

    const categories: ProjectCategory[] = ['All', 'Associations & Cooperatives', 'Real Estate', 'Growing Businesses', 'Individual Professionals', 'Corporate & Engineering'];

    return (
        <>
            <Navbar />
            <main id="main-content" className="min-h-screen flex flex-col pt-20 bg-white">

                {/* ===== 1. HERO SECTION ===== */}
                <section className="relative py-20 md:py-32 overflow-hidden bg-slate-50">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-0"></div>
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                            {/* Left: Text */}
                            <div className="lg:w-1/2 text-center lg:text-left">
                                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">
                                    Built and used by organizations across the Volta Region and Ghana
                                </p>
                                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-navy">
                                    Digital Platforms Built for <span className="text-primary italic">Real Organizations</span>, Not Just Online Presence
                                </h1>
                                <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                    From co-operative credit unions to real estate associations and property companies, these projects show how we help organizations communicate clearly, manage operations, and scale through custom digital systems.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center">
                                    <Link href="/start" className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-amber-400 text-navy font-bold text-lg rounded-full transition-all hover:scale-105 shadow-xl shadow-primary/25">
                                        Book a Free Consultation
                                    </Link>
                                    <Link href="#featured" className="text-navy font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                        See How These Projects Were Built ↓
                                    </Link>
                                </div>
                            </div>

                            {/* Right: Single strong product screenshot */}
                            <div className="lg:w-1/2 w-full relative">
                                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-2 md:p-4 hover:scale-[1.02] transition-transform duration-500">
                                    <div className="aspect-[4/3] relative rounded-xl overflow-hidden bg-slate-100">
                                        <Image
                                            src="/hero_image.jpg"
                                            alt="Adaze Web Studio digital platforms"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </div>
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl"></div>
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== 2. PORTFOLIO CONTEXT SECTION ===== */}
                <section className="py-20 bg-white border-y border-slate-100">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">The Types of Organizations We Work With</h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                Our work focuses on organizations that need clarity, structure, and systems — not just a website for show.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-navy hover:text-white transition-all duration-300 group">
                                <Landmark className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold mb-2 font-display">Associations & Cooperatives</h3>
                                <p className="text-slate-600 group-hover:text-slate-300 text-sm leading-relaxed">
                                    Websites and portals that communicate mandate, leadership, and structure while supporting members digitally.
                                </p>
                            </div>

                            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-navy hover:text-white transition-all duration-300 group">
                                <Building2 className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold mb-2 font-display">Real Estate Organizations</h3>
                                <p className="text-slate-600 group-hover:text-slate-300 text-sm leading-relaxed">
                                    Platforms for listings, property discovery, project showcasing, and professional credibility.
                                </p>
                            </div>

                            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-navy hover:text-white transition-all duration-300 group">
                                <Zap className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold mb-2 font-display">Growing Businesses & Brands</h3>
                                <p className="text-slate-600 group-hover:text-slate-300 text-sm leading-relaxed">
                                    Websites designed to position brands clearly and attract the right audience — locally and internationally.
                                </p>
                            </div>

                            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-navy hover:text-white transition-all duration-300 group">
                                <User className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold mb-2 font-display">Individual Professionals</h3>
                                <p className="text-slate-600 group-hover:text-slate-300 text-sm leading-relaxed">
                                    Personal websites that build visibility, authority, and long-term brand value.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== 3. FEATURED CASE STUDIES ===== */}
                <section id="featured" className="py-24 bg-white relative">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="mb-20 text-center">
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">Featured Projects</h2>
                            <p className="text-lg text-slate-600">Each project below was built to solve a specific communication or operational problem — not just to look good.</p>
                        </div>

                        <div className="space-y-32">
                            {featuredProjects.map((p, idx) => (
                                <div key={p.id} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
                                    <div className="lg:w-1/2 w-full relative overflow-hidden rounded-[2.5rem] bg-slate-50 p-12 border border-slate-100 group">
                                        <Image
                                            src={p.image}
                                            alt={`${p.name} mockup`}
                                            width={500}
                                            height={300}
                                            className="w-full h-auto object-contain drop-shadow-2xl rounded-2xl group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="lg:w-1/2">
                                        <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-widest mb-4">
                                            {p.industry}
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-bold text-navy mb-6 font-display">{p.name} — {p.description}</h3>
                                        <p className="text-xl font-bold text-navy mb-8 border-l-4 border-primary pl-4">
                                            {p.problemSummary}
                                        </p>

                                        <div className="space-y-8 mb-10">
                                            <div className="grid gap-6">
                                                <div>
                                                    <h4 className="font-bold text-navy text-lg mb-2 flex items-center gap-2">
                                                        Challenge
                                                    </h4>
                                                    <p className="text-slate-600 leading-relaxed">
                                                        {p.challenge}
                                                    </p>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-navy text-lg mb-2 flex items-center gap-2">
                                                        Solution
                                                    </h4>
                                                    <p className="text-slate-600 leading-relaxed">
                                                        {p.solution}
                                                    </p>
                                                    {p.solutionPoints && (
                                                        <ul className="mt-3 space-y-2">
                                                            {p.solutionPoints.map((point, i) => (
                                                                <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                                                                    {point}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-navy text-lg mb-2 flex items-center gap-2">
                                                        Outcome
                                                    </h4>
                                                    <p className="text-slate-600 leading-relaxed font-semibold">
                                                        {p.outcome}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-4">
                                            <Link href={p.link} className="inline-flex items-center justify-center px-8 py-3 bg-navy text-white font-bold rounded-full hover:bg-slate-800 transition-all">
                                                View Full Case Study
                                            </Link>
                                            <Link href="/start" className="inline-flex items-center justify-center px-8 py-3 bg-white border-2 border-slate-200 text-navy font-bold rounded-full hover:border-navy transition-all">
                                                {p.id === 'vrared' ? 'Create a Similar Platform' : p.id === 'ayeccu' ? 'Build a Similar System' : p.id === 'adaze-properties' ? 'Build a Real Estate Platform' : 'Design a Similar Website'}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== 4. SECONDARY PROJECTS SECTION ===== */}
                <section className="py-24 bg-slate-50 border-y border-slate-200">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="font-display text-4xl font-bold text-navy mb-4">Additional Projects</h2>
                            <p className="text-lg text-slate-600">Other professional and personal brand websites crafted by Adaze Web Studio.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {secondaryProjects.map((project) => (
                                <div key={project.id} className="bg-white rounded-3xl border border-slate-200 p-10 flex flex-col h-full hover:shadow-xl transition-all group">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1 block">{project.industry}</span>
                                            <h3 className="text-2xl font-bold text-navy font-display">{project.name}</h3>
                                        </div>
                                        <div className="w-16 h-16 rounded-xl bg-slate-50 border border-slate-100 p-2 flex items-center justify-center overflow-hidden shrink-0 group-hover:bg-white group-hover:shadow-md transition-all">
                                            <Image
                                                src={project.image}
                                                alt={`${project.name} Logo`}
                                                width={60}
                                                height={60}
                                                className="w-full h-full object-contain transition-transform group-hover:scale-110"
                                            />
                                        </div>
                                    </div>

                                    <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="bg-slate-50 rounded-2xl p-6 mb-8">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Key Outcome</p>
                                        <p className="text-sm font-bold text-navy">{project.outcome}</p>
                                    </div>

                                    <Link href={project.link} className="inline-flex items-center gap-2 font-bold text-navy group-hover:text-primary transition-colors">
                                        View Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== 5. AUTHORITY LAYER ===== */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="bg-navy rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3"></div>

                            <div className="flex flex-col lg:flex-row gap-16 relative z-10">
                                <div className="lg:w-1/2">
                                    <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-8">
                                        What These Projects Have in Common
                                    </h2>
                                    <div className="space-y-6">
                                        {[
                                            "Built for real organizations with real responsibilities",
                                            "Focused on clarity, structure, and credibility",
                                            "Designed to support long-term growth and scaling",
                                            "Custom-built systems, not templates"
                                        ].map((bullet, i) => (
                                            <div key={i} className="flex items-center gap-4">
                                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                                                    <Check className="w-5 h-5" />
                                                </div>
                                                <span className="text-xl font-medium text-slate-100">{bullet}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="mt-12 text-primary font-bold text-lg italic border-l-2 border-primary/50 pl-6">
                                        Most of our projects involve organizations that need structure and systems — not just online presence.
                                    </p>
                                </div>

                                <div className="lg:w-1/2 flex items-center">
                                    <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10">
                                        <div className="flex gap-1 mb-6 text-primary">
                                            {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 fill-current" />)}
                                        </div>
                                        <blockquote className="text-xl md:text-2xl text-slate-200 font-medium italic mb-8 leading-relaxed">
                                            "Adaze delivered a professional platform that truly represents our organization and improved how we manage our digital presence."
                                        </blockquote>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">OZ</div>
                                            <div>
                                                <div className="font-bold text-white">Organization Stakeholder</div>
                                                <div className="text-slate-400 text-sm">Ghanaian Association</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== 6. CONVERSION SECTION ===== */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                        <h2 className="font-display text-4xl md:text-6xl font-bold text-navy mb-8">
                            Need a Website or Platform That Truly Represents Your Organization?
                        </h2>
                        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                            We help businesses, associations, and professionals build digital platforms that communicate clearly, work reliably, and support growth.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link href="/start" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-primary hover:bg-amber-400 text-navy font-bold text-xl rounded-full transition-all hover:scale-105 shadow-2xl shadow-primary/30 group">
                                Get a Free Website / Platform Audit
                                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/start?type=consult" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-white border-2 border-slate-200 text-navy font-bold text-xl rounded-full hover:border-navy transition-all">
                                Book a Consultation
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

"use client"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Code2, Menu, X } from 'lucide-react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 z-50">
                    <div className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
                        <Image src="/logo.png" alt="Adaze Web Studio Logo" fill className="object-cover" />
                    </div>
                    <span className="font-display font-bold text-xl tracking-tight text-white">Adaze Web Studio</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                    <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                    <Link href="/#portfolio" className="hover:text-white transition-colors">Portfolio</Link>
                    <Link href="/about" className="hover:text-white transition-colors">About</Link>
                    <Link href="/affiliate" className="hover:text-white transition-colors">Affiliate</Link>
                </div>

                {/* CTA Button (Desktop) */}
                <div className="hidden md:block">
                    <Link href="/start" className="px-5 py-2.5 bg-white text-black font-semibold rounded-full hover:bg-slate-100 transition-all text-sm">
                        Start a Project
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-slate-300 hover:text-white z-50"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div className="absolute top-20 left-0 w-full bg-slate-950 border-b border-white/10 shadow-2xl md:hidden animate-in slide-in-from-top-2 duration-200">
                        <div className="flex flex-col p-6 space-y-4">
                            <Link
                                href="/services"
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-slate-300 hover:text-white transition-colors py-2 border-b border-white/5"
                            >
                                Services
                            </Link>
                            <Link
                                href="/#portfolio"
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-slate-300 hover:text-white transition-colors py-2 border-b border-white/5"
                            >
                                Portfolio
                            </Link>
                            <Link
                                href="/about"
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-slate-300 hover:text-white transition-colors py-2 border-b border-white/5"
                            >
                                About
                            </Link>
                            <Link
                                href="/affiliate"
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-slate-300 hover:text-white transition-colors py-2 border-b border-white/5"
                            >
                                Affiliate
                            </Link>
                            <Link
                                href="/start"
                                onClick={() => setIsOpen(false)}
                                className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-slate-100 transition-all text-center mt-2"
                            >
                                Start a Project
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

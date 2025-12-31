import Link from 'next/link'
import Image from 'next/image'
import { Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-white/10 pt-20 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
                            <div className="relative w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center group-hover:opacity-80 transition-opacity">
                                <Image src="/logo.png" alt="Adaze Web Studio Logo" fill className="object-cover" />
                            </div>
                            <span className="font-display font-bold text-xl text-white tracking-tight">Adaze Web Studio</span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed text-sm mb-6">
                            Bridging the gap between local business and global technology. We build software that powers your growth.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all">
                                <Twitter className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all">
                                <Instagram className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all">
                                <Linkedin className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="/#portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
                            <li><Link href="/affiliate" className="hover:text-primary transition-colors">Affiliate Program</Link></li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Use</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-slate-400">Ho, Volta Region, Ghana.</span>
                            </li>
                            <li>
                                <a href="mailto:adazewebstudio@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                                    <Mail className="w-5 h-5 text-primary shrink-0" />
                                    <span>adazewebstudio@gmail.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+233506562811" className="flex items-center gap-3 hover:text-white transition-colors">
                                    <Phone className="w-5 h-5 text-primary shrink-0" />
                                    <span>+233 50 656 2811</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} Adaze Web Studio. All rights reserved.
                    </p>
                    <p className="text-slate-600 text-xs">
                        Powering Your Growth.
                    </p>
                </div>
            </div>
        </footer>
    )
}

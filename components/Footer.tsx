import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-navy border-t border-white/10 pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-16 mb-20">
                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <Link href="/" className="inline-flex items-center gap-3 mb-8 group">
                            <div className="relative w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center group-hover:opacity-80 transition-opacity">
                                <Image src="/Adaze Web Studio Logo.jpg" alt="Adaze Web Studio Logo" fill className="object-cover" />
                            </div>
                            <span className="font-display font-bold text-xl text-white tracking-tight">Adaze Web Studio</span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed text-sm mb-8">
                            Adaze Web Studio is a specialized software consultancy in Ho. We believe in building digital products that don't just look good, but actually work to grow your revenue and efficiency.
                        </p>
                        <div className="flex gap-3">
                            <a href="https://facebook.com/adazewebstudio" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#1877F2]/20 hover:text-[#1877F2] transition-all">
                                <Facebook className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-white mb-8 text-sm uppercase tracking-wider">Company</h4>
                        <ul className="space-y-5 text-sm text-slate-400">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
                            <li><Link href="/affiliate" className="hover:text-primary transition-colors">Affiliate Program</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-bold text-white mb-8 text-sm uppercase tracking-wider">Resources</h4>
                        <ul className="space-y-5 text-sm text-slate-400">
                            <li><Link href="/journal" className="hover:text-primary transition-colors">The Studio Journal</Link></li>
                            <li><Link href="/faqs" className="hover:text-primary transition-colors">FAQs</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Use</Link></li>
                            <li><Link href="/accessibility" className="hover:text-primary transition-colors">Accessibility</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-white mb-8 text-sm uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-5 text-sm text-slate-400">
                            <li className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span>Ho, Volta Region, Ghana</span>
                            </li>
                            <li>
                                <a href="mailto:enquiries@adazewebstudio.com" className="flex items-center gap-4 hover:text-white transition-colors">
                                    <Mail className="w-5 h-5 text-primary shrink-0" />
                                    <span>enquiries@adazewebstudio.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+233506562811" className="flex items-center gap-4 hover:text-white transition-colors">
                                    <Phone className="w-5 h-5 text-primary shrink-0" />
                                    <span>+233 50 656 2811</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} Adaze Web Studio. All rights reserved.
                    </p>
                    <p className="text-slate-600 text-xs uppercase tracking-widest font-bold">
                        We Build It. You Own It.
                    </p>
                </div>
            </div>
        </footer>
    )
}

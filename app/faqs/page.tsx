'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Search, ArrowRight, HelpCircle, MessageCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface FAQ {
    question: string
    answer: string
    category: string
}

const faqs: FAQ[] = [
    // Pricing & Packages
    {
        category: 'Pricing & Packages',
        question: 'How much does a website cost in Ghana?',
        answer: 'Website costs vary based on complexity. Basic business websites start from GH₵ 2,000, professional sites range from GH₵ 5,000 - GH₵ 15,000, and e-commerce websites cost GH₵ 8,000 - GH₵ 25,000+. We offer flexible payment plans for all budgets. Contact us for a free custom quote based on your specific needs.'
    },
    {
        category: 'Pricing & Packages',
        question: 'Do you offer payment plans?',
        answer: 'Yes! We understand that a website is an investment. We offer flexible payment plans where you can pay 50% upfront and the remaining 50% upon completion. For larger projects, we can arrange custom payment schedules. We accept Mobile Money, bank transfers, and international payments.'
    },
    {
        category: 'Pricing & Packages',
        question: 'What is included in your website packages?',
        answer: 'All our packages include: custom responsive design, mobile optimization, basic SEO setup, contact forms, social media integration, SSL security certificate, and 30 days of post-launch support. Higher packages include additional features like blog functionality, e-commerce capabilities, and advanced integrations.'
    },
    // Process & Timeline
    {
        category: 'Process & Timeline',
        question: 'How long does it take to build a website?',
        answer: 'Timeline depends on project complexity. A basic business website takes 2-4 weeks, professional websites take 4-6 weeks, and complex e-commerce or web applications take 8-12 weeks. We provide clear timelines during our initial consultation and keep you updated throughout the process.'
    },
    {
        category: 'Process & Timeline',
        question: 'What is your design process?',
        answer: 'Our process includes: 1) Discovery call to understand your needs, 2) Strategy and planning, 3) Design mockups for your approval, 4) Development and building, 5) Testing across devices, 6) Launch and training, 7) Ongoing support. You\'re involved at every step and can request revisions during the design phase.'
    },
    {
        category: 'Process & Timeline',
        question: 'How many revisions do I get?',
        answer: 'We include 2-3 rounds of design revisions in all our packages to ensure you\'re completely satisfied. Additional revisions beyond this are available at an hourly rate. We\'ve found that with good communication upfront, most clients are happy within the included revision rounds.'
    },
    // Technical
    {
        category: 'Technical',
        question: 'Will my website work on mobile phones?',
        answer: 'Absolutely! All our websites are fully responsive and optimized for mobile devices. Over 70% of web traffic in Ghana comes from mobile phones, so we design mobile-first. Your site will look great and work perfectly on phones, tablets, and desktops.'
    },
    {
        category: 'Technical',
        question: 'Do you provide hosting?',
        answer: 'Yes, we offer reliable hosting solutions starting from GH₵ 500/year. We use fast, secure servers with 99.9% uptime guarantee. Hosting includes SSL certificates, daily backups, and technical maintenance. You can also use your own hosting if you prefer.'
    },
    {
        category: 'Technical',
        question: 'Can I update the website myself?',
        answer: 'Yes! We build websites with user-friendly content management systems. After launch, we provide training so you can update text, images, and add new content. For more complex changes, our maintenance packages cover ongoing updates and improvements.'
    },
    {
        category: 'Technical',
        question: 'Will my website be secure?',
        answer: 'Security is a top priority. All our websites include SSL certificates (the padlock in the browser), secure coding practices, regular security updates, and protection against common vulnerabilities. For e-commerce sites, we implement additional payment security measures.'
    },
    // Mobile Apps
    {
        category: 'Mobile Apps',
        question: 'Can you build mobile apps for iOS and Android?',
        answer: 'Yes! We develop mobile apps for both iOS and Android platforms. We use React Native and Flutter for cross-platform development, which means your app works seamlessly on both platforms while reducing development time and cost by up to 40%.'
    },
    {
        category: 'Mobile Apps',
        question: 'How much does a mobile app cost?',
        answer: 'Mobile app costs depend on features and complexity. Simple apps start from GH₵ 15,000, while feature-rich apps with backend systems range from GH₵ 30,000 - GH₵ 100,000+. During our consultation, we\'ll provide a detailed quote based on your app requirements.'
    },
    // Support & Maintenance
    {
        category: 'Support & Maintenance',
        question: 'Do you offer website maintenance?',
        answer: 'Yes! We offer maintenance packages starting from GH₵ 200/month. This includes security updates, regular backups, performance monitoring, content updates, and priority technical support. Keeping your website maintained ensures it stays secure and performs well.'
    },
    {
        category: 'Support & Maintenance',
        question: 'What support do you provide after launch?',
        answer: 'All projects include 30 days of free post-launch support to address any issues or questions. After that, you can choose from our maintenance packages or contact us for one-off support needs. We\'re committed to your long-term success.'
    },
    // SEO & Marketing
    {
        category: 'SEO & Marketing',
        question: 'Do you offer SEO services?',
        answer: 'Yes! All our websites include basic SEO optimization. We also offer dedicated SEO packages that include keyword research, on-page optimization, local SEO for Ghana businesses, content strategy, and monthly performance reports. SEO is crucial for getting found on Google.'
    },
    {
        category: 'SEO & Marketing',
        question: 'Can you help with digital marketing?',
        answer: 'While our focus is web development, we can advise on digital marketing strategies. We partner with trusted marketing professionals for social media management, Google Ads, and content marketing if you need comprehensive marketing support.'
    },
]

const categories = Array.from(new Set(faqs.map(faq => faq.category)))

function FAQItem({ faq, isOpen, onClick }: { faq: FAQ; isOpen: boolean; onClick: () => void }) {
    return (
        <div className="border-b border-slate-200 last:border-0">
            <button
                onClick={onClick}
                className="w-full py-6 flex items-start justify-between gap-4 text-left group"
            >
                <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-primary' : 'text-navy group-hover:text-primary'}`}>
                    {faq.question}
                </span>
                <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 mt-1 transition-transform ${isOpen ? 'rotate-180 text-primary' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                <p className="text-slate-600 leading-relaxed pr-8">
                    {faq.answer}
                </p>
            </div>
        </div>
    )
}

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)
    const [searchQuery, setSearchQuery] = useState('')
    const [activeCategory, setActiveCategory] = useState<string | null>(null)

    const filteredFaqs = faqs.filter(faq => {
        const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = !activeCategory || faq.category === activeCategory
        return matchesSearch && matchesCategory
    })

    return (
        <>
            <Navbar />
            <main id="main-content" className="min-h-screen pt-32 pb-20 bg-slate-50">
                {/* Hero */}
                <section className="px-6 mb-12 text-center">
                    <div className="container mx-auto max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 border border-primary/20">
                            <HelpCircle className="w-3 h-3" />
                            FAQs
                        </div>
                        <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-navy">
                            Frequently Asked <span className="text-primary">Questions</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Find answers to common questions about our services, pricing, and process.
                        </p>
                    </div>
                </section>

                {/* Search */}
                <section className="px-6 mb-8">
                    <div className="container mx-auto max-w-3xl">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search for answers..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-navy placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                        </div>
                    </div>
                </section>

                {/* Categories */}
                <section className="px-6 mb-8">
                    <div className="container mx-auto max-w-3xl">
                        <div className="flex flex-wrap gap-2 justify-center">
                            <button
                                onClick={() => setActiveCategory(null)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${!activeCategory
                                    ? 'bg-navy text-white'
                                    : 'bg-white text-slate-600 border border-slate-200 hover:border-navy'
                                    }`}
                            >
                                All
                            </button>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === category
                                        ? 'bg-navy text-white'
                                        : 'bg-white text-slate-600 border border-slate-200 hover:border-navy'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ List */}
                <section className="px-6">
                    <div className="container mx-auto max-w-3xl">
                        <div className="bg-white rounded-[2rem] border border-slate-200 shadow-lg shadow-slate-200/50 p-8 md:p-10">
                            {filteredFaqs.length > 0 ? (
                                filteredFaqs.map((faq, index) => (
                                    <FAQItem
                                        key={index}
                                        faq={faq}
                                        isOpen={openIndex === index}
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    />
                                ))
                            ) : (
                                <div className="text-center py-12">
                                    <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                                    <p className="text-slate-600">No questions found matching your search.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Still Have Questions CTA */}
                <section className="px-6 mt-16">
                    <div className="container mx-auto max-w-3xl">
                        <div className="bg-navy rounded-[2rem] p-10 md:p-12 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-grid-white/5"></div>
                            <div className="relative z-10">
                                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                                <h2 className="text-3xl font-bold text-white mb-4 font-display">
                                    Still Have Questions?
                                </h2>
                                <p className="text-slate-300 mb-8 max-w-lg mx-auto">
                                    Can't find what you're looking for? We're here to help.
                                    Get in touch and we'll respond within 24 hours.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        href="/start"
                                        className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all group"
                                    >
                                        Contact Us
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <a
                                        href="https://wa.me/233506562811"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all border border-white/20"
                                    >
                                        WhatsApp Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

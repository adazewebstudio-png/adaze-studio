import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JournalFilter from '@/components/JournalFilter'
import { getJournalData } from '@/lib/sanity'
import { Metadata } from 'next'
import { Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const revalidate = 60

export const metadata: Metadata = {
    title: 'The Studio Journal - Web Design Tips & Business Insights',
    description: 'Expert insights on web design, mobile app development, and digital growth strategies for businesses in Ghana.',
}

export default async function Journal() {
    const { allPosts, featuredPosts, categories } = await getJournalData()

    const hasPosts = allPosts && allPosts.length > 0

    return (
        <>
            <Navbar />
            <main id="main-content" className="min-h-screen pt-32 pb-20 bg-slate-50">
                {/* Hero */}
                <section className="px-6 mb-16 text-center">
                    <div className="container mx-auto max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy text-white text-xs font-bold uppercase tracking-wider mb-6 shadow-lg shadow-navy/20">
                            <Sparkles className="w-3 h-3 text-primary" />
                            The Studio Journal
                        </div>
                        <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-navy">
                            Insights That <span className="text-primary">Grow Businesses</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Expert tips on web design, digital marketing, and business growth.
                        </p>
                    </div>
                </section>

                {!hasPosts ? (
                    <section className="px-6 mb-16">
                        <div className="container mx-auto max-w-3xl text-center py-20">
                            <div className="bg-white rounded-[2rem] border border-slate-200 p-12 shadow-lg">
                                <Sparkles className="w-16 h-16 text-primary mx-auto mb-6" />
                                <h2 className="text-2xl font-bold text-navy mb-4 font-display">Coming Soon!</h2>
                                <p className="text-slate-600 mb-8">We're working on exciting content for you.</p>
                                <Link href="/start" className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all group">
                                    Start Your Project
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </section>
                ) : (
                    <JournalFilter
                        allPosts={allPosts}
                        featuredPosts={featuredPosts}
                        categories={categories}
                    />
                )}

                {/* Footer CTA */}
                <section className="px-6 mt-20">
                    <div className="container mx-auto max-w-4xl">
                        <div className="bg-navy rounded-[2rem] p-12 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-grid-white/5"></div>
                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold text-white mb-4 font-display">Ready to Build Your Website?</h2>
                                <Link href="/start" className="inline-flex items-center px-8 py-4 bg-primary text-white font-bold rounded-full transition-all group">
                                    Start Your Project
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

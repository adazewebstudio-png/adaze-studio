import Link from 'next/link'
import { ArrowRight, Calendar, Clock, ChevronRight, Sparkles } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { blogPosts, getFeaturedPosts, getAllCategories } from '@/lib/blog'
import { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
    title: 'The Studio Journal - Web Design Tips & Business Insights',
    description: 'Expert insights on web design, mobile app development, and digital growth strategies for businesses in Ghana. Learn from Adaze Web Studio\'s experience building successful digital products.',
    keywords: ['web design blog', 'tech blog Ghana', 'business tips Ho', 'digital marketing insights', 'web development articles'],
    openGraph: {
        title: 'The Studio Journal | Adaze Web Studio',
        description: 'Expert web design and business growth insights',
        url: 'https://adazewebstudio.com/journal',
        type: 'website',
    },
    alternates: {
        canonical: 'https://adazewebstudio.com/journal',
    },
}

const categoryColors: { [key: string]: string } = {
    'Web Design': 'bg-blue-50 text-blue-600 border-blue-100',
    'Business Growth': 'bg-emerald-50 text-emerald-600 border-emerald-100',
    'Tech Trends': 'bg-purple-50 text-purple-600 border-purple-100',
    'Case Studies': 'bg-amber-50 text-amber-600 border-amber-100',
    'SEO & Marketing': 'bg-rose-50 text-rose-600 border-rose-100',
}

export default function Journal() {
    const featuredPosts = getFeaturedPosts()
    const categories = getAllCategories()

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
                            Learn from our experience building successful products for Ghana businesses.
                        </p>
                    </div>
                </section>

                {/* Categories */}
                <section className="px-6 mb-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link
                                href="/journal"
                                className="px-4 py-2 rounded-full bg-navy text-white text-sm font-semibold"
                            >
                                All Articles
                            </Link>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold border ${categoryColors[category] || 'bg-slate-50 text-slate-600 border-slate-200'}`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Posts */}
                {featuredPosts.length > 0 && (
                    <section className="px-6 mb-16">
                        <div className="container mx-auto max-w-6xl">
                            <h2 className="text-2xl font-bold text-navy mb-8 font-display">Featured Articles</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                {featuredPosts.map((post) => (
                                    <Link
                                        key={post.slug}
                                        href={`/journal/${post.slug}`}
                                        className="group bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-primary/30 transition-all"
                                    >
                                        <div className="aspect-[16/9] bg-gradient-to-br from-navy to-slate-800 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-grid-white/5"></div>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-6xl font-display font-bold text-white/10">
                                                    {post.title.charAt(0)}
                                                </span>
                                            </div>
                                            <div className="absolute top-4 left-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${categoryColors[post.category]}`}>
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-8">
                                            <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-slate-600 mb-4 line-clamp-2">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-4 text-sm text-slate-500">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="w-4 h-4" />
                                                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                                            month: 'short',
                                                            day: 'numeric',
                                                            year: 'numeric'
                                                        })}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="w-4 h-4" />
                                                        {post.readTime} min read
                                                    </span>
                                                </div>
                                                <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* All Posts */}
                <section className="px-6">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl font-bold text-navy mb-8 font-display">All Articles</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {blogPosts.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/journal/${post.slug}`}
                                    className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/30 transition-all"
                                >
                                    <div className="aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-200 relative">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-4xl font-display font-bold text-slate-300">
                                                {post.title.charAt(0)}
                                            </span>
                                        </div>
                                        <div className="absolute top-3 left-3">
                                            <span className={`px-2 py-0.5 rounded-full text-xs font-bold border ${categoryColors[post.category]}`}>
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm mb-3 line-clamp-2">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center gap-3 text-xs text-slate-500">
                                            <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                                            <span>•</span>
                                            <span>{post.readTime} min</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="px-6 mt-20">
                    <div className="container mx-auto max-w-4xl">
                        <div className="bg-navy rounded-[2rem] p-12 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-grid-white/5"></div>
                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold text-white mb-4 font-display">
                                    Ready to Build Your Website?
                                </h2>
                                <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                                    Let's turn your business ideas into a stunning digital reality.
                                </p>
                                <Link
                                    href="/start"
                                    className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all group"
                                >
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

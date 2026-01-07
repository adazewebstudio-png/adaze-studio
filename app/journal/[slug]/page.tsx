import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { blogPosts, getPostBySlug, BlogPost } from '@/lib/blog'
import { Metadata } from 'next'

export const dynamic = 'force-static'

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const post = getPostBySlug(slug)

    if (!post) {
        return {
            title: 'Article Not Found',
        }
    }

    return {
        title: post.title,
        description: post.excerpt,
        keywords: post.tags,
        authors: [{ name: post.author }],
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://adazewebstudio.com/journal/${post.slug}`,
            type: 'article',
            publishedTime: post.publishedAt,
            modifiedTime: post.updatedAt || post.publishedAt,
            authors: [post.author],
            tags: post.tags,
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
        },
        alternates: {
            canonical: `https://adazewebstudio.com/journal/${post.slug}`,
        },
    }
}

const categoryColors: { [key: string]: string } = {
    'Web Design': 'bg-blue-50 text-blue-600 border-blue-100',
    'Business Growth': 'bg-emerald-50 text-emerald-600 border-emerald-100',
    'Tech Trends': 'bg-purple-50 text-purple-600 border-purple-100',
    'Case Studies': 'bg-amber-50 text-amber-600 border-amber-100',
    'SEO & Marketing': 'bg-rose-50 text-rose-600 border-rose-100',
}

function ArticleJsonLd({ post }: { post: BlogPost }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "author": {
            "@type": "Person",
            "name": post.author,
            "jobTitle": post.authorRole
        },
        "publisher": {
            "@type": "Organization",
            "name": "Adaze Web Studio",
            "logo": {
                "@type": "ImageObject",
                "url": "https://adazewebstudio.com/adaze_logo.jpg"
            }
        },
        "datePublished": post.publishedAt,
        "dateModified": post.updatedAt || post.publishedAt,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://adazewebstudio.com/journal/${post.slug}`
        },
        "keywords": post.tags.join(", "),
        "articleSection": post.category,
        "wordCount": post.content.split(' ').length
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}

export default async function JournalArticle({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    // Get related posts (same category, excluding current)
    const relatedPosts = blogPosts
        .filter(p => p.category === post.category && p.slug !== post.slug)
        .slice(0, 2)

    return (
        <>
            <ArticleJsonLd post={post} />
            <Navbar />
            <main id="main-content" className="min-h-screen pt-32 pb-20 bg-white">
                {/* Article Header */}
                <article className="px-6">
                    <div className="container mx-auto max-w-3xl">
                        {/* Back Link */}
                        <Link
                            href="/journal"
                            className="inline-flex items-center gap-2 text-slate-500 hover:text-navy mb-8 text-sm font-medium"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Journal
                        </Link>

                        {/* Category */}
                        <div className="mb-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-bold border ${categoryColors[post.category]}`}>
                                {post.category}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                            {post.title}
                        </h1>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8 pb-8 border-b border-slate-200">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-bold">
                                    {post.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-semibold text-navy">{post.author}</p>
                                    <p className="text-sm text-slate-500">{post.authorRole}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-sm">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric'
                                })}
                            </div>
                            <div className="flex items-center gap-1 text-sm">
                                <Clock className="w-4 h-4" />
                                {post.readTime} min read
                            </div>
                        </div>

                        {/* Content */}
                        <div className="prose prose-lg prose-slate max-w-none 
                            prose-headings:font-display prose-headings:text-navy prose-headings:font-bold
                            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                            prose-p:text-slate-600 prose-p:leading-relaxed
                            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                            prose-strong:text-navy
                            prose-ul:my-4 prose-li:text-slate-600
                            prose-ol:my-4
                        ">
                            {post.content.split('\n').map((paragraph, index) => {
                                if (paragraph.startsWith('## ')) {
                                    return <h2 key={index}>{paragraph.replace('## ', '')}</h2>
                                } else if (paragraph.startsWith('### ')) {
                                    return <h3 key={index}>{paragraph.replace('### ', '')}</h3>
                                } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                                    return <p key={index}><strong>{paragraph.replace(/\*\*/g, '')}</strong></p>
                                } else if (paragraph.startsWith('- ')) {
                                    return null // Handle lists separately
                                } else if (paragraph.trim()) {
                                    return <p key={index}>{paragraph}</p>
                                }
                                return null
                            })}
                        </div>

                        {/* Tags */}
                        <div className="mt-12 pt-8 border-t border-slate-200">
                            <div className="flex items-center gap-2 flex-wrap">
                                <Tag className="w-4 h-4 text-slate-400" />
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Share */}
                        <div className="mt-8 p-6 bg-slate-50 rounded-2xl">
                            <div className="flex items-center justify-between">
                                <p className="text-slate-600 font-medium">Found this helpful? Share it!</p>
                                <div className="flex items-center gap-3">
                                    <button className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors border border-slate-200">
                                        <Share2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <section className="px-6 mt-16">
                        <div className="container mx-auto max-w-3xl">
                            <h2 className="text-2xl font-bold text-navy mb-6 font-display">Related Articles</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {relatedPosts.map((related) => (
                                    <Link
                                        key={related.slug}
                                        href={`/journal/${related.slug}`}
                                        className="group bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors"
                                    >
                                        <span className={`px-2 py-0.5 rounded-full text-xs font-bold border ${categoryColors[related.category]}`}>
                                            {related.category}
                                        </span>
                                        <h3 className="text-lg font-bold text-navy mt-3 group-hover:text-primary transition-colors">
                                            {related.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm mt-2 line-clamp-2">
                                            {related.excerpt}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA */}
                <section className="px-6 mt-16">
                    <div className="container mx-auto max-w-3xl">
                        <div className="bg-navy rounded-2xl p-8 md:p-12 text-center">
                            <h2 className="text-2xl font-bold text-white mb-3 font-display">
                                Need Help With Your Website?
                            </h2>
                            <p className="text-slate-300 mb-6">
                                Let's discuss your project and create something amazing together.
                            </p>
                            <Link
                                href="/start"
                                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all group"
                            >
                                Get a Free Quote
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock, Tag, Share2, ArrowRight } from 'lucide-react'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getPostBySlug, getAllPostSlugs, getAllPosts, SanityPost } from '@/lib/sanity'
import { Metadata } from 'next'

export const revalidate = 60

export async function generateStaticParams() {
    const slugs = await getAllPostSlugs()
    return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const post = await getPostBySlug(slug)

    if (!post) {
        return { title: 'Article Not Found' }
    }

    return {
        title: post.title,
        description: post.excerpt,
        keywords: post.tags,
        authors: [{ name: post.author?.name || 'Adaze Web Studio' }],
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://adazewebstudio.com/journal/${post.slug.current}`,
            type: 'article',
            publishedTime: post.publishedAt,
            authors: [post.author?.name || 'Adaze Web Studio'],
            tags: post.tags,
            images: post.mainImage?.asset?.url ? [post.mainImage.asset.url] : undefined,
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: post.mainImage?.asset?.url ? [post.mainImage.asset.url] : undefined,
        },
        alternates: {
            canonical: `https://adazewebstudio.com/journal/${post.slug.current}`,
        },
    }
}

const categoryColors: { [key: string]: string } = {
    'Web Design': 'bg-blue-50 text-blue-600 border-blue-100',
    'Business Growth': 'bg-emerald-50 text-emerald-600 border-emerald-100',
    'Tech Trends': 'bg-purple-50 text-purple-600 border-purple-100',
    'Case Studies': 'bg-amber-50 text-amber-600 border-amber-100',
    'SEO & Marketing': 'bg-rose-50 text-rose-600 border-rose-100',
    'Development & Engineering': 'bg-indigo-50 text-indigo-600 border-indigo-100',
    'Startup & Product Strategy': 'bg-orange-50 text-orange-600 border-orange-100',
    'Maintenance, Security & Performance': 'bg-slate-50 text-slate-600 border-slate-100',
}

// Custom Portable Text components for beautiful rendering
const portableTextComponents: PortableTextComponents = {
    block: {
        h2: ({ children }) => (
            <h2 className="text-3xl font-display font-bold text-navy mt-12 mb-6">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-2xl font-display font-bold text-navy mt-10 mb-4">
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className="text-xl font-display font-bold text-navy mt-8 mb-3">
                {children}
            </h4>
        ),
        normal: ({ children }) => (
            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                {children}
            </p>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 bg-primary/5 rounded-r-lg">
                <p className="text-slate-700 italic text-lg">{children}</p>
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }) => (
            <ul className="list-disc list-outside ml-6 mb-6 space-y-3 text-slate-600 text-lg">
                {children}
            </ul>
        ),
        number: ({ children }) => (
            <ol className="list-decimal list-outside ml-6 mb-6 space-y-3 text-slate-600 text-lg">
                {children}
            </ol>
        ),
    },
    listItem: {
        bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
        number: ({ children }) => <li className="leading-relaxed">{children}</li>,
    },
    marks: {
        strong: ({ children }) => <strong className="font-bold text-navy">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
        underline: ({ children }) => <span className="underline">{children}</span>,
        code: ({ children }) => (
            <code className="bg-slate-100 text-primary px-2 py-0.5 rounded font-mono text-sm">
                {children}
            </code>
        ),
        link: ({ value, children }) => {
            const href = value?.href || ''
            const isExternal = href.startsWith('http')
            return (
                <Link
                    href={href}
                    className="text-primary hover:underline font-medium"
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                >
                    {children}
                </Link>
            )
        },
    },
    types: {
        image: ({ value }) => {
            if (!value?.asset?.url) return null
            return (
                <figure className="my-10">
                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={value.asset.url}
                            alt={value.alt || 'Blog image'}
                            fill
                            className="object-cover"
                        />
                    </div>
                    {value.caption && (
                        <figcaption className="text-center text-slate-500 text-sm mt-3">
                            {value.caption}
                        </figcaption>
                    )}
                </figure>
            )
        },
        code: ({ value }) => (
            <pre className="bg-slate-900 text-slate-100 rounded-xl p-6 overflow-x-auto my-8">
                <code className="font-mono text-sm">{value.code}</code>
            </pre>
        ),
    },
}

function ArticleJsonLd({ post }: { post: SanityPost }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "author": {
            "@type": "Person",
            "name": post.author?.name || 'Adaze Web Studio',
            "jobTitle": post.author?.role
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
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://adazewebstudio.com/journal/${post.slug.current}`
        },
        "keywords": post.tags?.join(", "),
        "image": post.mainImage?.asset?.url
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
    const post = await getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    const categoryTitle = typeof post.category === 'string' ? post.category : (post.category as any)?.title || 'Uncategorized'

    // Get related posts (same category, excluding current)
    const allPosts = await getAllPosts()
    const relatedPosts = allPosts
        ?.filter(p => {
            const pCat = typeof p.category === 'string' ? p.category : (p.category as any)?.title
            return pCat === categoryTitle && p.slug.current !== post.slug.current
        })
        .slice(0, 2) || []

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
                            <span className={`px-3 py-1 rounded-full text-sm font-bold border ${categoryColors[categoryTitle] || 'bg-slate-50 text-slate-600 border-slate-200'}`}>
                                {categoryTitle}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                            {post.title}
                        </h1>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8 pb-8 border-b border-slate-200">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-bold overflow-hidden">
                                    {post.author?.image?.asset?.url ? (
                                        <Image
                                            src={(post.author.image as any).asset.url}
                                            alt={post.author.name}
                                            width={40}
                                            height={40}
                                            className="object-cover"
                                        />
                                    ) : (
                                        post.author?.name?.charAt(0) || 'A'
                                    )}
                                </div>
                                <div>
                                    <p className="font-semibold text-navy">{post.author?.name || 'Adaze Web Studio'}</p>
                                    <p className="text-sm text-slate-500">{post.author?.role || 'Team'}</p>
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

                        {/* Featured Image */}
                        {post.mainImage?.asset?.url && (
                            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl mb-12">
                                <Image
                                    src={post.mainImage.asset.url}
                                    alt={post.mainImage.alt || post.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        )}

                        {/* Content */}
                        <div className="prose-custom">
                            {post.body && (
                                <PortableText value={post.body} components={portableTextComponents} />
                            )}
                        </div>

                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
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
                        )}

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
                                {relatedPosts.map((related) => {
                                    const relCat = typeof related.category === 'string' ? related.category : (related.category as any)?.title || 'Uncategorized'
                                    return (
                                        <Link
                                            key={related._id}
                                            href={`/journal/${related.slug.current}`}
                                            className="group bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors"
                                        >
                                            <span className={`px-2 py-0.5 rounded-full text-xs font-bold border ${categoryColors[relCat] || 'bg-slate-50 text-slate-600 border-slate-200'}`}>
                                                {relCat}
                                            </span>
                                            <h3 className="text-lg font-bold text-navy mt-3 group-hover:text-primary transition-colors">
                                                {related.title}
                                            </h3>
                                            <p className="text-slate-600 text-sm mt-2 line-clamp-2">
                                                {related.excerpt}
                                            </p>
                                        </Link>
                                    )
                                })}
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

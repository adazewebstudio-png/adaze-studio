'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ChevronRight } from 'lucide-react'
import { SanityPost, SanityCategory } from '@/lib/sanity'

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

function PostCard({ post, featured = false }: { post: SanityPost; featured?: boolean }) {
    const categoryTitle = typeof post.category === 'string' ? post.category : (post.category as any)?.title || 'Uncategorized'

    if (featured) {
        return (
            <Link
                href={`/journal/${post.slug.current}`}
                className="group bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-primary/30 transition-all h-full flex flex-col"
            >
                <div className="aspect-[16/9] bg-gradient-to-br from-navy to-slate-800 relative overflow-hidden flex-shrink-0">
                    {post.mainImage?.asset?.url ? (
                        <Image
                            src={post.mainImage.asset.url}
                            alt={post.mainImage.alt || post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-6xl font-display font-bold text-white/10">{post.title.charAt(0)}</span>
                        </div>
                    )}
                    <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${categoryColors[categoryTitle] || 'bg-slate-50 text-slate-600 border-slate-200'}`}>
                            {categoryTitle}
                        </span>
                    </div>
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                        </h3>
                        <p className="text-slate-600 mb-4 line-clamp-2">
                            {post.excerpt}
                        </p>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
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
        )
    }

    return (
        <Link
            href={`/journal/${post.slug.current}`}
            className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/30 transition-all flex flex-col h-full"
        >
            <div className="aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-200 relative flex-shrink-0">
                {post.mainImage?.asset?.url ? (
                    <Image
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt || post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-display font-bold text-slate-300">{post.title.charAt(0)}</span>
                    </div>
                )}
                <div className="absolute top-3 left-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold border ${categoryColors[categoryTitle] || 'bg-slate-50 text-slate-600 border-slate-200'}`}>
                        {categoryTitle}
                    </span>
                </div>
            </div>
            <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                    <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-3 line-clamp-2">
                        {post.excerpt}
                    </p>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500 mt-auto">
                    <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    <span>•</span>
                    <span>{post.readTime} min read</span>
                </div>
            </div>
        </Link>
    )
}

interface JournalFilterProps {
    allPosts: SanityPost[]
    featuredPosts: SanityPost[]
    categories: SanityCategory[]
}

export default function JournalFilter({ allPosts, featuredPosts, categories }: JournalFilterProps) {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    const filteredPosts = selectedCategory
        ? allPosts.filter(post => {
            const catTitle = typeof post.category === 'string' ? post.category : (post.category as any)?.title
            return catTitle === selectedCategory
        })
        : allPosts

    return (
        <>
            {/* Categories Selection */}
            <section className="px-6 mb-12">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-wrap gap-3 justify-center">
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${selectedCategory === null
                                ? 'bg-navy text-white border-navy shadow-lg'
                                : 'bg-white text-slate-600 border-slate-200 hover:border-navy/30'
                                }`}
                        >
                            All Articles
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category._id}
                                onClick={() => setSelectedCategory(category.title)}
                                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${selectedCategory === category.title
                                    ? 'bg-navy text-white border-navy shadow-lg'
                                    : `${categoryColors[category.title] || 'bg-white text-slate-600 border-slate-200 hover:border-navy/30'}`
                                    }`}
                            >
                                {category.title}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Section (Hidden when a category is selected to keep focus on filtering) */}
            {!selectedCategory && featuredPosts.length > 0 && (
                <section className="px-6 mb-16">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl font-bold text-navy mb-8 font-display">Featured Articles</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {featuredPosts.map((post) => (
                                <PostCard key={post._id} post={post} featured />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Main Posts Grid */}
            <section className="px-6">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-2xl font-bold text-navy mb-8 font-display">
                        {selectedCategory ? `${selectedCategory} Articles` : 'All Articles'}
                    </h2>

                    {filteredPosts.length > 0 ? (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredPosts.map((post) => (
                                <PostCard key={post._id} post={post} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
                            <p className="text-slate-500 font-medium">No articles found in this category yet.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

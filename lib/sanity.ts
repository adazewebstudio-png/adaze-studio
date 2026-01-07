import { createClient } from '@sanity/client'

export const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'fa80crkw',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-01-01',
    useCdn: true, // Use CDN for faster reads in production
    token: process.env.SANITY_API_TOKEN, // Only needed for authenticated requests
})

// For fetching drafts/previews (server-side only)
export const previewClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'fa80crkw',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
})

// Helper to get the right client
export const getClient = (preview = false) => (preview ? previewClient : sanityClient)

// GROQ Queries
export const blogQueries = {
    // Get all published posts
    allPosts: `*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        publishedAt,
        category,
        tags,
        readTime,
        featured,
        "author": author->{name, role, image},
        mainImage {
            asset->{url},
            alt
        }
    }`,

    // Get featured posts
    featuredPosts: `*[_type == "post" && featured == true && !(_id in path("drafts.**"))] | order(publishedAt desc) [0...4] {
        _id,
        title,
        slug,
        excerpt,
        publishedAt,
        category,
        tags,
        readTime,
        featured,
        "author": author->{name, role, image},
        mainImage {
            asset->{url},
            alt
        }
    }`,

    // Get single post by slug
    postBySlug: `*[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
        _id,
        title,
        slug,
        excerpt,
        body,
        publishedAt,
        category,
        tags,
        readTime,
        featured,
        "author": author->{name, role, image},
        mainImage {
            asset->{url},
            alt
        }
    }`,

    // Get all categories
    allCategories: `*[_type == "category"] | order(title asc) {
        _id,
        title,
        slug,
        description
    }`,

    // Get posts by category
    postsByCategory: `*[_type == "post" && category->slug.current == $category && !(_id in path("drafts.**"))] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        publishedAt,
        category,
        tags,
        readTime,
        featured,
        "author": author->{name, role, image},
        mainImage {
            asset->{url},
            alt
        }
    }`,

    // Get all post slugs (for static generation)
    allPostSlugs: `*[_type == "post" && !(_id in path("drafts.**"))].slug.current`,

    // Combined query for the main journal page
    journalPage: `{
        "allPosts": *[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
            _id,
            title,
            slug,
            excerpt,
            publishedAt,
            category->{title, slug},
            tags,
            readTime,
            featured,
            "author": author->{name, role, image},
            mainImage {
                asset->{url},
                alt
            }
        },
        "featuredPosts": *[_type == "post" && featured == true && !(_id in path("drafts.**"))] | order(publishedAt desc) [0...4] {
            _id,
            title,
            slug,
            excerpt,
            publishedAt,
            category->{title, slug},
            tags,
            readTime,
            featured,
            "author": author->{name, role, image},
            mainImage {
                asset->{url},
                alt
            }
        },
        "categories": *[_type == "category"] | order(title asc) {
            _id,
            title,
            slug,
            description
        }
    }`
}

// TypeScript interfaces
export interface SanityPost {
    _id: string
    title: string
    slug: { current: string }
    excerpt: string
    body?: any[] // Portable Text
    publishedAt: string
    category: string
    tags: string[]
    readTime: number
    featured: boolean
    author: {
        name: string
        role: string
        image?: { asset: { url: string } }
    }
    mainImage?: {
        asset: { url: string }
        alt: string
    }
}

export interface SanityCategory {
    _id: string
    title: string
    slug: { current: string }
    description?: string
}

export interface JournalData {
    allPosts: SanityPost[]
    featuredPosts: SanityPost[]
    categories: SanityCategory[]
}

// Fetch functions
export async function getJournalData(): Promise<JournalData> {
    return await sanityClient.fetch(blogQueries.journalPage)
}

export async function getAllPosts(): Promise<SanityPost[]> {
    return await sanityClient.fetch(blogQueries.allPosts)
}

export async function getFeaturedPosts(): Promise<SanityPost[]> {
    return await sanityClient.fetch(blogQueries.featuredPosts)
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
    return await sanityClient.fetch(blogQueries.postBySlug, { slug })
}

export async function getAllCategories(): Promise<SanityCategory[]> {
    return await sanityClient.fetch(blogQueries.allCategories)
}

export async function getPostsByCategory(category: string): Promise<SanityPost[]> {
    return await sanityClient.fetch(blogQueries.postsByCategory, { category })
}

export async function getAllPostSlugs(): Promise<string[]> {
    return await sanityClient.fetch(blogQueries.allPostSlugs)
}

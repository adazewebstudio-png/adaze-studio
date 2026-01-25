import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/sanity'

const BASE_URL = 'https://adazewebstudio.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const currentDate = new Date().toISOString()

    // Main pages
    const mainPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${BASE_URL}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/services`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/portfolio`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/portfolio/all`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/start`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/journal`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/faqs`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        // Individual Case Studies
        {
            url: `${BASE_URL}/portfolio/vrared`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/portfolio/ayeccu`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/portfolio/adonai-estate`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/portfolio/mawuli-pop`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/portfolio/richard-adaze`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/portfolio/adonai-engineering`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ]

    // Service pages
    const services = [
        'web-design',
        'mobile-apps',
        'e-commerce',
        'seo-optimization',
        'ui-ux-design',
        'maintenance-support',
    ]

    const servicePages: MetadataRoute.Sitemap = services.map((slug) => ({
        url: `${BASE_URL}/services/${slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    // Blog/Journal articles from Sanity
    let blogPages: MetadataRoute.Sitemap = []
    try {
        const posts = await getAllPosts()
        if (posts && posts.length > 0) {
            blogPages = posts.map((post) => ({
                url: `${BASE_URL}/journal/${post.slug.current}`,
                lastModified: post.publishedAt,
                changeFrequency: 'monthly' as const,
                priority: 0.7,
            }))
        }
    } catch (error) {
        // If Sanity fetch fails, continue without blog pages
        console.error('Failed to fetch blog posts for sitemap:', error)
    }

    // Legal pages
    const legalPages: MetadataRoute.Sitemap = [
        {
            url: `${BASE_URL}/privacy`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${BASE_URL}/terms`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${BASE_URL}/accessibility`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ]

    // Affiliate pages (public-facing)
    const affiliatePages: MetadataRoute.Sitemap = [
        {
            url: `${BASE_URL}/affiliate`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/affiliate/signup`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${BASE_URL}/affiliate/login`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.4,
        },
    ]

    return [...mainPages, ...servicePages, ...blogPages, ...legalPages, ...affiliatePages]
}

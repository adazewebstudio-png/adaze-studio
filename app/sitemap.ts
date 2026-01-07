import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog'

const BASE_URL = 'https://adazewebstudio.com'

export default function sitemap(): MetadataRoute.Sitemap {
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

    // Blog/Journal articles
    const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${BASE_URL}/journal/${post.slug}`,
        lastModified: post.updatedAt || post.publishedAt,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

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


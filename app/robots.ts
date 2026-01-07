import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const BASE_URL = 'https://adazewebstudio.com'

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/admin/',
                    '/affiliate/dashboard/',
                    '/api/',
                    '/_next/',
                    '/private/',
                ],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/admin/', '/affiliate/dashboard/'],
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                disallow: ['/admin/', '/affiliate/dashboard/'],
            },
        ],
        sitemap: `${BASE_URL}/sitemap.xml`,
        host: BASE_URL,
    }
}

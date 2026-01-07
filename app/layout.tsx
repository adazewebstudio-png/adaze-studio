import type { Metadata, Viewport } from 'next'
import { Inter, Outfit } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { clsx } from 'clsx'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

const BASE_URL = 'https://adazewebstudio.com'

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0c0c1d' },
    ],
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
}

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        default: 'Adaze Web Studio | Best Web Design & App Development in Ho, Volta Region Ghana',
        template: '%s | Adaze Web Studio',
    },
    description: 'Award-winning web design and software development agency in Ho, Volta Region, Ghana. We build fast, modern websites, mobile apps, and e-commerce solutions. Trusted by VRARED, AYECCU, and 50+ businesses. Get a free quote today!',
    keywords: [
        // Primary keywords
        'web design Ho Ghana',
        'website developer Ho',
        'software company Volta Region',
        'mobile app developer Ghana',
        'web design Volta Region',
        // Long-tail keywords
        'best web design company in Ho',
        'affordable website design Ghana',
        'e-commerce website developer Ghana',
        'business website Ho Volta',
        'professional web developer Ghana',
        // Service keywords
        'website maintenance Ghana',
        'SEO services Ho',
        'mobile app development Volta Region',
        'UI UX design Ghana',
        // Brand keywords
        'Adaze Web Studio',
        'Adaze Studio',
    ],
    authors: [{ name: 'Adaze Web Studio', url: BASE_URL }],
    creator: 'Adaze Web Studio',
    publisher: 'Adaze Web Studio',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: BASE_URL,
        title: 'Adaze Web Studio | Best Web Design in Ho, Ghana',
        description: 'Transform your business with a stunning website. We create modern, high-performance websites and apps for businesses in Ghana. Free consultation available!',
        siteName: 'Adaze Web Studio',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Adaze Web Studio - Web Design & App Development in Ghana',
                type: 'image/jpeg',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Adaze Web Studio | Web Design & App Development',
        description: 'Premier software development agency in Ho, Ghana. Modern websites & mobile apps.',
        images: ['/og-image.jpg'],
        creator: '@adazewebstudio',
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
        other: [
            {
                rel: 'mask-icon',
                url: '/favicon.png',
            },
        ],
    },
    manifest: '/manifest.json',
    alternates: {
        canonical: BASE_URL,
    },
    category: 'technology',
    classification: 'Web Design, Software Development, Mobile App Development',
    referrer: 'origin-when-cross-origin',
    other: {
        'google-site-verification': 'your-google-verification-code', // Add your Google verification
        'msvalidate.01': 'your-bing-verification-code', // Add your Bing verification
    },
}

import JsonLd from './json-ld'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={clsx(inter.variable, outfit.variable, "scroll-smooth")} suppressHydrationWarning>
            <head>
                {/* Preconnect to external resources */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                {/* DNS Prefetch */}
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

                {/* Geo tags for local SEO */}
                <meta name="geo.region" content="GH-V" />
                <meta name="geo.placename" content="Ho, Volta Region" />
                <meta name="geo.position" content="6.6008;0.4713" />
                <meta name="ICBM" content="6.6008, 0.4713" />

                {/* Google Analytics */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-4069LC2HC5"
                    strategy="beforeInteractive"
                />
                <Script id="google-analytics" strategy="beforeInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-4069LC2HC5');
                    `}
                </Script>

                {/* Google Tag Manager */}
                <Script id="google-tag-manager" strategy="beforeInteractive">
                    {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-KTS8PCVK');`}
                </Script>
            </head>
            <body className="bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-KTS8PCVK"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>
                {/* Skip to Content - Accessibility */}
                <a href="#main-content" className="skip-to-content">
                    Skip to main content
                </a>
                <JsonLd />
                {children}
                <div className="fixed inset-0 z-[-1] pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px]" />
                    <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px]" />
                </div>

            </body>
        </html>
    )
}

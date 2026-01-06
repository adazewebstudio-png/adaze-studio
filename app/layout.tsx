import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { clsx } from 'clsx'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
    title: {
        default: 'Adaze Web Studio | Web Design & App Development in Ho, Volta Region',
        template: '%s | Adaze Web Studio',
    },
    description: 'Premier software development agency in Ho, Volta Region, Ghana. We build fast, modern websites and mobile apps that help businesses attract more customers and grow revenue. Trusted by VRARED, AYECCU, and more.',
    keywords: ['Web Design Ho Ghana', 'Software Company Volta Region', 'App Development Ho', 'Website Developer in Ho', 'Mobile App Developer Ghana', 'Web Design Volta Region', 'Adaze Web Studio', 'Tech Agency Ho', 'E-commerce Website Ghana', 'Business Website Ho'],
    authors: [{ name: 'Adaze Web Studio' }],
    creator: 'Adaze Web Studio',
    publisher: 'Adaze Web Studio',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://adazestudio.com',
        title: 'Adaze Web Studio | Powering Your Growth',
        description: 'Transforming businesses in Ho and beyond with ultra-modern websites and apps.',
        siteName: 'Adaze Web Studio',
        images: [
            {
                url: '/adaze_logo.jpg',
                width: 1200,
                height: 630,
                alt: 'Adaze Web Studio Logo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Adaze Web Studio | Powering Your Growth',
        description: 'Premier software development agency in Ho, Ghana.',
        images: ['/adaze_logo.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon.png',
        apple: '/favicon.png',
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
            <body className="bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
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

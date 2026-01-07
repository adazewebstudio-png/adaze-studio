import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Start Your Project - Get a Free Quote | Adaze Web Studio',
    description: 'Ready to build your website or app? Start your project with Adaze Web Studio today. Get a free consultation and custom quote for web design, mobile apps, and e-commerce in Ghana.',
    keywords: ['start project', 'free quote website Ghana', 'web design consultation Ho', 'hire web developer Ghana', 'website quote'],
    openGraph: {
        title: 'Start Your Project | Adaze Web Studio',
        description: 'Get a free consultation and quote for your website or app',
        url: 'https://adazewebstudio.com/start',
        type: 'website',
    },
    alternates: {
        canonical: 'https://adazewebstudio.com/start',
    },
}

export default function StartLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}

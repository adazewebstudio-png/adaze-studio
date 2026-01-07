import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'FAQs - Frequently Asked Questions About Our Services',
    description: 'Find answers to common questions about web design costs in Ghana, our process, timeline, mobile apps, SEO services, and support. Get clarity before starting your project.',
    keywords: ['web design FAQ Ghana', 'website cost questions', 'web development process', 'mobile app FAQ', 'SEO questions Ho'],
    openGraph: {
        title: 'FAQs | Adaze Web Studio',
        description: 'Answers to common questions about our web design and development services',
        url: 'https://adazewebstudio.com/faqs',
        type: 'website',
    },
    alternates: {
        canonical: 'https://adazewebstudio.com/faqs',
    },
}

// FAQ Schema for SEO/AEO
export function generateFAQSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How much does a website cost in Ghana?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Website costs vary based on complexity. Basic business websites start from GH₵ 2,000, professional sites range from GH₵ 5,000 - GH₵ 15,000, and e-commerce websites cost GH₵ 8,000 - GH₵ 25,000+."
                }
            },
            {
                "@type": "Question",
                "name": "How long does it take to build a website?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Timeline depends on project complexity. A basic business website takes 2-4 weeks, professional websites take 4-6 weeks, and complex e-commerce or web applications take 8-12 weeks."
                }
            },
            {
                "@type": "Question",
                "name": "Do you offer payment plans?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! We offer flexible payment plans where you can pay 50% upfront and the remaining 50% upon completion. For larger projects, we can arrange custom payment schedules."
                }
            },
            {
                "@type": "Question",
                "name": "Can you build mobile apps for iOS and Android?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! We develop mobile apps for both iOS and Android platforms using React Native and Flutter for cross-platform development."
                }
            },
            {
                "@type": "Question",
                "name": "Do you offer website maintenance?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! We offer maintenance packages starting from GH₵ 200/month. This includes security updates, regular backups, performance monitoring, and priority technical support."
                }
            }
        ]
    }
}

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema()) }}
            />
            {children}
        </>
    )
}

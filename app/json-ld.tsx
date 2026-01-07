export default function JsonLd() {
    // Organization Schema
    const organization = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://adazewebstudio.com/#organization",
        "name": "Adaze Web Studio",
        "alternateName": "Adaze Studio",
        "url": "https://adazewebstudio.com",
        "logo": {
            "@type": "ImageObject",
            "url": "https://adazewebstudio.com/adaze_logo.jpg",
            "width": 512,
            "height": 512
        },
        "image": "https://adazewebstudio.com/adaze_logo.jpg",
        "description": "Adaze Web Studio is a leading web design and software development agency in Ho, Volta Region, Ghana. We create modern websites, mobile apps, and digital solutions for businesses.",
        "email": "enquiries@adazewebstudio.com",
        "telephone": "+233506562811",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Ho, Volta Region",
            "addressLocality": "Ho",
            "addressRegion": "Volta",
            "postalCode": "00233",
            "addressCountry": "GH"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 6.6008,
            "longitude": 0.4713
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Ho"
            },
            {
                "@type": "State",
                "name": "Volta Region"
            },
            {
                "@type": "Country",
                "name": "Ghana"
            }
        ],
        "sameAs": [
            "https://facebook.com/adazewebstudio"
        ],
        "foundingDate": "2023",
        "founder": {
            "@type": "Person",
            "name": "Richard Adaze"
        }
    }

    // Local Business Schema
    const localBusiness = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": "https://adazewebstudio.com/#localbusiness",
        "name": "Adaze Web Studio",
        "image": "https://adazewebstudio.com/adaze_logo.jpg",
        "description": "Professional web design, mobile app development, and digital solutions in Ho, Volta Region, Ghana.",
        "url": "https://adazewebstudio.com",
        "telephone": "+233506562811",
        "email": "enquiries@adazewebstudio.com",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Ho, Volta Region",
            "addressLocality": "Ho",
            "addressRegion": "Volta",
            "postalCode": "00233",
            "addressCountry": "GH"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 6.6008,
            "longitude": 0.4713
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "17:00"
            }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Web Development Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Website Design & Development",
                        "description": "Custom, responsive websites built with modern technologies"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Mobile App Development",
                        "description": "Native and cross-platform mobile applications"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "E-commerce Solutions",
                        "description": "Online stores with secure payment integration"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "SEO Optimization",
                        "description": "Search engine optimization to improve online visibility"
                    }
                }
            ]
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "15",
            "bestRating": "5",
            "worstRating": "1"
        }
    }

    // Website Schema
    const website = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://adazewebstudio.com/#website",
        "url": "https://adazewebstudio.com",
        "name": "Adaze Web Studio",
        "description": "Premier web design and software development agency in Ho, Volta Region, Ghana",
        "publisher": {
            "@id": "https://adazewebstudio.com/#organization"
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://adazewebstudio.com/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        },
        "inLanguage": "en-US"
    }

    // FAQ Schema for AEO (Answer Engine Optimization)
    const faq = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How much does a website cost in Ghana?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Website costs in Ghana vary based on complexity. At Adaze Web Studio, basic business websites start from GH₵ 2,000, while e-commerce and custom web applications range from GH₵ 5,000 to GH₵ 20,000+. We offer flexible payment plans for all budgets."
                }
            },
            {
                "@type": "Question",
                "name": "What is the best web design company in Ho, Ghana?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Adaze Web Studio is the leading web design company in Ho, Volta Region. We specialize in modern, responsive websites and mobile apps for businesses. Our clients include VRARED (Volta Region Association of Real Estate Developers) and AYECCU (Akatsi Youth Entrepreneurs Cooperative Credit Union)."
                }
            },
            {
                "@type": "Question",
                "name": "How long does it take to build a website?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A standard business website takes 2-4 weeks to complete. E-commerce websites typically take 4-6 weeks, while complex web applications may take 8-12 weeks. We provide clear timelines and regular progress updates throughout the project."
                }
            },
            {
                "@type": "Question",
                "name": "Do you offer website maintenance services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Adaze Web Studio offers comprehensive website maintenance packages including security updates, content updates, performance optimization, and 24/7 technical support. Our maintenance plans start from GH₵ 200/month."
                }
            },
            {
                "@type": "Question",
                "name": "Can you build mobile apps for iOS and Android?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely! We develop mobile apps for both iOS and Android platforms. We use React Native and Flutter for cross-platform development, ensuring your app works seamlessly on all devices while reducing development time and cost."
                }
            },
            {
                "@type": "Question",
                "name": "Do you offer SEO services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide comprehensive SEO services including keyword research, on-page optimization, technical SEO, local SEO for Ghanaian businesses, and content strategy. Our goal is to help your website rank higher on Google and attract more customers."
                }
            }
        ]
    }

    // Breadcrumb Schema
    const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://adazewebstudio.com"
            }
        ]
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
            />
        </>
    )
}

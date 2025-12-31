export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Adaze Web Studio",
        "image": "https://adazestudio.com/adaze_logo.jpg",
        "description": "Adaze Web Studio is a premier software development agency in Ho, Ghana, specializing in modern websites for small businesses and public apps.",
        "@id": "https://adazestudio.com",
        "url": "https://adazestudio.com",
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
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "17:00"
        },
        "sameAs": [
            "https://twitter.com/adazestudio",
            "https://facebook.com/adazestudio",
            "https://linkedin.com/company/adazestudio"
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}

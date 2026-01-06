// Main service categories shown on the Services page
export const serviceCategories = [
    {
        id: "website",
        name: "Website",
        tagline: "Your Digital Storefront",
        description: "From portfolios to e-commerce stores, we build stunning websites that convert visitors into customers.",
        longDescription: "Whether you're a freelancer showcasing your work, a small business establishing credibility, or a real estate agency managing hundreds of listings — we have a website solution tailored for you. Our websites are fast, secure, mobile-friendly, and optimized for search engines.",
        icon: "Globe",
        color: "blue",
        idealFor: "Freelancers, Small Businesses, Real Estate, E-Commerce",
        turnaround: "1-4 Weeks",
        subPackages: [
            { name: "Freelancers & Creatives", description: "Single-page portfolio sites for photographers, artists, and personal brands." },
            { name: "Small Business Starter", description: "5-page professional website with SEO, Google Maps, and contact forms." },
            { name: "Real Estate Agent", description: "Property listing galleries with WhatsApp inquiry and mobile optimization." },
            { name: "Real Estate Company", description: "Corporate presence with project showcases and team sections." },
            { name: "Real Estate Agency Pro", description: "Advanced search filters, agent portals, and lead capture CRM." },
            { name: "Pro E-Commerce", description: "Full online store with payment gateway, inventory, and order tracking." },
        ],
        features: [
            "Responsive Mobile-First Design",
            "SEO Optimization",
            "Fast Loading Speed",
            "SSL Security Certificate",
            "Content Management System",
            "Analytics Integration",
        ]
    },
    {
        id: "web-application",
        name: "Web Application",
        tagline: "Software That Works For You",
        description: "Custom web applications, SaaS platforms, and internal tools built to automate and scale your operations.",
        longDescription: "Need more than a website? We engineer robust, scalable web applications that solve real business problems. From membership portals to inventory systems, from booking platforms to full SaaS products — we turn your vision into working software.",
        icon: "Code2",
        color: "purple",
        idealFor: "Startups, Corporations, FinTech, Institutions",
        turnaround: "4-12 Weeks",
        subPackages: [
            { name: "Custom SAAS Platform", description: "Build your own software-as-a-service product from the ground up." },
            { name: "Business Portal", description: "Member/client portals with secure login and dashboards." },
            { name: "Internal Tools", description: "Inventory, booking, or workflow automation systems for your team." },
            { name: "API Development", description: "Backend systems that connect your apps and third-party services." },
        ],
        features: [
            "Custom Functionality",
            "Database Architecture",
            "User Authentication",
            "API Integrations",
            "Admin Dashboard",
            "Scalable Infrastructure",
        ]
    },
    {
        id: "mobile-app",
        name: "Mobile App",
        tagline: "In Every Pocket",
        description: "Native and cross-platform mobile applications for iOS and Android that your users will love.",
        longDescription: "Reach your customers where they spend most of their time — on their phones. We design and develop mobile applications that are intuitive, performant, and beautiful. Whether you need a customer-facing app or an internal tool, we deliver apps that work flawlessly.",
        icon: "Smartphone",
        color: "emerald",
        idealFor: "Consumer Brands, Startups, Service Businesses",
        turnaround: "6-16 Weeks",
        subPackages: [
            { name: "iOS App", description: "Native application for Apple devices (iPhone, iPad)." },
            { name: "Android App", description: "Native application for Android phones and tablets." },
            { name: "Cross-Platform App", description: "Single codebase that runs on both iOS and Android." },
        ],
        features: [
            "Intuitive UX Design",
            "Push Notifications",
            "Offline Functionality",
            "App Store Submission",
            "Analytics & Crash Reporting",
            "Ongoing Maintenance",
        ]
    },
    {
        id: "website-mobile-bundle",
        name: "Website + Mobile App",
        tagline: "Complete Digital Presence",
        description: "The ultimate package: a professional website AND a mobile app, designed to work together seamlessly.",
        longDescription: "Why choose one when you can have both? This bundled offering gives you a cohesive digital presence across web and mobile. We design both platforms with consistent branding, shared backend systems, and a unified user experience — at a better value than buying separately.",
        icon: "Layers",
        color: "amber",
        idealFor: "Growing Businesses, Startups, Enterprises",
        turnaround: "8-20 Weeks",
        subPackages: [
            { name: "Starter Bundle", description: "Business website + basic mobile app with core features." },
            { name: "Growth Bundle", description: "E-commerce or advanced website + feature-rich mobile app." },
            { name: "Enterprise Bundle", description: "Custom web application + full-featured mobile apps for iOS & Android." },
        ],
        features: [
            "Unified Branding",
            "Shared Backend/Database",
            "Cross-Platform Sync",
            "Priority Support",
            "Discounted Bundle Pricing",
            "Single Project Manager",
        ]
    },
]

// Keep old packages for backward compatibility with existing detail pages
export const packages = [
    {
        id: "freelancers-creatives",
        name: "Freelancers & Creatives",
        price: "Custom Quote",
        description: "For photographers, artists, and personal brands.",
        longDescription: "Stand out from the crowd with a stunning personal portfolio. We create a showcase that highlights your best work, connects with your audience, and builds your personal brand identity online.",
        features: [
            "Single Page / Portfolio Site",
            "Gallery Integration",
            "Social Media Links",
            "Contact Form",
            "Fast & Responsive"
        ],
        idealFor: "Photographers, Designers, Models, Influencers",
        turnaround: "3-5 Days"
    },
    {
        id: "small-business-starter",
        name: "Small Business Starter",
        price: "Custom Quote",
        description: "Essential professional presence for shops and services.",
        longDescription: "Get your business online with a credible, professional website. We focus on clear information, local SEO to help customers find you, and a design that builds trust immediately.",
        features: [
            "5-Page Logic Website",
            "Google Maps Integration",
            "Service Listings",
            "Click-to-Call Buttons",
            "Basic SEO Setup"
        ],
        idealFor: "Shops, Restaurants, Salons, Mechanics",
        turnaround: "1-2 Weeks"
    },
    {
        id: "enterprise-custom",
        name: "Enterprise & Custom",
        price: "Custom Quote",
        description: "Have a unique idea? We build tailored software solutions to solve your specific business challenges.",
        longDescription: "For visionaries who need more than a website. Whether it's a SaaS platform, an internal business tool, or a complex mobile app, we engineer robust, scalable software tailored to your exact workflows.",
        features: [
            "Fully Custom Functionality",
            "Complex Database Systems",
            "API & 3rd Party Integrations",
            "High-Scale Architecture",
            "Dedicated Project Manager"
        ],
        idealFor: "Startups, Large Corporations, FinTech",
        turnaround: "Variable"
    }
]

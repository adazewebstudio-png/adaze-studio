/**
 * Seed Script for Adaze Web Studio Blog
 * 
 * This script populates the Sanity database with initial content:
 * - 1 Author
 * - 5 Categories
 * - 4 Blog Posts
 * 
 * Usage:
 * 1. Create a token with "Editor" permissions at sanity.io/manage
 * 2. Set the SANITY_WRITE_TOKEN environment variable
 * 3. Run: npx ts-node scripts/seed-blog.ts
 */

import { createClient } from '@sanity/client'

// Configuration
const projectId = 'fa80crkw'
const dataset = 'production'
const token = process.env.SANITY_WRITE_TOKEN || process.env.SANITY_API_TOKEN

if (!token) {
    console.error('❌ Error: SANITY_WRITE_TOKEN or SANITY_API_TOKEN is required')
    console.log('Please create an Editor token at sanity.io/manage and set it as an environment variable')
    process.exit(1)
}

const client = createClient({
    projectId,
    dataset,
    token,
    apiVersion: '2024-01-01',
    useCdn: false,
})

// Author data
const author = {
    _type: 'author',
    _id: 'author-richard-adaze',
    name: 'Richard Adaze',
    slug: { _type: 'slug', current: 'richard-adaze' },
    role: 'Founder, Adaze Web Studio',
    bio: 'Richard is the founder of Adaze Web Studio, a premier web design and software development agency based in Ho, Volta Region, Ghana. With years of experience in building digital products, Richard is passionate about helping businesses grow through technology.',
}

// Categories data
const categories = [
    {
        _type: 'category',
        _id: 'category-web-design',
        title: 'Web Design',
        slug: { _type: 'slug', current: 'web-design' },
        description: 'Tips, trends, and best practices for web design',
        color: 'blue',
    },
    {
        _type: 'category',
        _id: 'category-business-growth',
        title: 'Business Growth',
        slug: { _type: 'slug', current: 'business-growth' },
        description: 'Strategies and insights for growing your business online',
        color: 'emerald',
    },
    {
        _type: 'category',
        _id: 'category-tech-trends',
        title: 'Tech Trends',
        slug: { _type: 'slug', current: 'tech-trends' },
        description: 'Latest technology trends and innovations',
        color: 'purple',
    },
    {
        _type: 'category',
        _id: 'category-case-studies',
        title: 'Case Studies',
        slug: { _type: 'slug', current: 'case-studies' },
        description: 'In-depth looks at our successful projects',
        color: 'amber',
    },
    {
        _type: 'category',
        _id: 'category-seo-marketing',
        title: 'SEO & Marketing',
        slug: { _type: 'slug', current: 'seo-marketing' },
        description: 'SEO tips and digital marketing strategies',
        color: 'rose',
    },
]

// Helper to convert markdown-like text to Portable Text blocks
function textToBlocks(text: string): any[] {
    const blocks: any[] = []
    const lines = text.trim().split('\n')

    let i = 0
    while (i < lines.length) {
        const line = lines[i].trim()

        if (!line) {
            i++
            continue
        }

        // H2
        if (line.startsWith('### ')) {
            blocks.push({
                _type: 'block',
                _key: `block-${blocks.length}`,
                style: 'h3',
                markDefs: [],
                children: [{ _type: 'span', _key: 'span0', text: line.replace('### ', ''), marks: [] }],
            })
        }
        // H3/H2
        else if (line.startsWith('## ')) {
            blocks.push({
                _type: 'block',
                _key: `block-${blocks.length}`,
                style: 'h2',
                markDefs: [],
                children: [{ _type: 'span', _key: 'span0', text: line.replace('## ', ''), marks: [] }],
            })
        }
        // List item
        else if (line.startsWith('- ')) {
            const listItems: any[] = []
            while (i < lines.length && lines[i].trim().startsWith('- ')) {
                listItems.push({
                    _type: 'block',
                    _key: `block-${blocks.length + listItems.length}`,
                    style: 'normal',
                    listItem: 'bullet',
                    level: 1,
                    markDefs: [],
                    children: [{ _type: 'span', _key: 'span0', text: lines[i].trim().replace('- ', ''), marks: [] }],
                })
                i++
            }
            blocks.push(...listItems)
            continue
        }
        // Numbered list
        else if (/^\d+\.\s/.test(line)) {
            const listItems: any[] = []
            while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
                const text = lines[i].trim().replace(/^\d+\.\s/, '')
                // Handle bold text like **Design Complexity**
                const parts = text.split(/\*\*([^*]+)\*\*/)
                const children: any[] = []
                parts.forEach((part, idx) => {
                    if (idx % 2 === 1) {
                        children.push({ _type: 'span', _key: `span${idx}`, text: part, marks: ['strong'] })
                    } else if (part) {
                        children.push({ _type: 'span', _key: `span${idx}`, text: part, marks: [] })
                    }
                })
                if (children.length === 0) {
                    children.push({ _type: 'span', _key: 'span0', text, marks: [] })
                }
                listItems.push({
                    _type: 'block',
                    _key: `block-${blocks.length + listItems.length}`,
                    style: 'normal',
                    listItem: 'number',
                    level: 1,
                    markDefs: [],
                    children,
                })
                i++
            }
            blocks.push(...listItems)
            continue
        }
        // Regular paragraph
        else {
            blocks.push({
                _type: 'block',
                _key: `block-${blocks.length}`,
                style: 'normal',
                markDefs: [],
                children: [{ _type: 'span', _key: 'span0', text: line, marks: [] }],
            })
        }

        i++
    }

    return blocks
}

// Blog posts data
const posts = [
    {
        _type: 'post',
        _id: 'post-website-cost-ghana',
        title: 'How Much Does a Website Cost in Ghana? Complete 2026 Guide',
        slug: { _type: 'slug', current: 'how-much-does-website-cost-ghana-2026' },
        author: { _type: 'reference', _ref: 'author-richard-adaze' },
        category: { _type: 'reference', _ref: 'category-web-design' },
        excerpt: 'Discover the real costs of building a professional website in Ghana. From basic business sites to complex e-commerce platforms, we break down pricing, what affects costs, and how to get the best value.',
        tags: ['pricing', 'ghana', 'website cost', 'business'],
        readTime: 5,
        featured: true,
        publishedAt: '2026-01-05T10:00:00Z',
        body: textToBlocks(`
## The Real Cost of a Website in Ghana

If you're a business owner in Ghana thinking about getting a website, one of your first questions is probably: "How much will this cost?" The answer isn't straightforward, but this guide will give you a clear understanding of what to expect.

### Basic Business Website: GH₵ 2,000 - GH₵ 5,000

A basic business website typically includes:

- 5-10 pages (Home, About, Services, Contact, etc.)
- Mobile-responsive design
- Contact form
- Basic SEO optimization
- Social media integration

This is perfect for small businesses, freelancers, and professionals who need an online presence.

### Professional Business Website: GH₵ 5,000 - GH₵ 15,000

A professional website includes everything above plus:

- Custom design tailored to your brand
- Advanced animations and interactions
- Blog functionality
- Multiple contact forms
- Integration with third-party tools
- Enhanced SEO

### E-Commerce Website: GH₵ 8,000 - GH₵ 25,000

An online store requires:

- Product catalog management
- Shopping cart functionality
- Secure payment integration (Mobile Money, cards)
- Inventory management
- Order tracking
- Customer accounts

### What Affects Website Cost?

1. **Design Complexity** - Custom designs cost more than templates
2. **Number of Pages** - More pages = more work
3. **Functionality** - Special features like booking systems add cost
4. **Content Creation** - Photography, copywriting, etc.
5. **Ongoing Maintenance** - Updates, security, hosting

### Getting the Best Value

At Adaze Web Studio, we offer transparent pricing with no hidden fees. We work with your budget to deliver a website that actually grows your business.

Ready to get started? Contact us for a free quote.
        `),
    },
    {
        _type: 'post',
        _id: 'post-why-business-needs-website',
        title: 'Why Your Business Needs a Website in 2026 (Even in Ghana)',
        slug: { _type: 'slug', current: 'why-your-business-needs-website-2026' },
        author: { _type: 'reference', _ref: 'author-richard-adaze' },
        category: { _type: 'reference', _ref: 'category-business-growth' },
        excerpt: 'Still wondering if your business needs a website? Here are 7 compelling reasons why having a professional website is no longer optional for businesses in Ghana.',
        tags: ['business', 'digital presence', 'ghana', 'small business'],
        readTime: 4,
        featured: true,
        publishedAt: '2026-01-03T10:00:00Z',
        body: textToBlocks(`
## 7 Reasons Your Ghana Business Needs a Website

Many business owners in Ghana still rely solely on WhatsApp and social media for their online presence. While these platforms are great, they're not enough anymore. Here's why:

### 1. Credibility and Trust

When potential customers search for your business and find a professional website, it immediately builds trust. A website shows you're serious about your business.

### 2. You Don't Own Social Media

Facebook, Instagram, and WhatsApp can change their rules anytime. Your website is yours forever.

### 3. Better Customer Service

With a website, customers can:

- Find your location and hours instantly
- Browse your products/services anytime
- Contact you through multiple channels
- Read FAQs without calling you

### 4. Reach More Customers

90% of consumers search online before making a purchase. Without a website, you're invisible to these potential customers.

### 5. Compete with Bigger Businesses

A well-designed website levels the playing field. A small business can look just as professional as a large corporation.

### 6. 24/7 Sales Representative

Your website works while you sleep. Customers can learn about your business, see your work, and even make purchases at any time.

### 7. Valuable Business Insights

With analytics, you can learn:

- Where your visitors come from
- What they're interested in
- How they found you
- What makes them convert

### Ready to Get Started?

At Adaze Web Studio, we specialize in creating websites that actually grow your business. Start your project today.
        `),
    },
    {
        _type: 'post',
        _id: 'post-web-design-trends-2026',
        title: 'Top 10 Web Design Trends for 2026 You Need to Know',
        slug: { _type: 'slug', current: 'web-design-trends-2026' },
        author: { _type: 'reference', _ref: 'author-richard-adaze' },
        category: { _type: 'reference', _ref: 'category-tech-trends' },
        excerpt: "Stay ahead of the competition with these cutting-edge web design trends. From AI-powered experiences to sustainable design, discover what's shaping the future of websites.",
        tags: ['design trends', 'web design', '2026', 'innovation'],
        readTime: 6,
        featured: false,
        publishedAt: '2026-01-01T10:00:00Z',
        body: textToBlocks(`
## Web Design Trends Shaping 2026

The web design landscape is evolving rapidly. Here are the top trends we're implementing for our clients:

### 1. AI-Powered Personalization

Websites now adapt in real-time based on visitor behavior. AI analyzes user patterns to show relevant content, products, and recommendations.

### 2. Micro-Interactions

Small, delightful animations that respond to user actions. These tiny details make websites feel alive and engaging.

### 3. Dark Mode by Default

With most users preferring dark mode for reduced eye strain, many websites now default to dark themes with light mode as an option.

### 4. 3D Elements and Immersive Experiences

WebGL and Three.js enable stunning 3D graphics that run smoothly in browsers, creating memorable experiences.

### 5. Sustainable Web Design

Eco-friendly websites that minimize energy consumption through:

- Optimized images and code
- Green hosting
- Efficient animations

### 6. Voice User Interface (VUI)

With voice search growing, websites are optimizing for voice commands and screen-less interactions.

### 7. Glassmorphism Evolution

The frosted glass effect continues to evolve with more sophisticated blur effects and transparency layers.

### 8. Bold Typography

Large, expressive fonts that make statements. Typography is becoming a primary design element.

### 9. Scroll-Triggered Animations

Content that animates as you scroll, creating storytelling experiences that keep visitors engaged.

### 10. Accessibility First

Designing for everyone, including users with disabilities. This isn't just ethical—it's good for SEO too.

### Want a Trendy Website?

We implement these trends thoughtfully, ensuring your website is modern but timeless. Let's discuss your project.
        `),
    },
    {
        _type: 'post',
        _id: 'post-seo-basics-ghana',
        title: 'SEO Basics: How to Get Your Ghana Business Found on Google',
        slug: { _type: 'slug', current: 'seo-basics-small-business-ghana' },
        author: { _type: 'reference', _ref: 'author-richard-adaze' },
        category: { _type: 'reference', _ref: 'category-seo-marketing' },
        excerpt: 'Learn the fundamentals of SEO and start ranking your business on Google. This beginner-friendly guide covers everything from keywords to local SEO.',
        tags: ['SEO', 'google', 'marketing', 'beginners'],
        readTime: 5,
        featured: false,
        publishedAt: '2025-12-28T10:00:00Z',
        body: textToBlocks(`
## Getting Started with SEO for Your Ghana Business

SEO (Search Engine Optimization) is how you get your business found on Google. Here's a simple guide to get started:

### What is SEO?

SEO is the practice of optimizing your website so it appears higher in search results when people look for your products or services.

### Why SEO Matters

- 75% of users never scroll past the first page of Google
- SEO traffic is free (unlike paid ads)
- Higher rankings = more trust and credibility

### Basic SEO Tips

### 1. Keyword Research

Find what your customers are searching for:

- "web design Ho Ghana"
- "best restaurant in Accra"
- "plumber near me"

### 2. On-Page SEO

Optimize your pages:

- Use keywords in titles and headings
- Write helpful, detailed content
- Add alt text to images

### 3. Local SEO

For Ghana businesses:

- Create a Google Business Profile
- Add your business to local directories
- Include your city/region in keywords

### 4. Technical SEO

Make sure your site:

- Loads fast
- Works on mobile
- Has no broken links
- Uses HTTPS

### 5. Content is King

Create valuable content:

- Answer common questions
- Write how-to guides
- Share industry insights

### Need Help with SEO?

At Adaze Web Studio, all our websites come with basic SEO optimization. We also offer dedicated SEO services to help you rank higher. Contact us to learn more.
        `),
    },
]

// Main seed function
async function seed() {
    console.log('🌱 Starting seed process...\n')

    try {
        // Create author
        console.log('👤 Creating author...')
        await client.createOrReplace(author)
        console.log(`   ✓ Created: ${author.name}`)

        // Create categories
        console.log('\n📂 Creating categories...')
        for (const category of categories) {
            await client.createOrReplace(category)
            console.log(`   ✓ Created: ${category.title}`)
        }

        // Create posts
        console.log('\n📝 Creating blog posts...')
        for (const post of posts) {
            await client.createOrReplace(post)
            console.log(`   ✓ Created: ${post.title}`)
        }

        console.log('\n✅ Seed completed successfully!')
        console.log('\n📊 Summary:')
        console.log(`   - 1 Author`)
        console.log(`   - ${categories.length} Categories`)
        console.log(`   - ${posts.length} Blog Posts`)
        console.log('\n🔗 View your content at: https://adaze-blog.sanity.studio/')

    } catch (error) {
        console.error('\n❌ Seed failed:', error)
        process.exit(1)
    }
}

// Run the seed
seed()

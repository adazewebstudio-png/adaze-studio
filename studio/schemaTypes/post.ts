import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Important for SEO and accessibility.',
                },
            ],
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: { type: 'category' },
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3,
            description: 'A short summary for previews (displayed on blog cards)',
            validation: (Rule) => Rule.max(300),
        }),
        defineField({
            name: 'metaDescription',
            title: 'SEO Description',
            type: 'text',
            rows: 3,
            description: 'Specific description for social media sharing and Google search results. Best if kept under 160 characters.',
            validation: (Rule) => Rule.max(160),
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
        }),
        defineField({
            name: 'readTime',
            title: 'Read Time (minutes)',
            type: 'number',
            initialValue: 5,
        }),
        defineField({
            name: 'featured',
            title: 'Featured Post',
            type: 'boolean',
            initialValue: false,
            description: 'Show this post in the featured section',
        }),
        defineField({
            name: 'keyTakeaways',
            title: 'Key Takeaways (RAO)',
            type: 'array',
            of: [{ type: 'string' }],
            description: '3-5 bullet points summarizing the article for AI retrieval and quick reading.',
        }),
        defineField({
            name: 'faq',
            title: 'Frequently Asked Questions (AEO)',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'question', type: 'string', title: 'Question' },
                    { name: 'answer', type: 'text', title: 'Answer', rows: 3 }
                ]
            }],
            description: 'Q&A pairs to generate FAQ Schema for Answer Engines (Google SGE, Perplexity).',
        }),
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection
            return { ...selection, subtitle: author && `by ${author}` }
        },
    },
})

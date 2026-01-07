import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'category',
    title: 'Category',
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
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 2,
        }),
        defineField({
            name: 'color',
            title: 'Color',
            type: 'string',
            description: 'Tailwind color class (e.g., "blue", "emerald", "purple")',
            options: {
                list: [
                    { title: 'Blue', value: 'blue' },
                    { title: 'Emerald', value: 'emerald' },
                    { title: 'Purple', value: 'purple' },
                    { title: 'Amber', value: 'amber' },
                    { title: 'Rose', value: 'rose' },
                ],
            },
        }),
    ],
})

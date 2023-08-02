export default {
  name: 'home',
  title: 'Home Page',
  type: 'document',
  groups: [
    {
      name: 'info',
      title: 'Page Info',
    },
    {
      name: 'content',
      title: 'Page Content',
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'info',
      readOnly: true,
    },
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      group: 'content',
      fields: [
        {
          name: 'heading',
          title: 'Hero Heading',
          type: 'string',
          validation: (Rule) => Rule.required().max(60),
        },
        {
          name: 'text',
          title: 'Hero Text',
          type: 'text',
          validation: (Rule) => Rule.required().max(200),
        },
        {
          name: 'image',
          title: 'Hero Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'link',
          title: 'Link',
          type: 'link',
        },
      ],
    },
    {
      name: 'intro',
      title: 'Intro Section',
      type: 'highlightGrid',
      group: 'content',
    },
    {
      name: 'presentation',
      title: 'Presentation Section',
      type: 'object',
      group: 'content',
      fields: [
        {
          name: 'text',
          title: 'Section Text',
          type: 'text',
        },
        {
          name: 'sectionLink',
          title: 'Section Link',
          type: 'link',
        },
        {
          name: 'entries',
          title: 'Presentation Entries',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'entry',
              title: 'Presentation Entry',
              fields: [
                {
                  name: 'heading',
                  title: 'Entry Heading',
                  type: 'string',
                  validation: (Rule) => Rule.required().max(60),
                },
                {
                  name: 'text',
                  title: 'Entry Text',
                  type: 'text',
                  validation: (Rule) => Rule.required().max(160),
                },
                {
                  name: 'image',
                  title: 'Entry Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                    accept: 'image/*',
                  },
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'link',
                  title: 'Entry Link',
                  type: 'link',
                },
              ],
            },
          ],
          validation: (Rule) => Rule.max(3),
        },
      ],
    },
    {
      name: 'cta',
      title: 'Call to Action',
      type: 'cta',
      group: 'content',
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      description:
        'Write a short title that will set the HTML document title and display as the page title in search engine results.',
      type: 'string',
      // initialValue: ({document}) => document?.name,
      group: 'seo',
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      description:
        'Write a short description that will set the HTML document meta drescription and display as the page description in search engine results.',
      type: 'text',
      validation: (Rule) => Rule.max(200),
      group: 'seo',
    },
    {
      name: 'openGraph',
      title: 'Open Graph Metadata',
      description: 'Set metadata that will display as a preview on social media.',
      type: 'openGraph',
      group: 'seo',
    },
  ],
}

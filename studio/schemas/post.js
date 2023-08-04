export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  groups: [
    {name: 'content', title: 'Post Content'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Slug is generated from name and must be unique.',
      validation: (Rule) => Rule.required().error('Required field.'),
      options: {
        source: 'name',
      },
      group: 'content',
    },
    {
      name: 'publishDate',
      title: 'Publish Date',
      validation: (Rule) => Rule.required().error('Required field.'),
      type: 'date',
      group: 'content',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      validation: (Rule) => Rule.required().error('Required field.'),
      to: [{type: 'postType'}],
      group: 'content',
    },
    {
      name: 'image',
      title: 'Featured Image',
      description:
        'Upload an image of the best possible resolution quality (suggested minimum 1000 px wide) while remaining under 8 MB in size. Once uploaded, visit the Media tab to add alternative text and media tags to the image.',
      type: 'image',
      options: {
        hotspot: true,
        accept: 'image/*',
      },
      group: 'content',
    },
    {
      name: 'preview',
      title: 'Preview Text',
      type: 'text',
      description: 'Short description that shows as preview on post cards.',
      validation: (Rule) => [
        Rule.required().error('Required field.'),
        Rule.max(120).warning('It is best to keep this text to under 120 characters.'),
      ],
      group: 'content',
    },
    {
      name: 'content',
      title: 'Rich Content',
      type: 'richContent',
      group: 'content',
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

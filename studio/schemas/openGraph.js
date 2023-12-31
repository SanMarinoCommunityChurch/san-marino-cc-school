export default {
  name: 'openGraph',
  title: 'Open Graph Metadata',
  description: 'Set metadata that will display as a preview on social media.',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description:
        'Different from the SEO title, the Open Graph title acts more like a headline for the page content.',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Optional description of page content.',
      type: 'text',
      validation: (Rule) =>
        Rule.max(200).warning('It is best to keep this text under 200 characters.'),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}

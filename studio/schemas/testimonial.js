export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title for backend organization only.',
      type: 'string',
    },
    {
      name: 'preview',
      title: 'Preview',
      description: 'Short preview of the testimonial for home page grid.',
      type: 'text',
      validation: (Rule) => Rule.required().max(200).error('Keep this text under 200 characters.'),
    },
    {
      name: 'content',
      title: 'Testimonial Content',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'attribution',
      title: 'Attribution',
      description: 'Name of the parent or person providing testimonial.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
}

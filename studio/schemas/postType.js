export default {
  name: 'postType',
  title: 'Post Type',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
      },
    },
    {
      name: 'text',
      title: 'Description Text',
      description: 'A brief overview of this post type, which will display on its category page.',
      type: 'text',
      validation: (Rule) => Rule.max(200).error('Keep this text under 200 characters.'),
    },
  ],
}

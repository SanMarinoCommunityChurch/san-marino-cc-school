export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Gallery Heading',
      type: 'string',
      validation: (Rule) =>
        Rule.max(60).warning('It is best to keep this text under 60 characters.'),
    },
    {
      name: 'text',
      title: 'Gallery Text',
      type: 'text',
      validation: (Rule) =>
        Rule.max(200).warning('It is best to keep this text under 200 characters.'),
    },
    {
      name: 'galleryItems',
      title: 'Gallery Items',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    },
  ],
  preview: {
    select: {
      title: 'heading',
      image: 'galleryItems.0.image',
    },
    prepare(selection) {
      const {title, image} = selection
      return {
        title: title || 'Gallery',
        subtitle: 'Gallery Section',
        media: image,
      }
    },
  },
}

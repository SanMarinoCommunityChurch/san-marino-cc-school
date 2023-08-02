export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Gallery Heading',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Gallery Text',
      type: 'text',
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

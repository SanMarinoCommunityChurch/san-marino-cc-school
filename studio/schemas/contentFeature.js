export default {
  name: 'feature',
  title: 'Content Feature',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Feature Title',
      description: 'Short title under 60 characters.',
      type: 'string',
      validation: (Rule) => Rule.required().max(60),
    },
    {
      name: 'description',
      title: 'Feature Description',
      description: 'Preview text under 300 characters.',
      type: 'text',
      validaton: (Rule) => Rule.required().max(300),
    },
    {
      name: 'link',
      title: 'Link',
      type: 'link',
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      description:
        'Upload an image of the best possible resolution quality (suggested minimum 1000 px wide) while remaining under 8 MB in size. Once uploaded, visit the Media tab to add alternative text and media tags to the image.',
      type: 'image',
      validation: Rule => Rule.required(),
      options: {
        hotspot: true,
        accept: 'image/*',
      },
    },
  ],
  preview: {
    prepare() {
        return {
            title: 'Preview Feature'
        }
    }
  }
}
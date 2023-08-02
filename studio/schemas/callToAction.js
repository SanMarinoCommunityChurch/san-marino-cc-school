export default {
  name: 'cta',
  title: 'Call to Action',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'link',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'accent',
      title: 'Accent Color',
      type: 'string',
      options: {
        list: [
          {title: 'Brand Light Blue', value: 'brand-light'},
          {title: 'Brand Dark Blue', value: 'brand-dark'},
          {title: 'Accent Red', value: 'accent-red'},
          {title: 'Accent Yellow', value: 'accent-yellow'},
        ],
      },
    },
    {
      name: 'image',
      title: 'Featured Image',
      description:
        'Upload an image of the best possible resolution quality (suggested minimum 1000 px wide) while remaining under 8 MB in size. Once uploaded, visit the Media tab to add alternative text and media tags to the image.',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
        accept: 'image/*',
      },
    },
  ],
  preview: {
    select: {
      title: 'heading',
      image: 'image',
    },
    prepare(selection) {
      const {title, image} = selection
      return {
        title: title,
        subtitle: 'Call to Action',
        media: image,
      }
    },
  },
}

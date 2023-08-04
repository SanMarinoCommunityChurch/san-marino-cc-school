export default {
  name: 'richContent',
  title: 'Rich Content',
  description:
    'Rich content is a general field for adding structured content of various types, i.e., headings, lists, images, and videos. Styling and formatting is handled on the front-end.',
  type: 'object',
  fields: [
    {
      name: 'content',
      title: 'Rich Content Blocks',
      // description: 'Rich content is a general field for adding structured content of various types, i.e., headings, lists, images, and videos. Styling and formatting is handled on the front-end.',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
          ],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
            ],
          },
        },
        {
          type: 'image',
        },
        {
          type: 'youtube',
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Rich Content Block',
      }
    },
  },
}

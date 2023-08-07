import {HiDocument} from 'react-icons/hi2'

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
            annotations: [
              {
                name: 'link',
                title: 'External Link',
                type: 'object',
                fields: [{name: 'url', type: 'url'}],
              },
              {
                name: 'internalLink',
                title: 'Internal Link',
                type: 'object',
                icon: HiDocument,
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    options: {
                      disableNew: true,
                    },
                    to: [{type: 'page'}],
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          type: 'youtube',
        },
        {
          type: 'table',
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

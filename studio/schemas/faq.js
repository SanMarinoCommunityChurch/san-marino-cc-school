export default {
  name: 'faq',
  title: 'FAQ Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'FAQ Section Heading',
      type: 'string',
    },
    {
      name: 'text',
      title: 'FAQ Section Text',
      type: 'text',
    },
    {
      name: 'faqItems',
      title: 'FAQ Items',
      type: 'array',
      of: [
        {
          name: 'faqItem',
          title: 'FAQ Item',
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [{title: 'Normal', value: 'normal'}],
                  marks: {
                    decorators: [
                      {title: 'Bold', value: 'strong'},
                      {title: 'Italic', value: 'em'},
                    ],
                  },
                },
              ],
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare(selection) {
      const {title, image} = selection
      return {
        title: title || 'FAQ',
        subtitle: 'FAQ Section',
      }
    },
  },
}

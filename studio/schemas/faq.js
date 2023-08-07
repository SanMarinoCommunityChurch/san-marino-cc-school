export default {
  name: 'faq',
  title: 'FAQ Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'FAQ Section Heading',
      description: 'Optional heading for the FAQ section.',
      type: 'string',
      validation: (Rule) =>
        Rule.max(60).warning('It is best to keep this text under 60 characters.'),
    },
    {
      name: 'text',
      title: 'FAQ Section Text',
      description: 'Optional text for the FAQ section.',
      type: 'text',
      validation: (Rule) =>
        Rule.max(200).warning('It is best to keep this text under 200 characters.'),
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

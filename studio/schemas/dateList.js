export default {
  name: 'dateList',
  title: 'Date List',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.max(100).error('Keep this text under 100 characters.'),
    },
    {
      name: 'text',
      title: 'Description',
      type: 'text',
      validation: (Rule) =>
        Rule.max(200).warning('It is best to keep this text under 200 characters.'),
    },
    {
      name: 'entries',
      title: 'List Entries',
      type: 'array',
      of: [
        {
          name: 'entry',
          title: 'List Entry',
          type: 'object',
          fields: [
            {
              name: 'date',
              title: 'Date',
              type: 'date',
            },
            {
              name: 'range',
              title: 'Include Range?',
              type: 'boolean',
              initialValue: false,
            },
            {
              name: 'endDate',
              title: 'End Date',
              type: 'date',
              hidden: ({parent}) => parent?.range == false,
            },
            {
              name: 'heading',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'parentAndFamily',
              title: 'Parent and Family Event?',
              type: 'boolean',
              initialValue: false,
            },
            {
              name: 'text',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'link',
              title: 'Link',
              type: 'link',
            },
          ],
          preview: {
            select: {
              title: 'heading',
              date: 'date',
            },
            prepare(selection) {
              const {title, date} = selection
              return {
                title: date,
                subtitle: title,
              }
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
        subtitle: 'Date List',
      }
    },
  },
}

export default {
  name: 'table',
  title: 'Table',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Table Title',
      description: 'Optional table title.',
      type: 'string',
    },
    {
      name: 'rows',
      title: 'Row',
      type: 'array',
      of: [
        {
          name: 'columns',
          title: 'Column',
          type: 'object',
          fields: [
            {
              name: 'item',
              title: 'Column Item',
              type: 'array',
              of: [
                {
                  type: 'string',
                },
              ],
            },
            {
              name: 'header',
              title: 'Header row?',
              type: 'boolean',
              initialValue: false,
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title ? `${title} Table` : 'Table',
      }
    },
  },
}

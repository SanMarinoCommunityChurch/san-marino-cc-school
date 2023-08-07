export default {
  name: 'highlightGrid',
  title: 'Highlight Grid',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Section Heading',
      description: 'Optional heading for the grid section.',
      type: 'string',
      validation: (Rule) =>
        Rule.max(60).warning('It is best to keep this text under 60 characters.'),
    },
    {
      name: 'text',
      title: 'Section Text',
      description: 'Optional text for the grid section.',
      type: 'text',
      validation: (Rule) =>
        Rule.max(200).warning('It is best to keep this text under 200 characters.'),
    },
    {
      name: 'items',
      title: 'Grid Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'gridItem',
          title: 'Grid Item',
          fields: [
            {
              name: 'heading',
              title: 'Grid Item Heading',
              type: 'string',
              validation: (Rule) =>
                Rule.required().max(60).error('Keep this text under 60 characters.'),
            },
            {
              name: 'text',
              title: 'Grid Item Text',
              type: 'text',
              validation: (Rule) =>
                Rule.required().max(200).error('Keep this text under 200 characters.'),
            },
            {
              name: 'link',
              title: 'Grid Item Link',
              description: 'Optional link.',
              type: 'link',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.min(3),
    },
  ],
  preview: {
    select: {
      title: 'heading',
      gridItem: 'items.0.heading',
    },
    prepare(selection) {
      const {title, gridItem} = selection
      return {
        title: title || gridItem,
        subtitle: 'Highlight Grid',
      }
    },
  },
}

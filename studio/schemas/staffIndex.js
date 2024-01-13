export default {
  name: 'staffIndex',
  title: 'Staff Gallery',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Section Title',
      description: 'Optional section title.',
      type: 'string',
    },
    {
      name: 'entries',
      title: 'Staff Entries',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'staffMember'}]}],
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: 'Staff Gallery',
        subtitle: title,
      }
    },
  },
}

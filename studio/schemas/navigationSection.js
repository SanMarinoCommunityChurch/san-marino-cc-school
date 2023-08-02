export default {
  name: 'navigationSection',
  title: 'Navigation Section',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Section Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'pages',
      title: 'Pages',
      type: 'array',
      of: [{type: 'link'}],
    },
  ],
}

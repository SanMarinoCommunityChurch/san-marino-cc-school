export default {
  name: 'navigation',
  title: 'Site Navigation',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'entries',
      title: 'Entries',
      type: 'array',
      of: [{type: 'navigationSection'}, {type: 'link'}],
    },
  ],
}

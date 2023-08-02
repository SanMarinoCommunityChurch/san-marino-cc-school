export default {
  name: 'blueprint1',
  title: 'Blueprint 1',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Featured Image',
      type: 'image',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}

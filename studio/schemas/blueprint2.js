export default {
  name: 'blueprint2',
  title: 'Blueprint 2',
  type: 'object',
  fields: [
    {
      name: 'header',
      title: 'Header',
      type: 'string',
    },
    {
      name: 'links',
      title: 'Links',
      type: 'object',
      fields: [
        {
          name: 'href',
          title: 'Link href',
          type: 'string',
        },
        {
          name: 'name',
          title: 'Link name',
          type: 'string',
        },
      ],
    },
  ],
}

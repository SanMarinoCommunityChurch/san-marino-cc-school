export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    {
      name: 'global',
      title: 'Global Settings',
    },
    {
      name: 'info',
      title: 'School Info',
    },
    {
      name: 'seo',
      title: 'Site SEO',
    },
  ],
  fields: [
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      group: 'seo',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        accept: 'image/svg+xml,image/png',
      },
      group: 'global',
    },
  ],
}

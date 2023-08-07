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
      description: 'Site name for SEO.',
      type: 'string',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'siteDescription',
      title: 'Site Description',
      description: 'Site description for SEO.',
      type: 'text',
      group: 'seo',
      validation: (Rule) =>
        Rule.max(160).warning('It is best to keep this text under 160 characters.'),
    },
    {
      name: 'defaultOgImage',
      title: 'Default Open Graph Image',
      description:
        "Default image fallback used for pages that don't have an Open Graph image set that will show as a preview on social media.",
      type: 'image',
      validation: (Rule) => Rule.required(),
      group: 'seo',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        accept: 'image/svg+xml,image/png',
      },
      group: 'global',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'siteHeader',
      title: 'Main Header Link',
      type: 'object',
      group: 'global',
      fields: [
        {
          name: 'name',
          title: 'Link Name',
          type: 'string',
        },
        {
          name: 'href',
          title: 'Links To',
          type: 'url',
        },
      ],
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      group: 'global',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'icon',
              title: 'Icon',
              description:
                'Link icon from Font Awesome set (https://fontawesome.com). Must match exact name of Font Awesome icon, e.g., "arrow-right".',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            },
          ],
        },
      ],
    },
  ],
}

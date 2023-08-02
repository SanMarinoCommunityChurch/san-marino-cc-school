import CustomSlugInput from '../components/custom-slug.jsx'
import {SlugInput} from 'sanity-plugin-prefixed-slug'

// Limit section slugs to predefined strings
// Separate slugs out from navigation
// Gives me control to ensure the proper site structure while
// giving them the ability to change nav and add pages
const SECTION_SLUGS = [
  {title: 'About', value: 'about'},
  {title: 'Programs', value: 'programs'},
  {title: 'Enrollment', value: 'enrollment'},
  {title: 'Community', value: 'community'},
]

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  groups: [
    {
      name: 'info',
      title: 'Page Info',
      default: true,
    },
    {
      name: 'content',
      title: 'Page Content',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'info',
    },
    {
      name: 'sectionSlug',
      title: 'Section',
      type: 'string',
      options: {
        list: SECTION_SLUGS,
        layout: 'dropdown',
      },
      group: 'info',
    },
    {
      name: 'slug',
      title: 'URL Path',
      type: 'slug',
      group: 'info',
      description: 'On the live site, this page will be found at the following URL path:',
      validation: (Rule) => Rule.required(),
      components: {input: SlugInput},
      options: {
        source: 'name',
        urlPrefix: (document) => document.sectionSlug,
        maxLength: 100,
        storeFullUrl: true,
      },
    },
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      readOnly: true,
      group: 'info',
    },
    {
      name: 'description',
      title: 'Header Text',
      type: 'text',
      description:
        'The text that displays in the page header area and serves to give a brief overview and introduction to the page.',
      group: 'content',
    },
    // {
    //   name: 'image',
    //   title: 'Featured Image',
    //   description:
    //     'Set the image to display as the page header background and to use for SEO if no Open Graph image is set.',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    //   group: 'content',
    // },
    {
      name: 'contentSections',
      title: 'Content Sections',
      type: 'array',
      of: [
        {
          type: 'introSections',
        },
        {
          type: 'contentFeatures',
        },
        {
          type: 'highlightGrid',
        },
        {
          type: 'faq',
        },
        {
          type: 'gallery',
        },
        {
          type: 'richContent',
        },
        {
          type: 'cta',
        },
      ],
      group: 'content',
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      description:
        'Write a short title that will set the HTML document title and display as the page title in search engine results.',
      type: 'string',
      // initialValue: ({document}) => document?.name,
      group: 'seo',
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      description:
        'Write a short description that will set the HTML document meta drescription and display as the page description in search engine results.',
      type: 'text',
      validation: (Rule) => Rule.max(200),
      group: 'seo',
    },
    {
      name: 'openGraph',
      title: 'Open Graph Metadata',
      description: 'Set metadata that will display as a preview on social media.',
      type: 'openGraph',
      group: 'seo',
    },
  ],
  preview: {
    select: {
      name: 'name',
      slug: 'slug',
      section: 'sectionSlug',
    },
    prepare: ({name, slug, section}) => {
      const sectionName =
        section &&
        SECTION_SLUGS.flatMap((option) => (option.value === section ? [option.title] : []))
      return {
        title: name,
        subtitle: section ? `${sectionName}` : '',
      }
    },
  },
}

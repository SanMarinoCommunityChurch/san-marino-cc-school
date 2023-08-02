import {defineConfig} from 'sanity'
import {media} from 'sanity-plugin-media'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {dashboardTool} from '@sanity/dashboard'
import {dashboardWelcomeWidget} from './widgets/dashboardWelcome'
import {documentListWidget} from 'sanity-plugin-dashboard-widget-document-list'
import {netlifyTool} from 'sanity-plugin-netlify'

import {schemaTypes} from './schemas'
import {deskStructure} from './deskStructure'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['siteSettings', 'home', 'navigation'])

export default defineConfig({
  name: 'default',
  title: 'San Marino Community Church Nursery School',

  projectId: 'rnhp93wy',
  dataset: 'production',

  plugins: [
    dashboardTool({
      widgets: [
        dashboardWelcomeWidget({
          layout: {width: 'large'},
        }),
        documentListWidget({
          title: 'Last edited items',
          order: '_updatedAt desc',
          types: ['page', 'testimonial'],
          layout: {width: 'regular'},
        }),
        documentListWidget({
          title: 'Currently drafting (changes not published)',
          query: '*[(_id in path("drafts.**"))]',
          layout: {width: 'regular'},
        }),
      ],
    }),
    deskTool({structure: deskStructure}),
    media(),
    netlifyTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
})

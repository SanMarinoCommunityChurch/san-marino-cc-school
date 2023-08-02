import {HiCog, HiCube, HiDocument, HiHome, HiUsers} from 'react-icons/hi2'

export const deskStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Dynamic Content Collections')
        .icon(HiCube)
        .child(
          S.list()
            .title('Dynamic Content')
            .items([
              //move dynamic content here
              S.listItem()
                .title('Testimonials')
                .icon(HiUsers)
                .child(S.documentTypeList('testimonial').title('All Testimonials')),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Pages')
        .icon(HiDocument)
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home Page (Unique)')
                .id('home')
                .icon(HiHome)
                .child(S.document().schemaType('home').documentId('home')),
              S.listItem()
                .title('All Other Pages')
                .icon(HiDocument)
                .child(S.documentTypeList('page').title('All Pages')),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Global Site Settings')
        .id('siteSettings')
        .icon(HiCog)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
    ])

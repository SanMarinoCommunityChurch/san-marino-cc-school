import {
  HiCog,
  HiCube,
  HiBars3,
  HiDocument,
  HiHome,
  HiSquares2X2,
  HiTag,
  HiUsers,
} from 'react-icons/hi2'

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
              S.listItem()
                .title('News Posts')
                .icon(HiSquares2X2)
                .child(
                  S.list()
                    .title('News Posts')
                    .items([
                      S.listItem()
                        .title('All Posts')
                        .icon(HiSquares2X2)
                        .child(S.documentTypeList('post').title('All Posts')),
                      S.listItem()
                        .title('Post Types')
                        .icon(HiTag)
                        .child(S.documentTypeList('postType').title('PostTypes')),
                    ])
                ),
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
              S.listItem().title('Home Page (Unique)').icon('home').icon(HiHome).child(
                // update to unique schema page
                S.document().schemaType('home').documentId('a69ca42e-4a27-4bc1-aa42-9fec76edde27')
              ),
              S.listItem()
                .title('All Other Pages')
                .icon(HiDocument)
                .child(S.documentTypeList('page').title('All Pages')),
            ])
        ),
      S.listItem()
        .title('Site Navigation')
        .icon(HiBars3)
        .child(S.documentTypeList('navigation').title('Navigation')),
      S.divider(),
      S.listItem()
        .title('Global Site Settings')
        .id('siteSettings')
        .icon(HiCog)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
    ])

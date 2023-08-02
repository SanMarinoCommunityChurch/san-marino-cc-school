export default {
    name: 'link',
    title: 'Link',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Link Name',
            description: 'If using page references, leaving this blank will default to the page name. Otherwise setting this field overrides the page name.',
            type: 'string'
        },
        {
            name: 'href',
            title: 'Links to',
            type: 'array',
            of: [
                {
                    name: 'pageRef',
                    title: 'Page Reference',
                    type: 'reference',
                    to: [{type: 'page'}],
                    options: {disableNew: true}
                },
                {
                    name: 'slugString',
                    title: 'Relative Path URL String',
                    description: 'Any URL relative to the root page, i.e. "about/history".',
                    type: 'object',
                    fields: [
                        {
                            name: 'slug',
                            title: 'Slug',
                            description: 'Any URL relative to the root page, i.e. "about/history".',
                            type: 'string'
                        }
                    ]
                },
                {
                    name: 'externalLink',
                    title: 'External Link',
                    description: 'A valid full URL for any external link.',
                    type: 'object',
                    fields: [
                        {
                            name: 'url',
                            title: 'URL',
                            description: 'A valid full URL for any external link.',
                            type: 'url'
                        }
                    ]
                }
            ],
            validation: Rule => Rule.required().max(1),
        }
    ],
    preview: {
        select: {
            linkName: 'name',
            pageName: 'href.0.name'
        },
        prepare(selection) {
            const { linkName, pageName } = selection;
            return {
                title: pageName || linkName
            }
        }
    }
}
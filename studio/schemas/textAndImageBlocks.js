export default {
    name: 'introSections',
    title: 'Text and Media Blocks',
    type: 'object',
    fields: [
        {
            name: 'heading',
            title: 'Section Heading',
            description: 'Optional heading for the content feature section.',
            type: 'string'
        },
        {
            name: 'text',
            title: 'Section Text',
            description: 'Optional text for the content feature section.',
            type: 'text'
        },
        {
            name: 'introSections',
            title: 'Text and Media Block Items',
            type: 'array',
            of: [{type: 'introSection'}]
        }
    ],
    preview: {
    select: {
        title: 'heading',
        image: 'introSections.0.image',
        featureItem: 'introSections.0.heading'
    },
    prepare(selection) {
        const { title, featureItem, image } = selection;
        return {
            title: title || featureItem,
            subtitle: 'Text and Image Blocks',
            media: image || undefined
        }
    }
  }
}
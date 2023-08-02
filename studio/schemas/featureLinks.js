export default {
    name: 'contentFeatures',
    title: 'Feature Links',
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
            name: 'featureItems',
            title: 'Feature Items',
            type: 'array',
            of: [{type: 'feature'}]
        }
    ],
    preview: {
    select: {
        title: 'heading',
        image: 'featureItems.0.image',
        featureItem: 'featureItems.0.title'
    },
    prepare(selection) {
        const { title, featureItem, image } = selection;
        return {
            title: title || featureItem,
            subtitle: 'Feature Links',
            media: image
        }
    }
  }
}
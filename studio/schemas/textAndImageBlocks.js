export default {
  name: 'introSections',
  title: 'Text and Media Blocks',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Section Heading',
      description: 'Optional heading for the content feature section.',
      type: 'string',
      validation: (Rule) =>
        Rule.max(60).warning('It is best to keep this text under 60 characters.'),
    },
    {
      name: 'text',
      title: 'Section Text',
      description: 'Optional text for the content feature section.',
      type: 'text',
      validation: (Rule) =>
        Rule.max(200).warning('It is best to keep this text under 200 characters.'),
    },
    {
      name: 'introSections',
      title: 'Text and Media Block Items',
      type: 'array',
      of: [{type: 'introSection'}],
    },
  ],
  preview: {
    select: {
      title: 'heading',
      image: 'introSections.0.image',
      featureItem: 'introSections.0.heading',
    },
    prepare(selection) {
      const {title, featureItem, image} = selection
      return {
        title: title || featureItem,
        subtitle: 'Text and Image Blocks',
        media: image || undefined,
      }
    },
  },
}

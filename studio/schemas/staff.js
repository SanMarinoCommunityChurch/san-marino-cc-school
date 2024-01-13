export default {
  name: 'staffMember',
  title: 'Staff Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validaton: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Headshot Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'isDirector',
      title: 'Is Director?',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'richContent',
      hidden: ({document}) => document?.isDirector === false,
    },
  ],
  preview: {
    select: {
      name: 'name',
      title: 'title',
      image: 'image',
    },
    prepare({name, title, image}) {
      return {
        title: name,
        subtitle: title,
        media: image,
      }
    },
  },
}

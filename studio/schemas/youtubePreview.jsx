import {VideoPreview} from '../components/VideoPreview.jsx'

export default {
  name: 'youtube',
  title: 'YouTube Embed',
  type: 'object',
  fields: [
    {
      name: 'url',
      title: 'Video Link',
      type: 'url',
      description: 'Enter the share URL of the YouTube video',
      validation: (Rule) => Rule.required().error('Required field.'),
      components: {input: VideoPreview},
    },
  ],
}
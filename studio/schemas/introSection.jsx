import {VideoThumbnail} from '../components/VideoPreview'
import getYouTubeID from 'get-youtube-id'

export default {
  name: 'introSection',
  title: 'Text and Media Block',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Text and Media Block Heading',
      description: 'Optional heading text.',
      type: 'string',
      validation: (Rule) => Rule.max(60).error('Keep this text under 60 characters.'),
    },
    {
      name: 'previewText',
      title: 'Text and Media Block Text',
      description: 'Provide a short description to accompany the image or video.',
      type: 'text',
      validation: (Rule) => Rule.max(300).error('Keep this text under 300 characters.'),
    },
    {
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'image',
      options: {
        list: [
          {title: 'Image', value: 'image'},
          {title: 'Video', value: 'video'},
        ],
      },
    },
    {
      name: 'video',
      title: 'Video',
      type: 'youtube',
      hidden: ({parent}) => parent?.mediaType == 'image',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description:
        'Upload an image of the best possible resolution quality (suggested minimum 1000 px wide) while remaining under 8 MB in size. Once uploaded, visit the Media tab to add alternative text and media tags to the image.',
      hidden: ({parent}) => parent?.mediaType == 'video',
      options: {
        hotspot: true,
        accept: 'image/*',
      },
    },
  ],
  preview: {
    select: {
      title: 'heading',
      image: 'image',
      video: 'video',
    },
    prepare(selection) {
      const {title, image, video} = selection
      const playEmoji = '▶️'
      let videoThumbnailID
      videoThumbnailID = video && getYouTubeID(video.url)
      return {
        title: title || 'Block',
        subtitle: 'Text and Image Block',
        media: image ? (
          image
        ) : video ? (
          <VideoThumbnail id={videoThumbnailID} />
        ) : (
          <span>{playEmoji}</span>
        ),
      }
    },
  },
}

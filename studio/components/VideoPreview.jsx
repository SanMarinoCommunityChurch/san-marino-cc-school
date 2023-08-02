import React from 'react'
import getYouTubeID from 'get-youtube-id'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const VideoPreview = (props) => {
  const {value, renderDefault} = props
  const id = getYouTubeID(value)
  return (
    <div>
      {renderDefault({...props})}
      <LiteYouTubeEmbed title="YouTube Embed" id={id} />
    </div>
  )
}

const VideoThumbnail = ({id}) => {
  const url = `https://img.youtube.com/vi/${id}/mqdefault.jpg`
  return <img src={url} alt="" />
}

export {VideoPreview, VideoThumbnail}
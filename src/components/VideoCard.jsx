import React from 'react'

const VideoCard = ({info}) => {
  const {snippet,statistics} = info
  const {channelTitle,title,thumbnails} = snippet;

  return (
   <div className="m-2 w-72 shadow-lg hover:cursor-pointer hover:border-blue-500 hover:border-1 hover:rounded-lg">
      <img className="rounded-tl-lg rounded-tr-lg" alt="thumbnail" src={thumbnails.high.url} />
      <ul className='rounded-bl-lg rounded-br-lg p-2'>
        <li className="font-bold py-2">{channelTitle}</li>
        <li className='truncate'>{title}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
}

export const AdVideoCard = ({info}) =>{
   return (
     <div className='border-2 border-red-500'>
        <VideoCard info={info} />
     </div>
   )
}

export default VideoCard
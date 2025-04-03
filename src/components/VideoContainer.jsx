import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from './utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'


const VideoContainer = () => {
    const [videos, setVideos] = useState([])
    const getYoutubeVideos = async() =>{
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        // console.log(json.items)
        setVideos(json.items)
    }
    useEffect(() => {
       getYoutubeVideos()
    }, [])
    
  return (
    <div className='flex flex-wrap justify-center'>
        {
          videos.map(v => ( 
            <Link to={"/watch?="+v.id} key={v.id}>
              <VideoCard info={v} />
            </Link>
          ) )
        }
    </div>
  )
}

export default VideoContainer
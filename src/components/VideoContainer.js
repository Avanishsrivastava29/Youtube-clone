import React, { useEffect, useState } from 'react'
import { YOUTUBE_MOST_POPULAR_VIDEOS_API } from '../config/api';
import VideoCard from './VideoCard';

const VideoContainer = () => {
const [videos,setVideos]=useState([])

  useEffect(()=>{
    getVideos();

  },[])

  const getVideos= async()=>{
    const data = await fetch(YOUTUBE_MOST_POPULAR_VIDEOS_API);
    const  json =await data.json();
    setVideos(json.items
      )
  }
  return (
    <div
    className='flex flex-wrap'>{videos.map((video)=>(
      <VideoCard key={video.id} info={video}
      />
    ))}</div>
  )
}

export default VideoContainer
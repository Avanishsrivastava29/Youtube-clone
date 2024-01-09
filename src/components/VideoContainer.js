import React, { useEffect, useState } from "react";
import { YOUTUBE_MOST_POPULAR_VIDEOS_API } from "../config/api";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const VideoContainer = ({
  videos,
  setVideos,
  filterVideos,
  setFilterVideos,
}) => {
  //const [videos,setVideos]=useState([])

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_MOST_POPULAR_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
    // console.log(json.items[0].snippet.channelTitle);
    setFilterVideos(json.items);
  };
  return (
    <div className="flex flex-wrap items-center justify-center">
      {filterVideos.map((videos) => (
        <Link to={"/watch?v=" + videos.id} key={videos.id}>
          <VideoCard key={videos.id} info={videos} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="items-center justify-center w-[300px] p-2 mx-2 md:w-72 shadow-lg ">
      <img
        className="   rounded-lg  md:px-0"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <ul>
        <li className="font-bold py-2 text-[10px] md:text-sm">{title}</li>
        <li className="text-[10px] md:text-sm">{channelTitle}</li>
        <li className="text-[10px] md:text-sm">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;

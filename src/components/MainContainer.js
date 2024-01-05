import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useOutletContext } from "react-router-dom";

const MainContainer = () => {
  const [videos, setVideos, filterVideos, setFilterVideos] = useOutletContext();
  return (
    <>
      <div className="col-span-10">
        <ButtonList />
        <VideoContainer
          {...{ videos, setVideos, filterVideos, setFilterVideos }}
        />
      </div>
    </>
  );
};

export default MainContainer;

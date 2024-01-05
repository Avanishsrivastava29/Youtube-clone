import React from "react";
import Sidebar from "./Sidebar";

import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import Head from "./Head";
import { useState } from "react";

const Body = () => {
  const [videos, setVideos] = useState([]);
  const [filterVideos, setFilterVideos] = useState(videos);

  return (
    <>
      <Head
        {...{
          videos,
          setVideos,
          filterVideos,
          setFilterVideos,
        }}
      />
      <div className="flex">
        <Sidebar />

        <Outlet context={[videos, setVideos, filterVideos, setFilterVideos]} />
      </div>
    </>
  );
};

export default Body;

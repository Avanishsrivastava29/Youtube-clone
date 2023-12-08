import React from 'react'
import homeIcon from "../assets/home.png"
import shortIcon from "../assets/video.png"
import subsIcon from "../assets/subscription.png"
import trendingIcon from "../assets/trending.png"
import movieIcon from "../assets/clapperboard.png"
import musicIcon from "../assets/musical-note.png"
import newsIcon from "../assets/newspaper.png"
import shopIcon from "../assets/bag.png";
import gamingIcon from "../assets/console.png"
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen =useSelector(store=>store.app.isMenuOpen);
  if(!isMenuOpen)
  return null;
  return (
    <div className="w-48 shadow-lg pl-4 h-auto absolute z-30 bg-white pb-2">
    <div className="flex flex-col gap-3 pt-5">
      <div className="flex justify-start items-center gap-5 hover:bg-gray-300 hover:border hover:rounded-lg hover:w-40 cursor-pointer p-2">
        <img src={homeIcon} alt="home-icon" className="w-5" />
        <h1 className="font-bold">Home</h1>
      </div>

      <div className="flex justify-start items-center gap-5 hover:bg-gray-300 hover:border hover:rounded-lg hover:w-40 cursor-pointer p-2">
        <img src={shortIcon} alt="shorts-icon" className="w-5" />
        <h1 className="font-bold">Shorts</h1>
      </div>

      <div className="flex justify-start items-center gap-5 hover:bg-gray-300 hover:border hover:rounded-lg hover:w-40 cursor-pointer p-2">
        <img src={subsIcon} alt="live-icon" className="w-5" />
        <h1 className="font-bold">Live</h1>
      </div>

       

      <div className="h-0.5 flex justify-center items-center bg-gray-600 w-5/6"></div>

        <div  >
        <div className="flex justify-start items-center gap-5 pb-3">
     
          <h1 className="font-bold ">Explore</h1>
        </div>

        <div>
          <ul className="flex flex-col gap-1.5">
            <div className="flex justify-start items-center gap-5 hover:bg-gray-300 hover:border hover:rounded-lg hover:w-40 cursor-pointer p-2">
              <img src={trendingIcon} alt="trending-icon" className="w-5" />
              <li>Trending</li>
            </div>
            <div className="flex justify-start items-center gap-5 hover:bg-gray-300 hover:border hover:rounded-lg hover:w-40 cursor-pointer p-2">
              <img src={shopIcon} alt="trending-icon" className="w-5" />
              <li>shoping</li>
            </div>

            <div className="flex justify-start items-center gap-5 hover:bg-gray-300 hover:border hover:rounded-lg hover:w-40 cursor-pointer p-2">
              <img src={musicIcon} alt="music-icon" className="w-5" />
              <li>Music</li>
            </div>

            <div className="flex justify-start items-center gap-5 hover:bg-gray-300 hover:border hover:rounded-lg hover:w-40 cursor-pointer p-2">
              <img src={movieIcon} alt="movie-icon" className="w-5" />
              <li>Movies</li>
            </div>

            <div className="flex justify-start items-center gap-5 hover:bg-gray-300 hover:border hover:rounded-lg hover:w-40 cursor-pointer p-2">
              <img src={gamingIcon} alt="gaming-icon" className="w-5" />
              <li>Gaming</li>
            </div>

            <div className="flex justify-start items-center gap-5 hover:bg-gray-300 hover:border hover:rounded-lg hover:w-40 cursor-pointer p-2">
              <img src={newsIcon} alt="news-icon" className="w-5" />
              <li>News</li>
            </div>
          </ul>
        </div>
      </div>

       
    </div>
  </div>
         
         
    
   
       
  
  )
}

export default Sidebar
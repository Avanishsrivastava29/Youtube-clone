import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../config/api";
import { cacheResults } from "../utils/searchslice";
import { Link } from "react-router-dom";

const Head = ({ videos, setVideos, filterVideos, setFilterVideos }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const handleSearch = (query) => {
    // const query = e.target.value;
    // console.log(query);
    setSearchQuery(query);

    const filterData = videos.filter((items) =>
      items?.snippet?.title.toLowerCase()?.includes(query.toLowerCase())
    );

    // console.log(filterData);

    setFilterVideos(filterData);
  };

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (searchCache[searchQuery]) {
          setSuggestions(searchCache[searchQuery]);
        } else {
          getSearchSuggestions();
        }
      },

      200
    );
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className=" grid grid-flow-col   h-12 md:h-16  shadow-lg  w-[320px] sm:w-[640px]  md:w-full overflow-hidden">
      <div className="flex items-center col-span-3 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="   md:w-[30px]   h-[15px]  cursor-pointer md:h-8 ml-2"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADPz89LS0uWlpb5+fmFhYXHx8eSkpJnZ2ezs7Oqqqp3d3cWFhbk5OT19fU/Pz9aWlra2tqkpKTu7u4PDw+9vb1gYGB9fX0zMzMkJCQaGhqbm5s4ODjLy8tQUFACQSuFAAACZ0lEQVR4nO3d7VLCMBCF4VipfKMiAorI/d+lVmHQP7spyczObt/nCs4Za7RhSVICAAAAAAAAAAAAAAAAgAEYT6b3fkwn4371Nvs7f/ab/IIT67A3mmT2a4/WSW92bLMKLq1zFljmVHyzTlnkTS/4YJ2x0INWcGWdsNhKaTi1DlhsKhd8tM5XwaPYcGYdr4KZ2HBhHa+ChdjwyTpeBU9iw1freBW8ig2t01UhNny3TlfBu9jw2TpeBc9iw5F1vApGYsPGOl4FjdgwwGIqL6Upza0DFpsrDdPBOmGhg1Ywra0jFlqrDZ0/p+oz2nmxTlngJadgSmPrnDfL3hZufb5ELbL2Es82H942TY8fPba8z1aNH9r2EwAAAAAAAAAA8Kz9nI/8mH/2+dypsz1Zf5bU22nbo1/jc1zhoEzSXPkdZlfH2H/trHMW2OUU9PkJ94U8IPzD+6S3POX9rbVOWEz7s+F3lbnQVhvrfBXIBf0OC13JY0P+H1LtMb23jlfBSWzo+duVF0uxoXW6Kgb+M4z/exh/LY3/9zDCUiMXDPCYav+Xxn+3iP9+OIB3/AHs03hebTL32lJqfH5ZNn+/NMXf8+5E/9wCAAAAAAAAAAB4EvucqOhnfYU/r83v2FDmmXvhz00Mf/Zl/PNLfX6p60o9g9b3M9rRntPwZ0HHP8/b611Wf8lnssc/V9/nuNd/8t0I1umqEBv6X0q1xTT+PTM+X5v+k8eEvU95d+RJ7/h3dsW/d20Ad+c5HmP/lTHMHv4OywHcQxr/Ltnk9x0q9z7gNIA7nTvB7+UGAAAAAAAAAAAAAAAAAJ++ACLpVB+zWmM6AAAAAElFTkSuQmCC"
          alt="menu"
        />

        <Link to="/">
          {" "}
          <img
            className="  h-12 w-26  md:h-14 md:mx-2 "
            src="https://images.indianexpress.com/2017/08/youtube_logo_new-759.jpg"
            alt="youtube-logo"
          />
        </Link>
      </div>
      <div className="col-span-9 mx-4  mt-3" id="input">
        <div>
          <input
            className="md:w-1/2 border  w-24 md:h-10 border-gray-400   rounded-l-full"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
            type="text"
          />
          <button className="border border-gray-400  md:h-10 w-8 md:w-16 rounded-r-full">
            <i class="fa-solid fa-magnifying-glass h-4"></i>
          </button>
        </div>
        {showSuggestion && (
          <div className=" absolute bg-white py-2 px-2  md:w-[27rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s.id}
                  className="py-2 px-3 shadow-sm w-24 md:w-1/2 text-[10px] md:text-sm hover:bg-gray-100"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="  md:mt-3 md:h-8 mx-3 h-7  mt-3"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
          alt="user-logo"
        />
      </div>
    </div>
  );
};

export default Head;

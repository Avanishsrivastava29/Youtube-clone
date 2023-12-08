import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';


const Head = () => {
  const dispatch=useDispatch();

  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
        <div className='flex items-center col-span-1'>
        <img onClick=
        {() =>toggleMenuHandler()}
         className=" cursor-pointer h-8"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADPz89LS0uWlpb5+fmFhYXHx8eSkpJnZ2ezs7Oqqqp3d3cWFhbk5OT19fU/Pz9aWlra2tqkpKTu7u4PDw+9vb1gYGB9fX0zMzMkJCQaGhqbm5s4ODjLy8tQUFACQSuFAAACZ0lEQVR4nO3d7VLCMBCF4VipfKMiAorI/d+lVmHQP7spyczObt/nCs4Za7RhSVICAAAAAAAAAAAAAAAAgAEYT6b3fkwn4371Nvs7f/ab/IIT67A3mmT2a4/WSW92bLMKLq1zFljmVHyzTlnkTS/4YJ2x0INWcGWdsNhKaTi1DlhsKhd8tM5XwaPYcGYdr4KZ2HBhHa+ChdjwyTpeBU9iw1freBW8ig2t01UhNny3TlfBu9jw2TpeBc9iw5F1vApGYsPGOl4FjdgwwGIqL6Upza0DFpsrDdPBOmGhg1Ywra0jFlqrDZ0/p+oz2nmxTlngJadgSmPrnDfL3hZufb5ELbL2Es82H942TY8fPba8z1aNH9r2EwAAAAAAAAAA8Kz9nI/8mH/2+dypsz1Zf5bU22nbo1/jc1zhoEzSXPkdZlfH2H/trHMW2OUU9PkJ94U8IPzD+6S3POX9rbVOWEz7s+F3lbnQVhvrfBXIBf0OC13JY0P+H1LtMb23jlfBSWzo+duVF0uxoXW6Kgb+M4z/exh/LY3/9zDCUiMXDPCYav+Xxn+3iP9+OIB3/AHs03hebTL32lJqfH5ZNn+/NMXf8+5E/9wCAAAAAAAAAAB4EvucqOhnfYU/r83v2FDmmXvhz00Mf/Zl/PNLfX6p60o9g9b3M9rRntPwZ0HHP8/b611Wf8lnssc/V9/nuNd/8t0I1umqEBv6X0q1xTT+PTM+X5v+k8eEvU95d+RJ7/h3dsW/d20Ad+c5HmP/lTHMHv4OywHcQxr/Ltnk9x0q9z7gNIA7nTvB7+UGAAAAAAAAAAAAAAAAAJ++ACLpVB+zWmM6AAAAAElFTkSuQmCC" alt='menu'/>
      
        <img className='h-14 mx-2' src="https://images.indianexpress.com/2017/08/youtube_logo_new-759.jpg" alt='youtube-logo'/>
        </div>
        <div className='col-span-10 px-10 mt-2'>
            <input className='w-1/2 border border-gray-400  p-2 rounded-l-full' type='text'/>
            <button className='border border-gray-400  p-2 rounded-r-full'><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className='col-span-1'>
            <img  className="h-8 mt-2" src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg' alt='user-logo'/>
        </div>
    </div>
  )
}

export default Head
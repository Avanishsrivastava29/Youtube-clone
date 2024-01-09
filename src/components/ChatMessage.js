import React from "react";

const ChatMessage = ({ name, comment }) => {
  return (
    <div className="flex items-center border border-gray-50 rounded-lg bg-gray-100  ">
      <img
        className="md:w-10  w-6 md:h-10 rounded-lg "
        src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
        alt="logo"
      />
      <p className="font-bold px-2 text-[10px] md:text-sm  ">{name}</p>
      <p className="text-[10px]  md:text-sm">{comment}</p>
    </div>
  );
};

export default ChatMessage;

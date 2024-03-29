import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import { generate } from "../utils/helper";
import { generatemessgae } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //api polling
      console.log("API POLLING");
      dispatch(
        addMessage({
          name: generate(),
          message: generatemessgae(),
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="md:">
        <div className="md:h-96 md:w-96 h-96  mt-2 md:p-2 md:ml-2   border border-black rounded-l-md overflow-y-scroll flex flex-col-reverse">
          {ChatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} comment={c.message} />
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("on form submit ", liveMessage);
            dispatch(
              addMessage({
                name: "Avanish",
                message: liveMessage,
              })
            );
          }}
          className=" md:w-96   m-1 p-2 border border-black rounded-lg"
        >
          <input
            className="px-2 mr-2  w-[210px] md:w-72 "
            type="text"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
          <button className="bg-green-100   md:mx-2 px-2 rounded-lg">
            send
          </button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;

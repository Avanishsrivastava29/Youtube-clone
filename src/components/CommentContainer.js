import React from "react";

const CommentData = [
  {
    name: "John Doe",
    comment: "Great video! Really informative and well-explained.",
    replies: [
      {
        name: "Channel XYZ",
        comment: "Thanks, John! We aim to provide quality content.",
      },
      {
        name: "Another User",
        comment: "I agree, this video helped me a lot!",
      },
    ],
  },
  {
    name: "Alice Smith",
    comment: "I wish there was more detail about this topic.",
    replies: [
      {
        name: "John Doe",
        comment: "Yes, more detail would be awesome!",
      },
    ],
  },
  {
    name: "Robert Johnson",
    comment: "This channel never disappoints!",
  },
  {
    name: "Emily Brown",
    comment: "Amazing content, keep it up!",
    replies: [
      {
        name: "Sophie Clark",
        comment: "Totally agree, Emily!",
      },
    ],
  },
  {
    name: "Chris Green",
    comment: "I have a question about the topic...",
  },
  {
    name: "Sophie Clark",
    comment: "I've been following this channel for years!",
  },
];

// Use this updated CommentData in your application to showcase nested comments and replies.

const Comment = ({ data }) => {
  const { name, comment, replies } = data;

  return (
    <div className="flex shadow-sm bg-gray-50 rounded-lg m-1 p-2 border border-gray-200">
      <div>
        <img
          alt="user"
          className="md:w-10 w-8"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
        />
      </div>
      <div className="px-3">
        <p className="font-bol text-[10px] md:text-sm">{name}</p>
        <p className="text-[10px] md:text-sm">{comment}</p>
        {replies && (
          <div className=" text-[10px] md:text-sm">
            {replies.map((reply, index) => (
              <Comment data={reply} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <Comment data={comment} key={index} />
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentList comments={CommentData} />
    </div>
  );
};

export default CommentContainer;

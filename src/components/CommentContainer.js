import React from 'react';

const CommentData = [
  {
    name: 'John Doe',
    comment: 'Great video! Really informative and well-explained.',
    replies: [
      {
        name: 'Channel XYZ',
        comment: 'Thanks, John! We aim to provide quality content.',
        replies: [
          {
            name: 'John Doe',
            comment: 'You are doing a great job, Channel XYZ!',
          },
          {
            name: 'Another User',
            comment: 'I learned a lot from this channel!',
          },
        ],
      },
      {
        name: 'Another User',
        comment: 'I agree, this video helped me a lot!',
      },
    ],
  },
  {
    name: 'Alice Smith',
    comment: 'I wish there was more detail about this topic.',
    replies: [
      {
        name: 'John Doe',
        comment: 'Yes, more detail would be awesome!',
      },
    ],
  },
  {
    name: 'Robert Johnson',
    comment: 'This channel never disappoints!',
  },
  {
    name: 'Emily Brown',
    comment: 'Amazing content, keep it up!',
    replies: [
      {
        name: 'Sophie Clark',
        comment: 'Totally agree, Emily!',
      },
    ],
  },
  {
    name: 'Chris Green',
    comment: 'I have a question about the topic...',
  },
  {
    name: 'Sophie Clark',
    comment: 'I\'ve been following this channel for years!',
  },
];

// Use this updated CommentData in your application to showcase nested comments and replies.


const Comment = ({ data }) => {
  const { name, comment, replies } = data;

  return (
    <div className='flex shadow-sm bg-gray-50 rounded-lg m-2 p-2'>
      <div>
        <img
          alt='user'
          className='w-10 h-10'
          src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg'
        />
      </div>
      <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{comment}</p>
        {replies && (
          <div className='ml-5'>
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
  return comments.map((comment, index) => <Comment data={comment} key={index} />);
};

const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments</h1>
      <CommentList comments={CommentData} />
    </div>
  );
};

export default CommentContainer;

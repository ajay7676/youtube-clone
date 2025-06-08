import React from "react";
import Comments from "./Comments";

const CommentList = () => {
  const commentData = [
    {
      name: "Shohan Yadav",
      text: "Lorem ispsum color sit amet, consectetur adip",
      replies: [
        {
          name: "Shohan 1.1",
          text: "Lorem ispsum color sit amet, consectetur adip",
          replies: [
            {
              name: "Shohan 2.1",
              text: "Lorem ispsum color sit amet, consectetur adip",
              replies: [
                {
                  name: "Sohan 3.1",
                  text: "Lorem ispsum color sit amet, consectetur adip",
                  replies: [
                    {
                      name: "Sohan 4.1",
                      text: "Lorem ispsum color sit amet, consectetur adip",
                    },
                  ],
                },
              ],
            },
            {
              name: "Ajay Chauhan",
              text: "Lorem ispsum color sit amet, consectetur adip",
            },
            {
              name: "Ajay Chauhan",
              text: "Lorem ispsum color sit amet, consectetur adip",
            },
            {
              name: "Ajay Chauhan",
              text: "Lorem ispsum color sit amet, consectetur adip",
            },
          ],
        },
        {
          name: "Shohan 1.2",
          text: "Lorem ispsum color sit amet, consectetur adip",
        },
        {
          name: "Shohan 1.3",
          text: "Lorem ispsum color sit amet, consectetur adip",
        },
        {
          name: "Sohan 1.4",
          text: "Lorem ispsum color sit amet, consectetur adip",
        },
        {
          name: "Sohan 1.5",
          text: "Lorem ispsum color sit amet, consectetur adip",
        },
      ],
    },
    {
      name: "Rahul Chauhan",
      text: "Lorem ispsum color sit amet, consectetur adip",
      replies: [
        {
          name: "Ajay Chauhan",
          text: "Lorem ispsum color sit amet, consectetur adip",
        },
        {
          name: "Ajay Chauhan",
          text: "Lorem ispsum color sit amet, consectetur adip",
        },
        {
          name: "Ajay Chauhan",
          text: "Lorem ispsum color sit amet, consectetur adip",
        },
        {
          name: "Ajay Chauhan",
          text: "Lorem ispsum color sit amet, consectetur adip",
        },
        {
          name: "Ajay Chauhan",
          text: "Lorem ispsum color sit amet, consectetur adip",
        },
      ],
    },
    {
      name: "Ajay Chauhan",
      text: "Lorem ispsum color sit amet, consectetur adip",
      replies: [
        {
          name: "Ajay Chauhan",
          text: "Lorem ispsum color sit amet, consectetur adip",
        },
        {
          name: "Ajay Chauhan",
          text: "Lorem ispsum color sit amet, consectetur adip",
        },
        {
          name: "Ajay Chauhan",
          text: "Lorem ispsum color sit amet, consectetur adip",
        },
        {
          name: "Ajay Chauhan",
          text: "Lorem ispsum color sit amet, consectetur adip",
        },
        {
          name: "Ajay Chauhan",
          text: "Lorem ispsum color sit amet, consectetur adip",
        },
      ],
    },
    {
      name: "Ajay Chauhan",
      text: "Lorem ispsum color sit amet, consectetur adip",
      replies: [
        {
          name: "Ajay Chauhan",
          text: "Lorem ispsum color sit amet, consectetur adip",
        },
        {
          name: "Ajay Chauhan",
          text: "Lorem ispsum color sit amet, consectetur adip",
        },
        {
          name: "Ajay Chauhan",
          text: "Lorem ispsum color sit amet, consectetur adip",
        },
        {
          name: "Ajay Chauhan",
          text: "Lorem ispsum color sit amet, consectetur adip",
        },
        {
          name: "Ajay Chauhan",
          text: "Lorem ispsum color sit amet, consectetur adip",
        },
      ],
    },
  ];
  return commentData.map((comment, index) => {
    return (
      <div key={index}>
        <Comments data={comment} />
        <div className="pl-4 border-l-black border-l-1 ml-4">
           {
            comment.replies.map((replie, index) => <Comments key={index} data={replie} /> )
           }
        </div>
      </div>
    );
  });
};

export default CommentList;

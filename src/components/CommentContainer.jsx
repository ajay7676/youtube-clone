import React from "react";
import CommentList from "./CommentList";

const CommentContainer = () => {
  return (
    <div className="mt-5 p-2">
      <h2 className="text-2xl font-bold">Comments: </h2>
       <CommentList  />
    </div>
  );
};
export default CommentContainer;

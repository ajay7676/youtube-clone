import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { colseSideBar } from "./utils/slice/sidebarSlice";
import { useSearchParams } from "react-router";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  //   const query = searchParams.get("");
  //   console.log(query);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(colseSideBar());
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-full">
        <div className="px-5 flex w-full">
          <div className="">
            <iframe
              width="1200"
              height="600"
              src={"https://www.youtube.com/embed/" + searchParams.get("")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <CommentContainer />
    </div>
  );
};

export default WatchPage;

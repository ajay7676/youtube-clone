import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router";

const Sidebar = () => {
  const getSidebarBoolean = useSelector((store) => store.sidebar?.sidebarMenu);

  return (
    <>
      {getSidebarBoolean ? (
        <>
          <div className="p-5 shadow-lg  min-w-48">
            <ul>
              <li>
                {/* <NavLink to="/">Home</NavLink> */}
                <Link to="/">Home</Link>
              </li>
              <li>
                {/* <NavLink to="/demo">Demo</NavLink> */}
                Demo
              </li>
              <li> Shorts</li>
              <li> Videos</li>
              <li> Live</li>
            </ul>
            <h1 className="font-bold pt-5">Subscriptions</h1>
            <ul>
              <li> Music</li>
              <li> Sports</li>
              <li> Gaming</li>
              <li> Movies</li>
            </ul>
            <h1 className="font-bold pt-5">Watch Later</h1>
            <ul>
              <li> Music</li>
              <li> Sports</li>
              <li> Gaming</li>
              <li> Movies</li>
            </ul>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Sidebar;

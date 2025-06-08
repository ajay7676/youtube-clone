import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "./utils/slice/sidebarSlice";
import {YOUTUBE_SEARCH_API} from './utils/constants'
import { HiOutlineSearch } from "react-icons/hi";
import { chacheResults } from "./utils/slice/searchSlice";


const Header = () => {
   const [searchQuery, setSearchQuery] = useState("");
   const [suggestion, setSuggestion] = useState([]);
   const [showSuggestion, setShowSuggestion] = useState(false);
   const searchCache = useSelector(store => store.search)
 /**
  * 
  */
    const dispatch = useDispatch();
   const toggleSideBarMenu = () =>{
      dispatch(toggleSidebar())
   }
   useEffect(() => {
       // make an api call after every key press
       // but if the diffrence between 2 api call is <200ms
       // decline the API call
      const timer = setTimeout(() => {
        if (searchCache[searchQuery]) {
          setSuggestion(searchCache[searchQuery])
        }else{
          getSearchSuggestion();
        }
        return() =>{
          clearTimeout(timer);
        }
        
       }, 200);
   }, [searchQuery]);

  /**
   * key - i
   * - render the component
   *  - useEfffect();
   * - start timer > make api call after 200 ms
   * 
   * 
   * key - ip
   *  - destry the component (useEffect retun method)
   *  - re-render  the component
   * - useEffect()
   * - start timer > make api call after 200 ms
   * 
   * setTimeout(200) - make an API Call
   */

   const getSearchSuggestion = async () =>{
      const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
      const json = await data.json()
      setSuggestion(json[1])
      // Updtae Cache
      dispatch(chacheResults({[searchCache]: json[1]}))

   }
   
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
        onClick={toggleSideBarMenu}
          className="h-8 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div className="flex items-center ">
          <input
            className="px-5 w-1/2 border focus:border-blue-500 focus:border-1 outline-0 border-gray-400 focus:border-r-0 border-r-0 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}

          />

          <button className="border border-gray-400 px-5 py-3 rounded-r-full bg-gray-100">
            <HiOutlineSearch />
          </button>
        </div>
        {
          showSuggestion && (
            <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
              <ul>
                {
                  suggestion.map((s) =>(
                    <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                    {s}
                  </li>
                  ))
                }
              </ul>
        </div> 
          )
        }
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;

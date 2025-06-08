import { configureStore } from "@reduxjs/toolkit";
import sidebarRaducer from "../slice/sidebarSlice";
import searchRaducer from "../slice/searchSlice";

const appStore = configureStore({
  reducer: {
    sidebar: sidebarRaducer,
    search: searchRaducer,
  },
});

export default appStore;

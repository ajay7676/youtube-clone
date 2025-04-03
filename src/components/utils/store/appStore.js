import { configureStore } from "@reduxjs/toolkit";
import sidebarRaducer from '../slice/sidebarSlice'

 const appStore = configureStore({
    reducer: {
      sidebar: sidebarRaducer
    },
  })

  export default appStore
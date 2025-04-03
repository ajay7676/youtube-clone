import { createSlice } from "@reduxjs/toolkit";


const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        sidebarMenu : true
    },
    reducers: {
        toggleSidebar: (state) =>{
            state.sidebarMenu =!state.sidebarMenu;
        },
        colseSideBar: (state)=>{
            state.sidebarMenu =false;
        }
    }
})

export const {toggleSidebar,colseSideBar} = sidebarSlice.actions;

export default sidebarSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'app',
    initialState:{
        isMenuOpen:false,
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;


        },
        closeMenu:(State)=>{
            State.isMenuOpen=false
        },

    },
});
export const {toggleMenu,closeMenu}=appSlice.actions;
export default appSlice.reducer;
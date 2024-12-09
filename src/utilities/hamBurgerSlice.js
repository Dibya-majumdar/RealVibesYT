import { createSlice } from "@reduxjs/toolkit";

const hamBurgerSlice=createSlice({
    name:"hamburger",
    initialState:{
        isopen:true
    },
    reducers:{
        toggleState:(state)=>{
            state.isopen=!(state.isopen);
            
        },
        offalltime:(state)=>{
            state.isopen=false;
        }
    }

})
export default hamBurgerSlice.reducer;
export const {toggleState,offalltime}=hamBurgerSlice.actions; 
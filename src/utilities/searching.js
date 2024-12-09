import { createSlice } from "@reduxjs/toolkit";

const searching=createSlice({
    name:"search",
    initialState:{
        items:[]
    },
    reducers:{
        dosearch:(state,action)=>{
        //   state.items[0]= action.payload; 
        state.items = [action.payload];
        }
    }

})
export const{dosearch}=searching.actions;
export default searching.reducer;
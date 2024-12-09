import {configureStore} from "@reduxjs/toolkit";
import reducer from "./hamBurgerSlice";
import searchreducer from "./searching";

const reduxStore=configureStore({
    reducer:{
        sidebarToggle:reducer,
        search:searchreducer,
      

    }
})

export default reduxStore;
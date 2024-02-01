import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./slice/formSlice";


const store = configureStore({
    reducer:{
        formSlice
    }
})



export default store;

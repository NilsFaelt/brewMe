import { configureStore } from "@reduxjs/toolkit";
import toogleReducer from './toogle'

export default configureStore({
    reducer:{
        toogle: toogleReducer
    }
})
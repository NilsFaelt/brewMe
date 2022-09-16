import { configureStore } from "@reduxjs/toolkit";
import toogleReducer from './toogle'
import breweryReducer from './myBreweries'
import myBeerReducers from "./myBeers";

export default configureStore({
    reducer:{
        toogle: toogleReducer,
        myBreweries: breweryReducer,
        myBeers: myBeerReducers
    }
})
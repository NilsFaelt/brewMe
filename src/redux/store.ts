import { configureStore } from "@reduxjs/toolkit";
import toogleReducer from './toogle'
import breweryReducer from './myBreweries'

export default configureStore({
    reducer:{
        toogle: toogleReducer,
        myBreweries: breweryReducer
    }
})
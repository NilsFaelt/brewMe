import { createSlice } from "@reduxjs/toolkit";
import { type } from "os";

interface InitialState {
    open:boolean
    tooglemenu: (state: InitialState) => void;
}

export const toogleSlice= createSlice({
    name:'toogle',
    initialState:<InitialState>{
        open: true
    },
    reducers:{
        tooglemenu:(state )=>{
            state.open = !state.open
        }
    }
})


export const {tooglemenu} = toogleSlice.actions
export default toogleSlice.reducer
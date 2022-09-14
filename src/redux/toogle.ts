import { createSlice } from "@reduxjs/toolkit";


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
        },
        closeMenu:(state )=>{
            state.open =  true
        }
    }
})


export const {tooglemenu, closeMenu} = toogleSlice.actions
export default toogleSlice.reducer
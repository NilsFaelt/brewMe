import { createSlice, Slice } from "@reduxjs/toolkit";
import { stat } from "fs";

interface Breweries{
        brewery_type: string;
        city: string;
        country: string;
        created_at: string;
        id: string;
        name: string;
        state: string;
        street: string;
        website_url: string;   
        done:boolean
}
interface InitialState {
    breweries:Breweries[] | []
}




export const myBrewries:Slice = createSlice({
    name:'myBreweries',
    initialState:<InitialState>{
        breweries: []
    },
    reducers:{
        addBrewry:(state, action )=>{
        state.breweries = [...state.breweries, action.payload]
            console.log(state.breweries, 'INSIED MY BREWS')
        },
        toogleDone:(state, action)=>{
           state.breweries = state.breweries.map((brewery:Breweries)=>{
                if(brewery.id === action.payload.id){
                    return {...brewery, done: !brewery.done }
                }
                else{
                    return brewery
                }
            })
            console.log(state.breweries)
        },
        removeBrewery:(state, action)=>{
            state.breweries = state.breweries.filter((brewery:Breweries)=> brewery.id !== action.payload.id)
        }

    }
})


export const {addBrewry, toogleDone,removeBrewery } = myBrewries.actions
export default myBrewries.reducer
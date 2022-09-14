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
        addBrewry:(state , action )=>{
        state.breweries = [...state.breweries, action.payload]
            console.log(state.breweries, 'INSIED MY BREWS')
        },
    }
})


export const {addBrewry } = myBrewries.actions
export default myBrewries.reducer
import { createSlice, Slice } from "@reduxjs/toolkit";


interface Beer {
    abv: number;
    brewers_tips: string;
    contributed_by?: string;
    description: string;
    ebc: 44;
    food_pairing: string[];
    id: number;
    image_url: string;
    name: string;
    tagline?: string;
  }

export const myBeers:Slice = createSlice({
    name:'myBeers',
    initialState:{
        beers:<Beer[]|[]> []
    },
    reducers:{
        addBeer:(state, action )=>{
        state.beers = [...state.beers, action.payload]
            console.log(state.beers, 'INSIED MY beers')
        },
        toogleDone:(state, action)=>{
           state.breweries = state.breweries.map((brewery:any)=>{
                if(brewery.id === action.payload.id){
                    return {...brewery, done: !brewery.done }
                }
                else{
                    return brewery
                }
            })
            console.log(state.breweries)
        },
        removeBeer:(state, action)=>{
            state.breweries = state.breweries.filter((beer:any)=> beer.id !== action.payload.id)
        }

    }
})


export const {addBeer, toogleDone,removeBeer } = myBeers.actions
export default myBeers.reducer
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
    taseted:boolean
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
        toogleTasted:(state, action)=>{
           state.beers = state.beers.map((beer:any)=>{
                if(beer.id === action.payload.id){
                    return {...beer, taseted: !beer.taseted }
                }
                else{
                    return beer
                }
            })
            console.log(state.beers)
        },
        removeBeer:(state, action)=>{
            state.beers = state.beers.filter((beer:any)=> beer.id !== action.payload.id)
        }

    }
})


export const {addBeer, toogleTasted,removeBeer } = myBeers.actions
export default myBeers.reducer
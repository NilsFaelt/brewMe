import axios from "axios";

export async function  fetchRandomBeer(){
   const data = await axios.get('https://api.punkapi.com/v2/beers/random')
   return data
}
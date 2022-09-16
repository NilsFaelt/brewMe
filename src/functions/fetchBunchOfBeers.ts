import axios from "axios";

export async function  fetchBunvhOfBeers(){
   const data = await axios.get('https://api.punkapi.com/v2/beers?page=5&per_page=20')
   return data
}
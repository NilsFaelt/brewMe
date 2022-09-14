import axios from "axios";

interface Brewery {
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


export async function fetchRandomBrewery(url:string){
try{
   const data  = await axios.get(url)
   if(data){
    return data
   }
}catch(err){
    console.log(`Something went wrog in fetch random brewery: error ${err}`)
}
}
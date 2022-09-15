import axios from "axios";



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
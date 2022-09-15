import axios from "axios"

export async function fetchBrewerybyBrewery(query:string, search:string){
    try{
        
       const data  = await axios.get(`https://api.openbrewerydb.org/breweries?${query}=${search}`)
       if(data){
        return data
       }
    }catch(err){
        console.log(`Something went wrog in fetch random brewery: error ${err}`)
    }
    }
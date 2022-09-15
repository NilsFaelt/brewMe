import axios from "axios"

export async function getaBunch(){
    try{
        
       const data  = await axios.get(`https://api.openbrewerydb.org/breweries/random?size=50`)
       if(data){
        return data
       }
    }catch(err){
        console.log(`Something went wrog in fetch random brewery: error ${err}`)
    }
    }
import { useSelector } from "react-redux";
import myBreweries from "../redux/myBreweries";

interface Breweries{
    brewery_type: string;
    city: string;
    country: string;
    created_at: string;
    id: string ;
    name: string;
    state: string;
    street: string;
    website_url: string;   
    done:boolean
}
interface InitialState {
breweries:Breweries[] | []
}

export function checkIfBreweryIsAlreadyChoosen(brew:any, breweries:Breweries[] ){
    const checkIfexist = breweries.find((brewery)=>brewery?.id === brew?.id)
    return checkIfexist
}
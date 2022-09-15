import { useEffect, useState } from "react";
import { fetchRandomBrewery } from "../../functions/fetchRandomBrewery";
import RandomBeer from "../randomBeer/RandomBeer";
import RandomBrewery from "../randomBrewery/RandomBrewery";
import Styles from "./mainPage.module.css";

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
  done: boolean;
}

const MainPage = () => {
  const [brewery, setBrewery] = useState<Brewery | null>(null);
  useEffect(() => {
    const wrapperAsyncFunc = async () => {
      const data = await fetchRandomBrewery(
        "https://api.openbrewerydb.org/breweries/random"
      );
      setBrewery(data?.data[0]);
    };
    wrapperAsyncFunc();
  }, []);
  console.log(brewery);
  return (
    <div className={Styles.container}>
      <RandomBeer />
      <RandomBrewery brewery={brewery} />
    </div>
  );
};

export default MainPage;

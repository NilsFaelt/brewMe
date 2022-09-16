import { useEffect, useState } from "react";
import { fetchBunvhOfBeers } from "../../functions/fetchBunchOfBeers";
import { fetchRandomBrewery } from "../../functions/fetchRandomBrewery";
import EachBeer from "../eachBeer/EachBeer";
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

const MainPage = () => {
  const [brewery, setBrewery] = useState<Brewery | null>(null);
  const [bunchOfBeers, setBunchOfBeers] = useState<any>(null);
  useEffect(() => {
    const wrapperAsyncFunc = async () => {
      const data = await fetchRandomBrewery(
        "https://api.openbrewerydb.org/breweries/random"
      );
      setBrewery(data?.data[0]);
    };
    wrapperAsyncFunc();
  }, []);

  useEffect(() => {
    const wrapperAsyncFunc = async () => {
      const { data } = await fetchBunvhOfBeers();
      setBunchOfBeers(data);
    };
    wrapperAsyncFunc();
  }, []);
  console.log(bunchOfBeers, "bunchhhhhhh");

  return (
    <div className={Styles.container}>
      <div className={Styles.randomBrewWrapper}>
        <RandomBeer />
        <RandomBrewery brewery={brewery} />
      </div>
      <div className={Styles.titleWrapper}>
        <h3 className={Styles.underTitle}>BEER</h3>
        <h3 className={Styles.underTitleSpan}>MANIA</h3>
      </div>
      <div className={Styles.lotsOfBeerDiv}>
        {bunchOfBeers?.map((beer: Beer) => {
          return <EachBeer beer={beer} />;
        })}
      </div>
    </div>
  );
};

export default MainPage;

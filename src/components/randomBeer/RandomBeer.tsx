import { useEffect, useState } from "react";
import { fetchRandomBeer } from "../../functions/fetchRandomBeer";
import Styles from "./randomBeer.module.css";

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

const RandomBeer = () => {
  const [randomBeer, setRandombeer] = useState<Beer | null>(null);

  useEffect(() => {
    const fetchWrapperAsync = async () => {
      const { data } = await fetchRandomBeer();
      setRandombeer(data[0]);
    };
    fetchWrapperAsync();
  }, []);

  return (
    <div className={Styles.container}>
      <img className={Styles.img} src={randomBeer?.image_url} alt='' />
      <div className={Styles.infoDiv}>
        <p className={Styles.infoText}>Name: {randomBeer?.name}</p>
        <p className={Styles.infoText}>
          Description: {randomBeer?.description}
        </p>
        <p className={Styles.infoText}>ABV: {randomBeer?.abv}</p>
        <p className={Styles.infoText}>Creator: {randomBeer?.contributed_by}</p>
        <p className={Styles.infoText}>
          Food pairing: {randomBeer?.food_pairing}
        </p>
      </div>
    </div>
  );
};

export default RandomBeer;

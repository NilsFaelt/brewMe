import { useEffect, useState } from "react";
import { fetchRandomBeer } from "../../functions/fetchRandomBeer";
import Styles from "./eachBeer.module.css";

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

interface Props {
  beer: Beer;
}

const EachBeer: React.FC<Props> = ({ beer }) => {
  return (
    <div className={Styles.container}>
      <img className={Styles.img} src={beer?.image_url} alt='' />
      <div className={Styles.infoDiv}>
        <p className={Styles.infoText}>Name: {beer?.name}</p>
        <p className={Styles.infoText}>Description: {beer?.description}</p>
        <p className={Styles.infoText}>ABV: {beer?.abv}</p>
        <p className={Styles.infoText}>Creator: {beer?.contributed_by}</p>
        <p className={Styles.infoText}>Food pairing: {beer?.food_pairing}</p>
      </div>
    </div>
  );
};

export default EachBeer;

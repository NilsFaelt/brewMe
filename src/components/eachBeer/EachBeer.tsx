import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRandomBeer } from "../../functions/fetchRandomBeer";
import { addBeer } from "../../redux/myBeers";
import Button from "../button/Button";
import Styles from "./eachBeer.module.css";

interface Beer {
  abv: number;
  brewers_tips: string;
  contributed_by?: string;
  description: string;
  food_pairing: string[];
  id: number;
  image_url: string;
  name: string;
  tagline?: string;
}

interface Props {
  beer: Beer;
  toogleBtn: boolean;
}

const EachBeer: React.FC<Props> = ({ beer, toogleBtn }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      addBeer({
        abv: beer?.abv,
        brewers_tips: beer.brewers_tips,
        contributed_by: beer.contributed_by,
        description: beer.description,
        food_pairing: beer.food_pairing,
        id: beer.id,
        image_url: beer.image_url,
        name: beer.name,
        tagline: beer.tagline,
      })
    );
  };
  return (
    <div className={Styles.container}>
      <img className={Styles.img} src={beer?.image_url} alt='' />
      <div className={Styles.infoDiv}>
        <p className={Styles.infoText}>Name: {beer?.name}</p>
        <p className={Styles.infoText}>Description: {beer?.description}</p>
        <p className={Styles.infoText}>ABV: {beer?.abv}</p>
        <p className={Styles.infoText}>Creator: {beer?.contributed_by}</p>
        <p className={Styles.infoText}>Food pairing: {beer?.food_pairing}</p>
        {toogleBtn ? (
          <Button
            handleClick={handleClick}
            title='Add To My Breews'
            ifTruebtnRed={false}
          />
        ) : null}
      </div>
    </div>
  );
};

export default EachBeer;

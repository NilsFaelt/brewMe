import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomBeer } from "../../functions/fetchRandomBeer";
import { addBeer, toogleTasted } from "../../redux/myBeers";
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
  taseted: boolean;
}

interface Props {
  beer: Beer;
  toogleBtn: boolean;
}

const EachBeer: React.FC<Props> = ({ beer, toogleBtn }) => {
  const btnTitle = beer.taseted ? "Not Tasted" : "Tasted";
  const dispatch = useDispatch();
  const alreadyAdded = useSelector((state: any) =>
    state.myBeers.beers.filter((brew: Beer) => brew.id === beer.id)
  );
  console.log(alreadyAdded, "addddded");

  const handleClickTasted = () => {
    dispatch(toogleTasted({ id: beer.id }));
  };

  const handleClick = () => {
    if (alreadyAdded.length === 0) {
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
          taseted: false,
        })
      );
    }
  };
  return (
    <div className={Styles.container}>
      <img className={Styles.img} src={beer?.image_url} alt='' />
      <div className={Styles.infoDiv}>
        <p className={Styles.infoText}>Name: {beer?.name}</p>
        <p className={Styles.infoText}>Description: {beer?.description}</p>
        {beer.taseted ? (
          <div className={Styles.tastedThatBrewDiv}>
            <p className={Styles.tastedThatBrew}>Tasted That Brew</p>
          </div>
        ) : null}
        <p className={Styles.infoText}>ABV: {beer?.abv}</p>
        <p className={Styles.infoText}>Creator: {beer?.contributed_by}</p>
        <p className={Styles.infoText}>Food pairing: {beer?.food_pairing}</p>
        {toogleBtn ? (
          <Button
            handleClick={handleClick}
            title='Add To My Breews'
            ifTruebtnRed={false}
          />
        ) : (
          <Button
            handleClick={handleClickTasted}
            title={btnTitle}
            ifTruebtnRed={false}
          />
        )}
      </div>
    </div>
  );
};

export default EachBeer;

import { useSelector } from "react-redux";
import { myBeers } from "../../../../redux/myBeers";
import EachBeer from "../../../eachBeer/EachBeer";
import Styles from "./MyBeers.module.css";

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

const MyBeers = () => {
  const { beers } = useSelector((state: any) => state.myBeers);
  console.log(beers);
  return (
    <div className={Styles.container}>
      {beers.length === 0 ? (
        <div>
          <h3 className={Styles.titleNotAddedYet}>No beers added yet</h3>
          <h4 className={Styles.underTitle}>
            Go check out some beers and then come back
          </h4>
        </div>
      ) : null}
      {beers?.map((beer: Beer) => {
        return <EachBeer toogleBtn={false} beer={beer} />;
      })}
    </div>
  );
};

export default MyBeers;

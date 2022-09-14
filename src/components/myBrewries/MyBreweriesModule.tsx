import { useSelector } from "react-redux";
import myBreweries from "../../redux/myBreweries";
import EachBrewery from "./eachBrewery/EachBrewery";
import Styles from "./myBreweries.module.css";

interface Brewery {
  brewery_type: string;
  city: string;
  country: string;
  created_at: string;
  id: string;
  name: string;
  state: string;
  website_url: string;
}

const MyBreweriesModule = () => {
  const { breweries } = useSelector((state: any) => state.myBreweries);
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>My Breweries</h2>
      {breweries?.map((brewery: Brewery | null) => {
        return <EachBrewery brewery={brewery} />;
      })}
    </div>
  );
};

export default MyBreweriesModule;

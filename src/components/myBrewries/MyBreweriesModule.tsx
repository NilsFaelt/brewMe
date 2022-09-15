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
  done: boolean;
}

const MyBreweriesModule = () => {
  const { breweries } = useSelector((state: any) => state.myBreweries);
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>My Breweries</h2>
      {breweries.length === 0 ? (
        <div>
          <h3 className={Styles.titleNotAddedYet}>No breweries added yet</h3>
          <h4 className={Styles.underTitle}>
            Go check out some breweries and then come back
          </h4>
        </div>
      ) : null}
      {breweries?.map((brewery: Brewery | null) => {
        return (
          <EachBrewery
            titleValue={false}
            toogleBtnValue={false}
            key={brewery?.id}
            brewery={brewery}
          />
        );
      })}
    </div>
  );
};

export default MyBreweriesModule;

import { FormEvent, useEffect, useState } from "react";
import { fetchBrewerybyBrewery } from "../../functions/fetchBrewerybyBrewery";
import EachBrewery from "../myBrewries/eachBrewery/EachBrewery";
import Styles from "./searchBrewery.module.css";

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

const SearchBrewery = () => {
  const [brewries, setBrewries] = useState<Brewery[] | null>(null);
  const [searchValue, setsearchValue] = useState({
    by: "By Brewery",
    query: "by_name",
  });
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchWrapperFunc = async () => {
      const data = await fetchBrewerybyBrewery(searchValue.query, inputValue);
      if (data?.data) {
        setBrewries(data.data);
      }
    };
    fetchWrapperFunc();
  }, [inputValue]);
  console.log(brewries);

  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Search Brewery</h2>
      <ul className={Styles.ul}>
        <li
          onClick={() => setsearchValue({ by: "By Brewery", query: "by_name" })}
          className={Styles.li}
        >
          By Brewery
        </li>
        <li
          onClick={() => setsearchValue({ by: "By State", query: "by_state" })}
          className={Styles.li}
        >
          By State
        </li>
        <li
          onClick={() => setsearchValue({ by: "By City", query: "by_city" })}
          className={Styles.li}
        >
          By City
        </li>
        <li
          onClick={() =>
            setsearchValue({ by: " Get A Bunch", query: "by_name" })
          }
          className={Styles.li}
        >
          Get A Bunch
        </li>
      </ul>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        className={Styles.input}
        type='text'
        placeholder={searchValue.by}
      />
      <div className={Styles.dispalyBreweriesDiv}>
        {brewries?.map((brewery) => {
          return (
            <EachBrewery
              brewery={brewery}
              toogleBtnValue={true}
              titleValue={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchBrewery;

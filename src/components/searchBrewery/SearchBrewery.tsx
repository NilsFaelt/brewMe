import { FormEvent, useEffect, useState } from "react";
import { fetchBrewerybyBrewery } from "../../functions/fetchBrewerybyBrewery";
import Styles from "./searchBrewery.module.css";

const SearchBrewery = () => {
  const [brewries, setBrewries] = useState(null);
  const [searchValue, setsearchValue] = useState({
    by: "By Brewery",
    query: "by_name",
  });
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchWrapperFunc = async () => {
      const data = await fetchBrewerybyBrewery(searchValue.query, inputValue);
      console.log(data);
    };
    fetchWrapperFunc();
  }, [inputValue]);

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
    </div>
  );
};

export default SearchBrewery;

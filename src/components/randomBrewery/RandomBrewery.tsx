import { useDispatch } from "react-redux";
import { addBrewry } from "../../redux/myBreweries";
import Button from "../button/Button";
import Styles from "./randomBrewery.module.css";

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

interface Props {
  brewery: Brewery | null;
}

const RandomBrewery: React.FC<Props> = ({ brewery }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      addBrewry({
        brewery_type: brewery?.brewery_type,
        city: brewery?.city,
        country: brewery?.country,
        created_at: brewery?.created_at,
        id: brewery?.id,
        name: brewery?.name,
        state: brewery?.state,
        website_url: brewery?.website_url,
      })
    );
  };
  return (
    <div className={Styles.divWrapper}>
      <h2 className={Styles.titlebreweryOfTheDay}>
        <span className={Styles.span}> Brewery</span> Of{" "}
        <span className={Styles.span}>The</span> Day
      </h2>
      <div className={Styles.container}>
        <h3 className={Styles.title}>{brewery?.name}</h3>
        <div className={Styles.infodiv}>
          <p>
            <span className={Styles.infoSpan}>Country:</span> {brewery?.country}
          </p>
          <p>
            <span className={Styles.infoSpan}>State:</span> {brewery?.state}
          </p>
          <p>
            <span className={Styles.infoSpan}>Started:</span>{" "}
            {brewery?.created_at}
          </p>
          <p>
            <span className={Styles.infoSpan}>Type of brewery:</span>{" "}
            {brewery?.brewery_type}
          </p>
          <p>
            <span className={Styles.infoSpan}>Website:</span>
            <a
              style={{ color: "white" }}
              target='_blank'
              href={brewery?.website_url}
            >
              Go There
            </a>
          </p>
        </div>
        <Button
          handleClick={handleClick}
          title='Add To my brewries'
          ifTruebtnRed={false}
        ></Button>
      </div>
    </div>
  );
};

export default RandomBrewery;

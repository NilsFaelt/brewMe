import { useState } from "react";
import { useDispatch } from "react-redux";
import { nrAndBooleanForImgGenetarot } from "../../../functions/nrAndBooleanForImgGenetarot";
import { toogleDone } from "../../../redux/myBreweries";
import Button from "../../button/Button";
import Styles from "./eachBrewery.module.css";

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

const EachBrewery: React.FC<Props> = ({ brewery }) => {
  const dispatch = useDispatch();
  const [urlGeneratorNr, setUrlGeneratorNr] = useState<number>(5);
  const arrayOfUrls = [
    "https://images.unsplash.com/photo-1604040605063-8323c2b450cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    "https://images.unsplash.com/photo-1623937228271-992646fb0fba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  ];

  if (urlGeneratorNr === 5) {
    setUrlGeneratorNr(nrAndBooleanForImgGenetarot());
  }

  const handleClick = () => {
    dispatch(toogleDone({ id: brewery?.id }));
  };
  return (
    <div
      className={Styles.container}
      style={{ backgroundImage: `url(${arrayOfUrls[urlGeneratorNr]})` }}
    >
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
        <div className={Styles.btnWrapper}>
          <Button
            handleClick={handleClick}
            ifTruebtnRed={false}
            title='Visited'
          />
        </div>
      </div>
    </div>
  );
};

export default EachBrewery;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nrAndBooleanForImgGenetarot } from "../../../functions/nrAndBooleanForImgGenetarot";
import { removeBrewery, toogleDone } from "../../../redux/myBreweries";
import { addBrewry } from "../../../redux/myBreweries";
import Button from "../../button/Button";
import Styles from "./eachBrewery.module.css";
import beer from "../../../assets/img/beer.png";
import { checkIfBreweryIsAlreadyChoosen } from "../../../functions/checkIfBreweryIsAlreadyChoosen";

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

interface Props {
  brewery: Brewery | null;
  toogleBtnValue: boolean;
  titleValue: boolean;
  toogleRemove: boolean;
}

const EachBrewery: React.FC<Props> = ({
  brewery,
  toogleBtnValue,
  titleValue,
  toogleRemove,
}) => {
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

  const { breweries } = useSelector((state: any) => state.myBreweries);
  const breweryDidAlreadyExist = checkIfBreweryIsAlreadyChoosen(
    brewery,
    breweries
  );

  const removeBreery = () => {
    dispatch(removeBrewery({ id: brewery?.id }));
  };

  const handleClicked = () => {
    if (!breweryDidAlreadyExist) {
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
          done: false,
        })
      );
    }
  };

  const handleClick = () => {
    dispatch(toogleDone({ id: brewery?.id }));
  };
  return (
    <div
      className={Styles.container}
      style={{ backgroundImage: `url(${arrayOfUrls[urlGeneratorNr]})` }}
    >
      <div className={Styles.container}>
        {!breweryDidAlreadyExist ? (
          <h3 className={Styles.title}>{brewery?.name} </h3>
        ) : (
          <h3 className={Styles.title}>
            {brewery?.name}
            {titleValue ? (
              <span className={Styles.added}>/Added to MyBrews</span>
            ) : null}
          </h3>
        )}
        <div className={Styles.infodiv}>
          {toogleRemove ? (
            <p onClick={removeBreery} className={Styles.remove}>
              Remove Brewery
            </p>
          ) : null}
          <p>
            <span className={Styles.infoSpan}>Country:</span> {brewery?.country}
          </p>
          <p>
            <span className={Styles.infoSpan}>State:</span> {brewery?.state}
          </p>
          <p>
            <span className={Styles.infoSpan}>City:</span> {brewery?.city}
          </p>
          <p>
            {brewery?.done ? (
              <div className={Styles.beenThereDiv}>
                <p className={Styles.beenThereTitle}>Been There</p>
                <img className={Styles.img} src={beer} alt='' />{" "}
              </div>
            ) : null}
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
          {toogleBtnValue ? (
            <Button
              handleClick={handleClicked}
              ifTruebtnRed={false}
              title={"Add To My Breweries"}
            />
          ) : (
            <Button
              handleClick={handleClick}
              ifTruebtnRed={false}
              title={brewery?.done ? "Not Visited" : "Visited"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EachBrewery;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { tooglemenu } from "../../redux/toogle";
import Styles from "./header.module.css";

const Header = () => {
  const [toogleAnimation, setToogleAnimation] = useState(true);
  const dispatch = useDispatch();

  const closMenu = () => {
    dispatch(tooglemenu());
  };

  const handleClick = () => {
    setToogleAnimation(false);
    dispatch(tooglemenu());
  };

  if (!toogleAnimation) {
    setTimeout(() => {
      setToogleAnimation(true);
    }, 1000);
  }

  return (
    <header className={Styles.container}>
      <Link
        onClick={closMenu}
        style={{ textDecoration: "none", zIndex: "2" }}
        to={"/"}
      >
        <h1 className={Styles.title}>
          Brew<span className={Styles.span}>Me</span>
        </h1>
      </Link>
      <div onClick={() => handleClick()} className={Styles.wrapper}>
        <div
          className={toogleAnimation ? Styles.rowOne : Styles.rowOneActive}
        ></div>
        <div className={Styles.rowTwo}></div>
        <div className={Styles.rowThree}></div>
      </div>
    </header>
  );
};

export default Header;

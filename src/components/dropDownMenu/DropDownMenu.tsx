import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Styles from "./dropDownMenu.module.css";
import { tooglemenu } from "../../redux/toogle";

const DropDownMenu = () => {
  const dispatch = useDispatch();
  const open = useSelector((state: any) => state.toogle.open);
  const closeMenu = () => {
    dispatch(tooglemenu());
  };
  return (
    <nav className={open ? Styles.container : Styles.containerActive}>
      <ul className={open ? Styles.ul : Styles.ulActive}>
        <Link onClick={closeMenu} className={Styles.link} to={"/myBrewries"}>
          My Brews
        </Link>
        <Link onClick={closeMenu} className={Styles.link} to={"/searchBrewery"}>
          Search Brewery
        </Link>
        <Link
          onClick={closeMenu}
          style={{ marginBottom: "50vh" }}
          className={Styles.link}
          to={"/"}
        >
          Brewmatron
        </Link>
      </ul>
    </nav>
  );
};

export default DropDownMenu;

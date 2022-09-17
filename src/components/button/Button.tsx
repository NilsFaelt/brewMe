import React from "react";
import Styles from "./button.module.css";

interface Props {
  ifTruebtnRed: boolean;
  handleClick?: () => any;
  title: string;
}

const Button: React.FC<Props> = ({ title, ifTruebtnRed, handleClick }) => {
  const disable = title === "Already Added" ? true : false;
  return (
    <div>
      <button
        onClick={handleClick}
        className={!ifTruebtnRed ? Styles.btn : Styles.btnDanger}
        disabled={disable}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;

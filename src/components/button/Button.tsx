import React from "react";
import Styles from "./button.module.css";

interface Props {
  ifTruebtnRed: boolean;
  handleClick?: () => any;
  title: string;
}

const Button: React.FC<Props> = ({ title, ifTruebtnRed, handleClick }) => {
  return (
    <div>
      <button className={!ifTruebtnRed ? Styles.btn : Styles.btnDanger}>
        {title}
      </button>
    </div>
  );
};

export default Button;

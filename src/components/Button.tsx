import React from "react";
import styles from "./Button.module.css";
import { OnClick } from "./SearchBar";

interface ButtonProps {
  onClick: OnClick;
  text: string;
  type?: "submit" | "button" | "reset";
}

const Button = ({ onClick, type = "button", text }: ButtonProps) => {
  return (
    <button onClick={onClick} type={type} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;

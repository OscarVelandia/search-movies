import React from "react";
import styles from "./Input.module.css";
import { OnChange } from "./SearchBar";

interface InputProps {
  name: string;
  placeholder: string;
  onChange?: OnChange;
  initialValue?: string;
}

const Input = ({ onChange, name, initialValue, placeholder }: InputProps) => {
  return (
    <label className={styles.label} htmlFor={name}>
      <input
        className={styles.input}
        onChange={onChange}
        id={name}
        name={name}
        defaultValue={initialValue}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;

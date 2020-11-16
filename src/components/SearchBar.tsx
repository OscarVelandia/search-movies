import React from "react";
import { OnChangeEvent, OnClickEvent } from "../pages/App";
import Button from "./Button";
import Input from "./Input";
import styles from "./searchBar.module.css";

export type OnClick = (event: OnClickEvent) => void;
export type OnChange = (event: OnChangeEvent) => void;

interface SearchBarProps {
  onClick: OnClick;
  inputName: string;
  inputPlaceholder: string;
  buttonText: string;
  onChange?: OnChange;
}

const SearchBar = ({
  onClick,
  onChange,
  inputName,
  inputPlaceholder,
  buttonText,
}: SearchBarProps) => {
  return (
    <form className={styles.searchBarWrapper}>
      <Input onChange={onChange} name={inputName} placeholder={inputPlaceholder} />
      <Button onClick={onClick} type="submit" text={buttonText} />
    </form>
  );
};

export default SearchBar;

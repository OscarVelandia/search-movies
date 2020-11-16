import React from "react";
import { Movie } from "../pages/App.services";
import styles from "./resultCard.module.css";

interface ResultCardProps extends Pick<Movie, "title" | "overview"> {
  imagePath: string;
}

const ResultCard = ({ imagePath, title, overview }: ResultCardProps) => {
  return (
    <div className={styles.cardWrapper}>
      <img className={styles.image} src={imagePath} alt={`${title} movie poster`} />
      <div className={styles.descriptionWrapper}>
        <h2>{title}</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default ResultCard;

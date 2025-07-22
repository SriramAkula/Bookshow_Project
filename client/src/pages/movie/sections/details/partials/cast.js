import React from "react";
import movies from "../../../../../data/movies.json";
import styles from "./cast.module.scss"; // SCSS module
import photo from "../../../../../assets/movie8.webp";
function Cast() {
  const id = 1;
  const movie = movies.find((m) => m.id === id);

  if (!movie) return <p>Movie not found</p>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.castContainer}>
        {movie.cast.map((actor, index) => (
          <div className={styles.castCard} key={index}>
            <img src={photo} alt={actor} className={styles.avatar} />
            <h4>{actor}</h4>
            <p>{movie.actedAs[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cast;

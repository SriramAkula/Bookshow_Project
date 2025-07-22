import React from "react";
import styles from "./recom.module.scss";
import { useNavigate } from "react-router";
import { Icon } from "@iconify/react";
import Card from "../../../../components/molecules/card";
import movies from "../../../../data/movies.json";
import Button from "../../../../components/atoms/Button";

function Recommendation() {
  const navigate = useNavigate();
  function handle() {
    console.log("recommendation");
  }
  return (
    <section className={styles.container}>
      <header>
        <h2>You May Also Like</h2>
        <span>
          View All <Icon icon={"mdi-light:arrow-right"} />
        </span>
      </header>
      <div className={styles.movies}>
        {movies.slice(0, 4).map((movie, i) => {
          return (
            <Card
              {...movie}
              key={movie.id}
              clickHandler={() => navigate(`/${movie.id}`)}
            />
          );
        })}
      </div>

      <div className={styles.buttonWrapper}>
        <Button text={"Show More"} onClick={handle} />
      </div>
    </section>
  );
}

export default Recommendation;

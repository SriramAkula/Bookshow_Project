import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Cast from "../details/partials/cast.js";
import Button from "../../../../components/atoms/Button";
import styles from "./details.module.scss";
import gofg from "../../../../assets/gofg.jpg";
import { useNavigate } from "react-router";

function Details(props) {
  const { M_id } = props;
  const [liked, setLiked] = useState(false); // Like state

  const handleLike = () => {
    setLiked((prev) => !prev); // Toggle like
  };
  const navigate=useNavigate();
  return (
    <section className={styles.container}>
      {/* Movie Details */}
      <div className={styles.container1}>
        <img src={gofg} alt="Guardians of the Galaxy" />
        <div className={styles.container2}>
          <h4>English</h4>
          <h1>Guardians of the Galaxy</h1>
          <p>
            <Icon icon="mdi:star" /> <span>4.5 IMDb Rating</span>
          </p>
          <p className={styles.para}>
            From the Marvel Cinematic Universe comes an epic space adventure.
            Peter Quill, a brash space adventurer who calls himself Star-Lord,
            finds himself the target of relentless bounty hunters after stealing
            a mysterious orb. To evade capture, he forms an uneasy alliance with
            a group of misfits: Gamora, Drax the Destroyer, Rocket Raccoon, and
            Groot.
          </p>
          <p>2h 19m • Action | Adventure • 1 May, 2025</p>

          <div className={styles.last}>
            <Button
              text={"Watch Trailer"}
              style={{ backgroundColor: "#1E2939", color: "#fff" }}
              bIcon={"carbon:play-filled"}
              className={styles.button}
            />
            <Button text={"Buy Ticket"}
            className={styles.bookNow}
            clickHandler={()=>navigate('/movies/1')}
             />

            {/* Like Button */}
            <button
              onClick={handleLike}
              className={styles.likeButton}
              aria-label="like"
            >
              <Icon
                icon={liked ? "icon-park-solid:like" : "icon-park-twotone:like"}
                style={{
                  color: liked ? "#e63946" : "#ffffff",
                  fontSize: "28px",
                  transition: "transform 0.2s ease",
                }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Cast Section */}
      <h2>Your Favorite Cast</h2>
      <Cast id={M_id} />
    </section>
  );
}

export default Details;

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Button from "../../../../components/atoms/Button";
import styles from "./booking.module.scss";
import Booking from "../../../booking";
import { useNavigate } from "react-router";
const days = [
  { day: "Tue", date: 15 },
  { day: "Wed", date: 16 },
  { day: "Thu", date: 17 },
  { day: "Fri", date: 18 },
  { day: "Sat", date: 19 },
  { day: "Sun", date: 20 },
];

function BookingDate({ id }) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(1);

  const handlePrev = () => {
    if (selected > 0) setSelected(selected - 1);
  };

  const handleNext = () => {
    if (selected < days.length - 1) setSelected(selected + 1);
  };

  return (
    <section className={styles.container}>
      <h2>Choose Date</h2>
      <div className={styles.dateSelector}>
        <button className={styles.arrow} onClick={handlePrev}>
          <Icon icon="ic:round-arrow-left" />
        </button>

        {days.map((item, index) => (
          <div
            key={index}
            className={`${styles.dateCard} ${
              index === selected ? styles.active : ""
            }`}
            onClick={() => setSelected(index)}
          >
            <span>{item.day}</span>
            <strong>{item.date}</strong>
          </div>
        ))}

        <button className={styles.arrow} onClick={handleNext}>
          <Icon icon="ic:round-arrow-right" />
        </button>

        <Button
          text="Book Now"
          className={styles.bookNow}
          clickHandler={() => navigate(`/${id}/${days[selected].date}`)}
        />
      </div>
    </section>
  );
}

export default React.memo(BookingDate);

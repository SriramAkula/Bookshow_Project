import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate

import styles from "./booking.module.scss";
import Timings from "./timings";
import Seats from "./seats";
import Button from "../../components/atoms/Button";

const SEAT_PRICE = 15; // Ensure this is consistent with the Seats component if needed

function Booking(props) {
  const navigate = useNavigate(); // 2. Initialize the navigate function
  const [selectedSeats, setSelectedSeats] = useState([]); // 3. State to hold selected seats

  const handleSelectionChange = (seats) => {
    setSelectedSeats(seats);
  };

  const handleProceedToCheckout = () => {
    if (selectedSeats.length > 0) {
      navigate("/payment", {
        state: {
          seats: selectedSeats,
          totalPrice: selectedSeats.length * SEAT_PRICE,
        },
      });
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.Timer}>
        <Timings />
      </div>
      <div className={styles.seats}>
        <Seats onSelectionChange={handleSelectionChange} />
      </div>

      <Button
        text={"Proceed to checkout"}
        fIcon={"ep:right"}
        clickHandler={handleProceedToCheckout}
        disabled={selectedSeats.length === 0}
      />
    </main>
  );
}

export default Booking;

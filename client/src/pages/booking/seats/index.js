import React, { useState, useEffect } from 'react';
import styles from './seats.module.scss';
import screen from "../../../assets/screen.png";

const Theater_Sheet = [
  ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8'],
  ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8'],
  null,
  ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14'],
  ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D13', 'D14'],
  null,
  ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10', 'E11', 'E12'],
  ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'],
  ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10', 'G11', 'G12'],
];

function Seats({ onSelectionChange = () => {} }) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [alreadyFilled, setAlreadyFilled] = useState([]);

  useEffect(() => {
    setAlreadyFilled(["A5", "B2", "C8", "F5", "F6", "D10"]);
  }, []);

  useEffect(() => {
    onSelectionChange(selectedSeats);
  }, [selectedSeats, onSelectionChange]);

  const handleSeatClick = (seatId) => {
    if (alreadyFilled.includes(seatId)) return;
    setSelectedSeats((prev) =>
      prev.includes(seatId) ? prev.filter((id) => id !== seatId) : [...prev, seatId]
    );
  };

  return (
    <div className={styles.seatSelection}>
      <div className={styles.header}>
        <h2>Select Your Seat</h2>
        <img src={screen} alt="BookShow" />
        <h3>SCREEN SIDE</h3>
      </div>
      <div className={styles.seatMap}>
        {Theater_Sheet.map((row, rowIndex) => {
          if (row === null) {
            return <div key={`aisle-${rowIndex}`} className={styles.horizontalAisle} />;
          }

          const rowLabel = row[0].charAt(0);
          const isLastRowOfSection = Theater_Sheet[rowIndex + 1] === null;
          const isVeryLastRow = rowIndex === Theater_Sheet.length - 1;

          return (
            <div className={styles.row} key={`row-${rowIndex}`}>
              <div className={styles.rowLabel}>{rowLabel}</div>
              {row.map((seatId, seatIndex) => {
                const isSelected = selectedSeats.includes(seatId);
                const isUnavailable = alreadyFilled.includes(seatId);
                const seatClass = `${styles.seat} ${isSelected ? styles.selected : ''} ${isUnavailable ? styles.unavailable : ''}`;
                
                const middleIndex = Math.floor(row.length / 2) - 1;
                const insertAisle = seatIndex === middleIndex && ["C", "D", "E", "F", "G"].includes(rowLabel);

                return (
                  <React.Fragment key={seatId}>
                    <div
                      className={seatClass.trim()}
                      onClick={() => handleSeatClick(seatId)}
                    >
                      {(isLastRowOfSection || isVeryLastRow) && (
                        <span className={styles.seatNumberDisplay}>{seatIndex + 1}</span>
                      )}
                    </div>
                    {insertAisle && (
                      <div className={styles.horizontalAisle}></div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <div className={styles.seat}></div>
          <span>Available</span>
        </div>
        <div className={styles.legendItem}>
          <div className={`${styles.seat} ${styles.selected}`}></div>
          <span>Selected</span>
        </div>
        <div className={styles.legendItem}>
          <div className={`${styles.seat} ${styles.unavailable}`}></div>
          <span>Booked</span>
        </div>
      </div>
    </div>
  );
}

export default Seats;

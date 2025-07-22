import React, { useState } from "react";
import { Icon } from "@iconify/react";

import "./timings.moduel.scss";

const Timings = () => {
  const [selected, setSelected] = useState("06:30");
  const times = ["06:30", "09:30", "12:00", "04:30", "08:00"];

  return (
    <div className="timing-box">
      <p>Available Timings</p>
      {times.map((time, index) => (
        <button
          key={index}
          className={selected === time ? "active" : ""}
          onClick={() => setSelected(time)}
        >
          <Icon icon={"tabler:clock"} /> {time}
        </button>
      ))}
    </div>
  );
};

export default Timings;

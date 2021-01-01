import React, { useState, useEffect } from "react";
import CounterTime from "../CounterTime";
import TimerComponent from "../TimerComp/Timer";
import TimerComponentManager from "../TimerComp/TimerComponentManager";
import TimerManager from "../TimerManager";
import data from "./data.json";

function Body() {
  const [counter, setCounter] = useState(2);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <center>
        <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
          What Stack are you
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            // backgroundColor: "red",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          <h3>{data[counter % data.length].quote}</h3>
          <p
            style={{
              display: "flex",
              justifyContent: "flex-end",
              backgroundColor: "#63C172",
              borderRadius: "5px",
              fontSize: "20px",
            }}
          >
            {data[0]["author "]}"
          </p>
        </div>

        <center>
          <hr />
          <div style={{ margin: "20px 0" }}>
            <hr />
          </div>
          <TimerComponentManager />
        </center>
      </center>
    </div>
  );
}

export default Body;

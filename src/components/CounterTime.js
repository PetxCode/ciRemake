import React, { useState, useEffect } from "react";

function CounterTime(props) {
  const [second, setSecond] = useState();
  const [isRunning, setIsRunning] = useState(false);
  const [shouldRunning, setShouldRunning] = useState(false);

  useEffect(() => {
    const sec = parseInt(second);
    if (isRunning && sec > 0) {
      setTimeout(() => {
        setSecond(sec - 1);
      }, 1000);
    } else {
      if (shouldRunning) {
        alert("Your time has ended:");
        setShouldRunning(false);
      }
      setIsRunning(false);
      // setSecond("");
    }
  }, [second, isRunning]);
  return (
    <div style={{ margin: "40 0px" }}>
      <center
        style={{ display: "flex", justifyContent: "center", margin: "20 0px" }}
      >
        <p style={{ margin: "0 10px" }}>{props.name}</p>
        <input
          disabled={isRunning}
          style={{ margin: "0 20px" }}
          placeholder="Enter a value"
          value={second}
          onChange={(e) => {
            setSecond(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setIsRunning(true);
            setShouldRunning(true);
          }}
        >
          Start Timer
        </button>
      </center>
    </div>
  );
}

export default CounterTime;

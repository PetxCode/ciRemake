import React, { useState, useEffect } from "react";
import TimerComponent from "./Timer";

function TimerComponentManager() {
  const [name, setName] = useState("");
  const [timerName, setTimeName] = useState([]);
  return (
    <div>
      <center style={{ display: "flex", justifyContent: "center" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const timeName = [...timerName];
            timeName.push(name);
            setTimeName(timeName);
          }}
        >
          <div style={{ display: "flex" }}>
            <label style={{ marginLeft: "10px" }}>Enter the Name: {""}</label>
            <input
              placeholder="Enter the Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "30px",
              alignItems: "center",
              marginBottom: "20px",
              marginTop: "10px",
            }}
          >
            Enter
          </button>
        </form>
      </center>
      {timerName.map((timer) => (
        <TimerComponent name={timer} />
      ))}
    </div>
  );
}

export default TimerComponentManager;

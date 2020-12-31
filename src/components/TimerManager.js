import React, { useState, useEffect } from "react";
import CounterTime from "./CounterTime";
// const newTimer = ["WorkOut", "Gym", "Coding"];
function TimerManager() {
  const [newTimer, setNewTimer] = useState(["WorkOut", "Gym", "Coding"]);
  const [name, setName] = useState("");
  return (
    <div>
      <center>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const newEntry = [...newTimer];
            newEntry.push(name);
            setNewTimer(newEntry);
          }}
        >
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button>Enter</button>
        </form>
        {newTimer.map((timer) => (
          <CounterTime name={timer} />
        ))}
      </center>
    </div>
  );
}

export default TimerManager;

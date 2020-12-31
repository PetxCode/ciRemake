import React, { useState, useEffect } from "react";

const TimerComponent = (props) => {
  const [sec, setSec] = useState("");
  const [isCounting, setIsCounting] = useState(false);
  const [popAlert, setPopAlert] = useState(false);

  useEffect(() => {
    const secInt = parseInt(sec);
    if (isCounting && secInt > 0) {
      setTimeout(() => {
        setSec(secInt - 1);
      }, 1000);
    } else {
      if (popAlert) {
        alert("The Timer is up...!");
        setPopAlert(false);
      }
      setIsCounting(false);
    }
  }, [sec, isCounting]);
  return (
    <div>
      <center
        style={{
          display: "flex",
          justifyContent: "center",
          width: "500px",
          height: "60px",
        }}
      >
        <div style={{ width: "20%", marginRight: "3px" }}>{props.name}</div>
        <div style={{ width: "40%", height: "100%" }}>
          <input
            disabled={isCounting}
            style={{ width: "120%", height: "50%" }}
            placeholder="Enter the Project time"
            value={sec}
            onChange={(e) => {
              setSec(e.target.value);
            }}
          />
        </div>
        <div
          style={{
            width: "40%",
            height: "50%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button
            style={{
              width: "60%",
            }}
            onClick={() => {
              setIsCounting(true);
              setPopAlert(true);
            }}
          >
            Start
          </button>
        </div>
      </center>
    </div>
  );
};

export default TimerComponent;

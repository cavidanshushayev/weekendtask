import React from 'react'
import { useState } from "react";
function Task1() {
    const [color, setColor] = useState("default");

    const handleButtonClick = () => {
      setColor((prevColor) => prevColor === "default" ? "yellow" : "default");
    };
  
    return (
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color === "default" ? "grey" : "yellow",
        }}
      >
        <button onClick={handleButtonClick}>Toggle Color</button>
      </div>
    );
}

export default Task1
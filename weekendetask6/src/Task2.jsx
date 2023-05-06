import React from 'react'
import { useState } from "react";
function Task2() {
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState("");
    const [listItems, setListItems] = useState([]);
  
    const handleInputChange = (event) => {
      const value = event.target.value;
      setInputValue(value);
      if (value.length < 5 || value.toLowerCase() === value) {
        setError("En azi 1 boyuk herf olmalidir ve 5 herfden cox olmalidir");
      } else {
        setError("");
      }
    };
  
    const handleAddButtonClick = () => {
      setListItems([...listItems, inputValue]);
      setInputValue("");
    };
  
    return (
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button onClick={handleAddButtonClick} disabled={error}>
          Add
        </button>
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
}

export default Task2
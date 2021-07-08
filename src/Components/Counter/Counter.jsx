import React, { useState } from 'react';
import './Counter.css';

export default function Counter() {
  const [counter, setcounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const onInputChange = (e) => {
    setInputValue(parseInt(e.target.value));
  };

  const onAddButtonClick = () => {
    setcounter(counter + inputValue);
  };

  const onMinusButtonClick = () => {
    setcounter(counter - inputValue);
  };

  return (
    <div>
      <h3 data-testid={'header'}>Counter</h3>
      <h2
        data-testid="counter"
        className={`${counter >= 100 ? 'green' : ''}${counter <= -100 ? 'red' : ''}`}
      >
        {counter}
      </h2>
      <button className="minus-button" data-testid="minus-button" onClick={onMinusButtonClick}>
        -
      </button>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => onInputChange(e)}
        className="count-input text-center"
        data-testid="input"
      />
      <button className="add-button" data-testid="add-button" onClick={onAddButtonClick}>
        +
      </button>
    </div>
  );
}

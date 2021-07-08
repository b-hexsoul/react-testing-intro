import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button>+</button>
      <input type="text" />
      <button>-</button>
    </div>
  );
}

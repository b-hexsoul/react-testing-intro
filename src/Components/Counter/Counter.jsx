import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 data-testid={'header'}>Counter</h1>
    </div>
  );
}

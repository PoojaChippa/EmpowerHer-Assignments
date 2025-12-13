import React, { useState } from "react";
function Counter() {
  let [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={increment}>Click Me</button>
    </div>
  );
}

export default Counter;

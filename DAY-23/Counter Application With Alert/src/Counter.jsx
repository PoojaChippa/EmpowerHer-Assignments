import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Run only when count changes
    if (count !== 0 && count % 3 === 0) {
      alert(`The current number ${count} is divisible by 3`);
    }
  }, [count]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default Counter;

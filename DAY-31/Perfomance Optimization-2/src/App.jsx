import { useState, lazy, Suspense } from "react";

/* Lazy load the heavy component */
const HeavyComponent = lazy(() => import("./components/HeavyComponent"));

function App() {
  const [count, setCount] = useState(0);

  console.log("Parent component rendered");

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>React.memo & Lazy Loading Demo</h2>

      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>

      <hr />

      {/* Lazy loading with Suspense */}
      <Suspense fallback={<p>Loading Heavy Component...</p>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;

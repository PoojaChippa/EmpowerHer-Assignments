import React from "react";

function HeavyComponent() {
  console.log("HeavyComponent rendered");

  return (
    <div
      style={{ marginTop: "20px", padding: "20px", border: "1px solid #ccc" }}
    >
      <h3>Heavy Component</h3>
      <p>This represents a heavy UI section.</p>
    </div>
  );
}

/* React.memo prevents unnecessary re-renders */
export default React.memo(HeavyComponent);

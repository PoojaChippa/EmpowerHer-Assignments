import { useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

function StatusToggle() {
  const [status, setStatus] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setStatus(!status)}>Toggle Status</button>

      <br />
      <br />

      {status ? <ComponentA /> : <ComponentB />}
    </div>
  );
}

export default StatusToggle;

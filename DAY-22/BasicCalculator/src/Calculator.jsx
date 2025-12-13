import React, { useState } from "react";
function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add");
  const [results, setResults] = useState([]);

  const handleCalculate = () => {
    if (num1 === "" || num2 === "") return;

    let a = Number(num1);
    let b = Number(num2);
    let result;

    if (operation === "add") {
      result = a + b;
    } else if (operation === "subtract") {
      result = a - b;
    } else if (operation === "multiply") {
      result = a * b;
    }
    setResults([...results, result]);
  };
  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid black",
        margin: "50px 80px",
      }}
    >
      <h2>Basic Calculator</h2>

      {/* Numeric Inputs */}
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={{ marginLeft: "20px" }}
      />

      <br />
      <br />

      {/* Operation Dropdown */}
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
      </select>

      <br />
      <br />

      {/* Action Button */}
      <button onClick={handleCalculate}>Perform Action</button>

      <br />
      <br />

      {/* Results */}
      <h3>Results:</h3>
      <ul>
        {results.map((res, index) => (
          <li key={index}>{res}</li>
        ))}
      </ul>
    </div>
  );
}

export default Calculator;

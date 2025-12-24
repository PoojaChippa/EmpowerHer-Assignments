import { useState, useMemo, useCallback } from "react";
import ProductList from "./components/ProductList";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Headphones", price: 3000 },
  { id: 4, name: "Keyboard", price: 1500 },
];

function App() {
  const [counter, setCounter] = useState(0);

  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce((sum, product) => sum + product.price, 0);
  }, []);

  const handleSelectProduct = useCallback((product) => {
    console.log("Selected:", product.name);
  }, []);

  return (
    <div className="page">
      <h2>React Performance Optimization</h2>

      <h3>Total Price: ₹{totalPrice}</h3>

      <button onClick={() => setCounter(counter + 1)}>
        Increment Counter: {counter}
      </button>

      <ProductList products={products} onSelectProduct={handleSelectProduct} />
    </div>
  );
}

export default App;

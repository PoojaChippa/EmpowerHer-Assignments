function ProductList({ products, onSelectProduct }) {
  console.log("ProductList rendered");

  return (
    <div>
      <h3>Product List</h3>
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            onClick={() => onSelectProduct(product)}
            style={{ cursor: "pointer" }}
          >
            {product.name} - ₹{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

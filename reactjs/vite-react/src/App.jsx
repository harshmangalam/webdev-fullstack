import { useState, useEffect } from "react";
import Product from "./Product";
function App() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const [products, setProducts] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    const newProduct = {
      productName,
      productPrice,
    };

    setProducts([...products, newProduct]);
  }

  return (
    <>
      <div>
        <form method="POST" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="productName">Product Name</label>
            <input
              value={productName}
              type="text"
              id="productName"
              name="productName"
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="productPrice">Product Price</label>
            <input
              value={productPrice}
              type="number"
              id="productPrice"
              name="productPrice"
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>
          <button type="submit">Add</button>
        </form>

        <div>
          <ul>
            {products.map((product) => (
              <>
                <li>
                  <Product
                    productName={product.productName}
                    productPrice={product.productPrice}
                  />
                </li>

                <div>Hello</div>
              </>
            ))}
          </ul>
        </div>
      </div>
      <div>jjsjs</div>
    </>
  );
}

export default App;

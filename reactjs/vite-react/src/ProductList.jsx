import { useContext } from "react";
import { ProductContext } from "./productContext";
import Product from "./Product";
export default function ProductList() {
  const { products } = useContext(ProductContext);
  return (
    <ul>
      {products.map((product, i) => (
        <li key={i}>
          <Product
            productName={product.productName}
            productPrice={product.productPrice}
          />
        </li>
      ))}
    </ul>
  );
}

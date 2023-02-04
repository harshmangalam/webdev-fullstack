import { createContext, useState } from "react";

export const ProductContext = createContext({
  products: [],
});

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

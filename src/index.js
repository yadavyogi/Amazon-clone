import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { AuthProvider } from "./components/context/auth";
import { CartProvider } from "./components/context/cart";
import { ProductsProvider } from "./components/context/product";
import { SearchProvider } from "./components/context/search";

ReactDOM.render(
  <AuthProvider>
    <ProductsProvider>
      <CartProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </CartProvider>
    </ProductsProvider>
  </AuthProvider>,

  document.getElementById("root")
);

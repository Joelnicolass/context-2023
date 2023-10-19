import React, { useState } from "react";
import RootLayout from "./components/layouts/root_layout/root_layout";
import Product from "./components/product/product";
import ListProducts from "./components/list_products/list_products";
import { CartContext, CartProvider } from "./context/cart_context";
import Reducers from "./reducers/reducers";

const products = [
  {
    id: crypto.randomUUID(),
    title: "PAN",
  },
  {
    id: crypto.randomUUID(),
    title: "FACTURAS",
  },
];

const App = () => {
  return (
    <>
      <CartProvider>
        <RootLayout>
          <ListProducts products={products} />
          <Reducers />
        </RootLayout>
      </CartProvider>
    </>
  );
};

export default App;

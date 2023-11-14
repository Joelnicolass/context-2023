import React, { useState } from "react";
import RootLayout from "./components/layouts/root_layout/root_layout";
import Product from "./components/product/product";
import ListProducts from "./components/list_products/list_products";
import { CartContext, CartProvider } from "./context/cart_context";
import Reducers from "./reducers/reducers";

const products = [
  {
    id: "00001",
    title: "PAN",
    price: 200,
  },
  {
    id: "00002",
    title: "FACTURAS",
    price: 100,
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

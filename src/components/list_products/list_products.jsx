import React from "react";
import Product from "../product/product";

const ListProducts = ({ products }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
      }}
    >
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ListProducts;

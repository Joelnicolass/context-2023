import React, { useContext } from "react";
import { useCartContext } from "../../context/cart_context";

const Product = ({ product }) => {
  const { addProduct, removeProduct } = useCartContext();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "150px",
        height: "200px",
        border: "1px solid white",
        borderRadius: "10px",
      }}
    >
      <span>{product.title}</span>
      <div>
        <button
          onClick={() => {
            removeProduct();
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            addProduct();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Product;

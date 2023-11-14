import React from "react";
import { useCartContext } from "../../context/cart_context";

const Product = ({ product }) => {
  const { dispatch, types, state } = useCartContext();

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
            dispatch({
              type: types.REMOVE_PRODUCT_TYPE,
              payload: product,
            });
          }}
        >
          -
        </button>
        <span>{state.products.get(product.id)?.quantity || 0}</span>
        <button
          onClick={() => {
            dispatch({
              type: types.ADD_PRODUCT_TYPE,
              payload: product,
            });
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Product;

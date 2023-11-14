import { createContext, useContext, useReducer, useState } from "react";

// CREA EL CONTEXTO
export const CartContext = createContext();

const ADD_PRODUCT_TYPE = "[products]ADD_PRODUCT_TYPE";
const REMOVE_PRODUCT_TYPE = "[products]REMOVE_PRODUCT_TYPE";
const CLEAR_CART_TYPE = "[products]CLEAR_CART";

const initialState = {
  products: new Map(),
  totalPrice: 0,
  numberOfProducts: 0,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT_TYPE: {
      const newListProducts = structuredClone(state.products);
      const productInList = newListProducts.get(payload.id);

      productInList
        ? productInList.quantity++
        : newListProducts.set(payload.id, { ...payload, quantity: 1 });

      return {
        ...state,
        products: newListProducts,
        totalPrice: state.totalPrice + payload.price,
        numberOfProducts: state.numberOfProducts + 1,
      };
    }
    case REMOVE_PRODUCT_TYPE: {
      const newListProducts = structuredClone(state.products);
      const productInList = newListProducts.get(payload.id);

      if (!productInList) return state;

      productInList.quantity === 1
        ? newListProducts.delete(payload.id)
        : productInList.quantity--;

      return {
        ...state,
        products: newListProducts,
        totalPrice: state.totalPrice - payload.price,
        numberOfProducts: state.numberOfProducts - 1,
      };
    }

    case CLEAR_CART_TYPE:
      return {
        ...state,
        products: new Map(),
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        types: {
          ADD_PRODUCT_TYPE,
          REMOVE_PRODUCT_TYPE,
          CLEAR_CART_TYPE,
        },
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const { state, dispatch, types } = useContext(CartContext);
  return { state, dispatch, types };
};

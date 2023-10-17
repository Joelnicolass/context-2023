import { createContext, useContext, useState } from "react";

// CREA EL CONTEXTO
export const CartContext = createContext();

// CREA EL PROVEEDOR Y PERMITE AISLAR LA LOGICA
export const CarritoProvider = ({ children }) => {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};

// CREA EL CONSUMIDOR
export const useCarritoContext = () => {
  const contexto = useContext(CartContext);
  return contexto;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(0);
  const addProduct = () => setCart(cart + 1);
  const removeProduct = () => setCart(cart - 1);

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const { cart, addProduct, removeProduct } = useContext(CartContext);

  return {
    cart,
    addProduct,
    removeProduct,
  };
};

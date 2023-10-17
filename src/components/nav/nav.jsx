import React, { useContext } from "react";
import { useCartContext } from "../../context/cart_context";

const Nav = () => {
  const { cart } = useCartContext();

  return (
    <nav>
      <div>
        <span>carrito {cart}</span>
      </div>
    </nav>
  );
};

export default Nav;

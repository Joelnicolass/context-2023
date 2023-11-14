import React, { useContext } from "react";
import { useCartContext } from "../../context/cart_context";
import { toCurrency } from "../../extras/currency.utils";

const Nav = () => {
  const { state } = useCartContext();

  return (
    <nav>
      <div>
        <span>
          carrito {state.numberOfProducts} | {toCurrency(state.totalPrice)}
        </span>
      </div>
    </nav>
  );
};

export default Nav;

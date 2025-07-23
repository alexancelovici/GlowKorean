import { useReducer } from "react";
import PropTypes from "prop-types";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";

const CartState = ({ children }) => {
  const initialState = {
    products: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const updateCart = (cartItems) => {
    dispatch({
      type: "SET_CART",
      payload: cartItems,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  return (
    <CartContext.Provider
      value={{
        products: state.products,
        updateCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartState;



const CartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      return { ...state, products: action.payload };
    case "CLEAR_CART":
      return { ...state, products: [] };
    default:
      return state;
  }
};

export default CartReducer;




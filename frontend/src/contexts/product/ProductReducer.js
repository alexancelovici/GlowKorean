const ProductReducer = (globalState, action) => {
  switch (action.type) {
    case "OBTENER_PRODUCTOS":
      return {
        ...globalState,
        products: action.payload
      };
    case "OBTENER_PRODUCTO":
      return {
        ...globalState,
        currentProduct: action.payload
      };
    default:
      return globalState;
  }
};

export default ProductReducer;


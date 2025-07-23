import { useReducer } from "react";
import ProductContext from "./ProductContext";
import ProductReducer from "./ProductReducer";
import axiosClient from "../../config/axios";

const ProductState = (props) => {
  const initialState = {
    products: [],
    currentProduct: {
      _id: null,
      idProd: '',
      name: '',
      img: '',
      price: '',
      description: '',
      slug: '',
    },
  };

  const [globalState, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async () => {
    try {
      const res = await axiosClient.get("/products"); // <- ✅ ruta correcta del backend
      dispatch({
        type: "OBTENER_PRODUCTOS",
        payload: res.data.products, // <- ✅ ajusta al nombre real devuelto por el backend
      });
    } catch (error) {
      console.log("Error cargando productos:", error);
    }
  };

  const setCurrentProduct = (productData) => {
    dispatch({
      type: "OBTENER_PRODUCTO",
      payload: productData,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products: globalState.products,
        currentProduct: globalState.currentProduct,
        getProducts,
        setCurrentProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;

const UserReducer = (globalState, action) => {
  switch (action.type) {
    case "REGISTRO_EXITOSO":
      return {
        ...globalState,
        mensaje: "Usuario creado correctamente",
      };

    case "LOGIN_EXITOSO":
      return {
        ...globalState,
        authStatus: true,
      };

    case "GET_DATA_USER":
      return {
        ...globalState,
        authStatus: true,
        currentUser: action.payload,
      };

    case "LOGOUT_USUARIO":
      return {
        ...globalState,
        currentUser: null,
        authStatus: false,
        msg: action.payload,
      };

    case "GET_CART":
      return {
        ...globalState,
        cart: action.payload,
      };

    case "GET_CHECKOUT_SESSION":
      return {
        ...globalState,
        sessionURL: action.payload,
      };

    case "CHANGE_STATUS_LOADING":
      return {
        ...globalState,
        globalLoading: action.payload,
      };
    default:
      return globalState;
  }
};

export default UserReducer;

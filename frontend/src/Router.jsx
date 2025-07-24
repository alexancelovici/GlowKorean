import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import ProductList from "./components/Product/ProductList";
import SingleProduct from "./components/Product/SingleProduct";
import CreateProduct from "./components/Product/CreateProduct";

import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

import Profile from "./components/Profile";
import Checkout from "./components/Checkout";
import SuccessPage from "./components/Success";
import CancelPage from "./components/Cancel";

import Auth from "./routes/Auth";
import PrivateRoute from "./routes/Private";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="registro" element={<Register />} />
          <Route path="iniciar-sesion" element={<Auth component={Login} />} />
          <Route path="perfil" element={<PrivateRoute component={Profile} />} />
          <Route path="carrito" element={<PrivateRoute component={Checkout} />} />
          <Route path="productos" element={<ProductList />} />
          <Route path="productos/:slug" element={<SingleProduct />} />
          <Route path="admin/crear-producto" element={<CreateProduct />} />
          <Route path="pago-exitoso" element={<SuccessPage />} />
          <Route path="pago-cancelado" element={<CancelPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;




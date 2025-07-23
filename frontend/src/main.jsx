import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Router from "./Router.jsx";
import UserState from "./contexts/user/UserState";
import CartState from "./contexts/cart/CartState";
import ProductState from "./contexts/product/ProductState";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserState>
      <CartState>
        <ProductState>
          <Router />
        </ProductState>
      </CartState>
    </UserState>
  </StrictMode>
);

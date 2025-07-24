import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Router from "./Router.jsx";
import UserState from "./contexts/user/UserState";
import ProductState from "./contexts/product/ProductState";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserState>
        <ProductState>
          <Router />
        </ProductState>
    </UserState>
  </StrictMode>
);

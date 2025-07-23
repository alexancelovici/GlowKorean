// ./src/routes/Auth.js

import { useContext, useEffect } from "react";

import { Navigate } from "react-router-dom";
import UserContext from "../contexts/user/UserContext";

export default function AuthRoute({ component: Component }) {
  const userCtx = useContext(UserContext);
  const { authStatus, verifyingUser } = userCtx;

  useEffect(() => {
    verifyingUser();
  }, [authStatus]);

  return <>{authStatus ? <Navigate replace to="/" /> : <Component />}</>;
}

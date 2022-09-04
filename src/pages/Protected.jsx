import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router";
import Login from "./Login";

function Protected() {
  const { is_auth, user } = useSelector((state) => state.auth);
  return is_auth ? <Outlet /> : <Navigate to="/" />;
}

export default Protected;

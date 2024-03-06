import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const [ok] = useState(true);
  return ok ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;

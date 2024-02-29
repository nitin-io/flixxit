import { useState } from "react";
import { Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const [ok] = useState(true);
  return ok ? <Outlet /> : <h1>Loading...</h1>;
};

export default PrivateRoutes;

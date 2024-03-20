import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const authInfo = useSelector((state) => state.auth);

  useEffect(() => {
    const main = async () => {
      try {
        const response = await axios.get("/auth/verify", {
          headers: {
            Authorization: `bearer ${authInfo.token}`,
          },
        });
        if (response.data.success) {
          console.log(response.data);
          setIsLoggedIn(true);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    if (authInfo?.token) main();
    else setLoading(false);
  }, [authInfo?.token]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;

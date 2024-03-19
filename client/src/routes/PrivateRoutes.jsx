import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
// import axios from "axios";

const PrivateRoutes = () => {
  const [isLoggedIn] = useState(true);

  // Fetch saved jwt from localstorage
  // Check for if token verified

  // useEffect(() => {
  //   try {
  //     const { accessToken } = JSON.parse(localStorage.getItem("auth"));
  //     if (accessToken) {
  //       const response = axios.post(
  //         "/auth/verify",
  //         {},
  //         {
  //           headers: {
  //             Authorization: `Bearer ${accessToken}`,
  //           },
  //         }
  //       );
  //       if (response.data.success) {
  //         setIsLoggedIn(true);
  //       }
  //     } else {
  //       localStorage.removeItem("auth");
  //       redirect("/login");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;

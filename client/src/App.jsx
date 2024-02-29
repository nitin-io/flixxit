import Home from "./pages/Home";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoutes from "./routes/PrivateRoutes";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Watch from "./pages/Watch";
import Header from "./components/Header";
import Banner from "./components/Header/Banner";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Header,
      children: [
        {
          path: "",
          Component: Banner,
        },
        {
          path: "login",
          Component: Login,
        },
        {
          path: "signup",
          Component: SignUp,
        },
      ],
    },
    {
      path: "/home",
      Component: PrivateRoutes,
      children: [
        {
          path: "",
          Component: Home,
        },
        { path: "watch/:id", Component: Watch },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

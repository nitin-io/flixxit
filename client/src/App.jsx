import Home from "./pages/Home";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoutes from "./routes/PrivateRoutes";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Watch from "./pages/Watch";
import Header from "./components/Header";
import Banner from "./components/Header/Banner";
import Payment from "./pages/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "",
        element: <Banner />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
    ],
  },
  {
    path: "/home",
    element: <PrivateRoutes />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      { path: "watch/:id", element: <Watch /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

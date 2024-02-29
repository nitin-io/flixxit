import NavBar from "./NavBar";
import "./Header.css";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <header className="background-image center">
      <NavBar />
      <Outlet />
    </header>
  );
};

export default Header;

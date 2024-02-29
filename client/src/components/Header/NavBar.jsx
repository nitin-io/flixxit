import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h2 className="nav-brand">FLIXXIT</h2>
      </Link>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/signup" className="nav-link">
            Sign Up
          </Link>
          <Link to="/login" className="nav-link">
            Sign In
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

import { useState } from "react";
import { ArrowDropDown, Notifications } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import "./navbar.css";
import { removeCredentials } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const username = useSelector((state) => state.auth?.user?.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  window.onscroll = () => {
    setIsScrolled(!!window.scrollY);
    return () => (window.onscroll = null);
  };

  const handleLogout = () => {
    dispatch(removeCredentials());
    navigate("/");
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <h2 className="nav-brand">FLIXXIT</h2>
          <ul>
            <li>Movies</li>
            <li>Series</li>
            <li>New And Popular</li>
            <li>Watchlist</li>
          </ul>
        </div>
        <div className="right">
          <div className="form-input-div">
            <input
              type="text"
              className="form-input-box"
              placeholder="Search movie or webseries"
              onChange={() => {}}
              required
            />
          </div>
          <Notifications />
          <div>{username}</div>
          <div className="profile">
            <ArrowDropDown />
            <ul className="options">
              <li>Settings</li>
              <li onClick={handleLogout}>Logout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

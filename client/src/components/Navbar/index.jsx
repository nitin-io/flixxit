import { useState } from "react";
import "./navbar.css";
import { ArrowDropDown, Notifications } from "@material-ui/icons";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(!!window.scrollY);
    return () => (window.onscroll = null);
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
          <img
            src="https://avatars.githubusercontent.com/u/76252414?v=4"
            alt="profile"
            width={"40px"}
          />
          <div className="profile">
            <ArrowDropDown />
            <ul className="options">
              <li>Settings</li>
              <li>Logout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

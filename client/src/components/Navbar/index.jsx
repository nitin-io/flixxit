import { useState } from "react";
import "./navbar.css";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";

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
          <img
            src="https://duckduckgo.com/i/0697e8c5.png"
            alt=""
            width={"150px"}
          />
          <ul>
            <li>Homepage</li>
            <li>Movies</li>
            <li>Series</li>
            <li>New And Popular</li>
            <li>Watchlist</li>
          </ul>
        </div>
        <div className="right">
          <Search />
          <span>KID</span>
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

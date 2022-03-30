import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <li className="bir">
        <Link to="/">
          <button>HOME</button>
        </Link>
      </li>
      <li className="bir">
        <Link to="/About">
          <button>ABOUT</button>
        </Link>
      </li>
      <li className="bir">
        <Link to="/Services">
          <button>SERVİCES</button>
        </Link>
      </li>
      <li className="bir">
        <Link to="/Contact">
          <button>CONTACT</button>
        </Link>
      </li>
    </div>
  );
};

export default Navbar;

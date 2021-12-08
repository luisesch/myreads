import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-element">
          <Link to="/">Gallery</Link>
        </li>
        <li className="nav-element">
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

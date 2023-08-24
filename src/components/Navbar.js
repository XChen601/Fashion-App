import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/wardrobe">Wardrobe</Link>
        </li>
        <li>
          <Link to="/welcome">Welcome</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

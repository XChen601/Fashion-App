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
          <Link to="/outfits">Outfits</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

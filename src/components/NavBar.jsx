import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"
function NavBar() {
  return (
    <nav>
      <h1>iPizza 🍕</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/order">Order</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;

import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = (props) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">
        Navbar
      </NavLink>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/cart">
              Shopping Cart
            </NavLink>
          </li>
        </ul>
      </div>
      <span className="badge bg-danger">{props.productsCount}</span>
    </div>
  </nav>
);

export default NavBar;

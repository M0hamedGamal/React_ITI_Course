import React from "react";
import { Link } from "react-router-dom";
const NavBar = (props) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        Navbar
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about-us">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact-us">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shopping-cart">
              Shopping Cart
            </Link>
          </li>
        </ul>
      </div>
      <span className="badge bg-danger">{props.productsCount}</span>
    </div>
  </nav>
);

export default NavBar;

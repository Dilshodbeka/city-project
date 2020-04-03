import React from "react";
import logo from "../../logo.svg";
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tour" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            about
          </a>
        </li>
        <li>
          <a href="/" className="nav-link actuve">
            tour
          </a>
        </li>
      </ul>
    </nav>
  );
}

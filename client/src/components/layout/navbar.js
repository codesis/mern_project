import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-collapse">
          <ul className="navbar-ul">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Hem
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/recept" className="nav-link">
                Recept
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/skapa" className="nav-link">
                Skapa recept
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/om" className="nav-link">
                Om sidan
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/kontakt" className="nav-link">
                Kontakt
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/registrera" className="nav-link">
                Ny användare
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/loggain" className="nav-link">
                Logga in
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

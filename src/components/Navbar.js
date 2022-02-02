import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              <FontAwesomeIcon icon="user" />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
        </ul>
        <form className="d-flex">
          <NavLink to="/create" className="nav-link">
            <button className="btn btn-outline-primary" type="submit">
              Create User
            </button>
          </NavLink>
        </form>
      </div>
    </nav>
  );
}

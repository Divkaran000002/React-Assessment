import React from "react";
import "../App.css";
import "./Nav.css";
// import { Link } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
    <div className="Navbar">
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4">
    <div className="container-fluid" id="insideNav">
      <Link className="navbar-brand text-white" to="/Home">
        <h1>PressCart</h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active text-white" aria-current="page" to="/Home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/Products">
              Top sellers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-white" aria-current="page" to="/Logindetails">
              Sign Up
            </Link>
          </li>
        </ul>
        <li className="nav-item" id="cart">
            <Link className="nav-link active text-white" aria-current="page" to="/Cart">
              Cart
            </Link>
          </li>       
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            input="text"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
</div>

    );
  }
}

export default Navbar;

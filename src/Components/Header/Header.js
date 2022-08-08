import React from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../../assets/black-on-white-transpar-logo.png";
import "./Header.css";

const Header = ({ setBreweries }) => {
  const clearBreweriesContainer = () => setBreweries([]);

  return (
    <header className="header">
      <Link to="/">
        <img className="logo-home" src={logo} alt="Wandering Brewer mountain logo" onClick={() => clearBreweriesContainer()}></img>
      </Link>
      <NavLink to="/favorites" className="favorites-link">Favorites</NavLink>
    </header>
  );
};

export default Header;

Header.propTypes = {
  setBreweries: PropTypes.func.isRequired
};

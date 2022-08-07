import React from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../../assets/black-on-white-transpar-logo.png";
import "./Header.css";

const Header = ({ setBreweries }) => {
  // const date = new Date();
  // const hours = date.getHours();
  // let timeOfDay;

  // const getTimeOfDay = () => {
  //   if (hours < 12) {
  //     timeOfDay = "morning";
  //   } else if (hours >= 12 && hours < 17) {
  //     timeOfDay = "afternoon";
  //   } else {
  //     timeOfDay = "evening";
  //   };
  // };

  // getTimeOfDay();

  const clearBreweriesContainer = () => setBreweries([]);

  return (
    <header className="header">
      <Link to="/">
        <img className="logo-home" src={logo} alt="Wandering Brewer mountain logo" onClick={() => clearBreweriesContainer()}></img>
        {/* <h1 className="app-title">Wandering Brewer</h1> */}
      </Link>
      {/* <p className="greeting">Good {timeOfDay}!</p> */}
      <NavLink to="/favorites" className="favorites-link">Favorites</NavLink>
    </header>
  );
};

export default Header;

Header.propTypes = {
  setBreweries: PropTypes.func.isRequired
};
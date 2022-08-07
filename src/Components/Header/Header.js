import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/black-on-white-transpar-logo.png";
import "./Header.css";

const Header = () => {
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

  return (
    <header className="header">
      <Link to="/" style={{textDecoration: "none"}}>
        <img className="logo-home" src={logo} alt="Wandering Brewer logo"></img>
        {/* <h1 className="app-title">Wandering Brewer</h1> */}
      </Link>
      {/* <p className="greeting">Good {timeOfDay}!</p> */}
      <Link to="/favorites" style={{textDecoration: "none"}}>
        <p className="favorites-link">Favorites</p>
      </Link>
    </header>
  );
};

export default Header;
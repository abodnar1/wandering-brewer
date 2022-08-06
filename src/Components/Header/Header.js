import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {

  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "evening";
  };

  return (
    <header className="header">
      <Link to="/">
        <h1 className="app-title">Wandering Brewer</h1>
      </Link>
      <p className="greeting">Good {timeOfDay}!</p>
      <Link to="/favorites">
        <p className="favorites-link">Favorites</p>
      </Link>
    </header>
  );
};

export default Header;

// will need to wrap h1 in a Link without textDecoration for "/"
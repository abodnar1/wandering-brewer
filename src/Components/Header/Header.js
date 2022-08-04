import React from "react";
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
      <h1 className="app-title">Wandering Brewer</h1>
      <p className="greeting">Good {timeOfDay}!</p>
    </header>
  );
};

export default Header;
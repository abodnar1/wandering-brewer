import React from "react";
import PropTypes from "prop-types";
import "./BreweryCard.css";

const BreweryCard = ({ name, city, state }) => {
  return (
    <div className="brewery-card-wrapper">
      <h2 className="brewery-name">{name}</h2>
      <p className="brewery-location">{city}, {state}</p>
    </div>
  );
};

export default BreweryCard;

BreweryCard.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired
}
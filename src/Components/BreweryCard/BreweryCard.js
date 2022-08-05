import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./BreweryCard.css";

const BreweryCard = ({ id, name, city, state }) => {
  return (
    // <Link to={`/${id}`}>
      <div className="brewery-card-wrapper">
        <h2 className="brewery-name">{name}</h2>
        <p className="brewery-location">{city}, {state}</p>
      </div>
    // </Link>
  );
};

export default BreweryCard;

BreweryCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired
};

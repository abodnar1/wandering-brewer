import React from "react";
import PropTypes from "prop-types";
import "./Breweries.css";
import BreweryCard from "../BreweryCard/BreweryCard";

const Breweries = ({ breweries }) => {

  const breweriesByCity = breweries.map(brewery => {
    return (
      <BreweryCard 
        id={brewery.id}
        key={brewery.id}
        name={brewery.name}
        city={brewery.city}
        state={brewery.state}
      />
    );
  });

  return (
    <div className="breweries-container">
      {breweriesByCity}
    </div>
  );
};

export default Breweries;

Breweries.propTypes = {
  breweries: PropTypes.arrayOf(
    PropTypes.shape({
      // id: PropTypes.string,
      name: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
    })
  )
};
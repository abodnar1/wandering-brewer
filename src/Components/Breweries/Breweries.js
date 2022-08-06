import React from "react";
import PropTypes from "prop-types";
import "./Breweries.css";
import BreweryCard from "../BreweryCard/BreweryCard";

const Breweries = ({ breweries, error, setFavorites }) => {

  const breweriesByCity = breweries.map(brewery => {
    return (
      <BreweryCard 
        id={brewery.id}
        key={brewery.id}
        name={brewery.name}
        city={brewery.city}
        state={brewery.state}
        type={brewery.brewery_type}
        isFavorite={brewery.isFavorite}
        setFavorites={setFavorites}
      />
    );
  });

  return (
    <div className="breweries-container">
      {!error ? breweriesByCity : <p className="error-message">{error}</p>}
    </div>
  );
};

export default Breweries;

Breweries.propTypes = {
  error: PropTypes.string,
  breweries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      type: PropTypes.string,
      isFavorite: PropTypes.bool.isRequired,
      setFavorites: PropTypes.func
    })
  )
};

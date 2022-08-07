import React from "react";
import PropTypes from "prop-types";
import "./Breweries.css";
import BreweryCard from "../BreweryCard/BreweryCard";

const Breweries = ({ breweries, favorites, setFavorites }) => {

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
        image={brewery.image}
        favorites={favorites}
        setFavorites={setFavorites}
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
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      type: PropTypes.string,
      isFavorite: PropTypes.bool.isRequired,
      image: PropTypes.string
    })
  ),
  favorites: PropTypes.array,
  setFavorites: PropTypes.func.isRequired
};

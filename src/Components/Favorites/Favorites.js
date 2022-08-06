import React from "react";
import PropTypes from "prop-types";
import "./Favorites.css";
import BreweryCard from "../BreweryCard/BreweryCard";

const Favorites = ({ favorites, setFavorites, error }) => {

  const favoriteBreweries = favorites.map(favorite => {
    return (
      <BreweryCard 
        id={favorite.id}
        key={favorite.id}
        name={favorite.name}
        city={favorite.city}
        state={favorite.state}
        type={favorite.brewery_type}
        isFavorite={favorite.isFavorite}
        setFavorites={setFavorites}
      />
    );
  });

  return (
    <div className="favorites-container">
      {!error ? favoriteBreweries : <p className="error-message">{error}</p>}
    </div>
  );
};

export default Favorites;

// prop types here
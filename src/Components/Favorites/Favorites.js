import React from "react";
import PropTypes from "prop-types";
import "./Favorites.css";
import FavoriteCard from "../FavoriteCard/FavoriteCard";

const Favorites = ({ favorites, setFavorites }) => {

  const favoriteBreweries = favorites.map(favorite => {
    return (
      <FavoriteCard 
        id={favorite.id}
        key={favorite.id}
        name={favorite.name}
        city={favorite.city}
        state={favorite.state}
        type={favorite.brewery_type}
        isFavorite={favorite.isFavorite}
      />
    );
  });

  return (
    <div className="favorites-container">
      {favorites.length ? favoriteBreweries : <h3 className="no-favorites-message">No favorites yet!</h3>}
    </div>
  );
};

export default Favorites;

// prop types here
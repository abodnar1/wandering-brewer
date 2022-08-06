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
        type={favorite.type}
        isFavorite={favorite.isFavorite}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    );
  });

  return (
    <div className="favorites-container">
      {favorites.length ? favoriteBreweries : <h3 className="no-favorites-message">You haven't added any favorites yet!</h3>}
    </div>
  );
};

export default Favorites;

Favorites.propTypes = {
  setFavorites: PropTypes.func,
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      type: PropTypes.string,
      isFavorite: PropTypes.bool.isRequired,
      favorites: PropTypes.array,
      setFavorites: PropTypes.func
    })
  )
};
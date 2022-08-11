import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
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
        image={favorite.image}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    );
  });

  return (
    <>
      <div className="back-to-search-link-favorites">
        <Link to="/" style={{"textDecoration": "none"}}>
           <span className="back-to-search">back to search</span>
        </Link>
      </div>
        {!favorites.length && <p className="no-favorites-message">You haven't added any favorites yet!</p>}
      <div className="favorites-container">
        {favoriteBreweries}
      </div>
    </>
  );
};

export default Favorites;

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(
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
    setFavorites: PropTypes.func
};

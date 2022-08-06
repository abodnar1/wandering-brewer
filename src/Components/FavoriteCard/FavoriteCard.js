import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./FavoriteCard.css";

const FavoriteCard = ({ id, name, city, state, type, isFavorite, favorites, setFavorites }) => {

  const removeFavorite = (e, id) => {
    e.preventDefault();
    isFavorite = false;
    const updatedFavorites = favorites.filter(favorite => favorite.id !== id);
    setFavorites(updatedFavorites);
  };

  return (
    <Link to={`/${id}`} style={{textDecoration: "none"}}>
      <div className="favorite-card-wrapper">
        <button className="remove-favorite-button" onClick={(e) => removeFavorite(e, id)}>Remove</button>
        <h2 className="favorite-name">{name}</h2>
        <p className="favorite-location">{city}, {state}</p>
        <div className="favorite-type">
          <p className="favorite-type">Type: {type}</p>
        </div>
      </div>
    </Link>
  );
};

export default FavoriteCard;

FavoriteCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  type: PropTypes.string,
  isFavorite: PropTypes.bool.isRequired,
  favorites: PropTypes.array,
  setFavorites: PropTypes.func,
};
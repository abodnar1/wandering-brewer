import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaTrash } from 'react-icons/fa';
import "./FavoriteCard.css";

const FavoriteCard = ({ id, name, city, state, type, isFavorite, image, favorites, setFavorites }) => {

  const removeFavorite = (e, id) => {
    e.preventDefault();
    isFavorite = false;
    const updatedFavorites = favorites.filter(favorite => favorite.id !== id);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="favorite-card-wrapper">
      <h2 className="favorite-name">{name}</h2>
      <p className="favorite-location">{city}, {state}</p>
      <Link to={`/${id}`} style={{textDecoration: "none"}}>
        <p className="view-details-link">View details</p>
      </Link>
      <div className="favorite-image-container">
        <img className="favorite-type-image" src={image} alt={type}></img>
      </div>
      <span className="remove-favorite-button" onClick={(e) => removeFavorite(e, id)}><FaTrash /></span>
    </div>
  );
};

export default FavoriteCard;

FavoriteCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  type: PropTypes.string,
  isFavorite: PropTypes.bool,
  image: PropTypes.string,
  favorites: PropTypes.array,
  setFavorites: PropTypes.func.isRequired
};

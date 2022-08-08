import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BiBeer } from "react-icons/bi";
import { FaBeer } from 'react-icons/fa';
import "./BreweryCard.css";

const BreweryCard = ({ id, name, city, state, type, isFavorite, image, favorites, setFavorites }) => {
  const [favoriteIcon, setFavoriteIcon] = useState(false);

  useEffect(() => {
    setFavoriteIcon(favorites.find(favoriteCard => favoriteCard.id === id))
  }, [favorites, id]);

  const addFavorite = (e) => {
    e.preventDefault();

    const newFavorite = {
      id,
      name,
      city,
      state,
      type,
      isFavorite: true,
      image,
      setFavorites
    };

    setFavoriteIcon(true);
    setFavorites([...favorites, newFavorite]);
  };

  const removeFavorite = (e, id) => {
    e.preventDefault();
    isFavorite = false;
    setFavoriteIcon(false);
    const updatedFavorites = favorites.filter(favorite => favorite.id !== id);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="brewery-card-wrapper">
      <div className="favorite-icon-container">
        {favoriteIcon ? <span className="favorite-icon" onClick={(e) => removeFavorite(e, id)}><FaBeer className="full-beer-icon"/></span> 
        : 
        <span className="favorite-icon" onClick={(e) => addFavorite(e)}><BiBeer className="empty-beer-icon"/></span>
        }
      </div>
      <h2 className="brewery-name">{name}</h2>
      <p className="brewery-location">{city}, {state}</p>
      <div className="brewery-image-container">
        <img className="brewery-type-image" src={image} alt={type}></img>
      </div>
      <Link to={`/${id}`} style={{textDecoration: "none"}}>
       <p className="view-details-link">View details</p>
      </Link>
    </div>
  );
};

export default BreweryCard;

BreweryCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  type: PropTypes.string,
  isFavorite: PropTypes.bool.isRequired,
  image: PropTypes.string,
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
  setFavorites: PropTypes.func.isRequired
};

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BiBeer } from "react-icons/bi";
import { FaBeer } from 'react-icons/fa';
import "./BreweryCard.css";

const BreweryCard = ({ id, name, city, state, type, isFavorite, favorites, setFavorites }) => {
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
      setFavorites
    };
    setFavoriteIcon(true)
    setFavorites([...favorites, newFavorite]);
  };

  const removeFavorite = (e, id) => {
    e.preventDefault();
    isFavorite = false;
    setFavoriteIcon(false)
    const updatedFavorites = favorites.filter(favorite => favorite.id !== id);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="brewery-card-wrapper">
      <h2 className="brewery-name">{name}</h2>
      <p className="brewery-location">{city}, {state}</p>
      {/* <div className="brewery-type"> */}
        {/* <p className="brewery-type">Type: {type}</p>
      </div> */}
      {favoriteIcon ? <span className="favorite-icon" onClick={(e) => removeFavorite(e, id)}><FaBeer className="full-beer-icon"/></span> 
      : 
      <span className="favorite-icon" onClick={(e) => addFavorite(e)}><BiBeer className="empty-beer-icon"/></span>}
      {/* <span className="favorite-icon" onClick={(e) => addFavorite(e)}><AiOutlineHeart className="add-heart"/></span> */}
      {/* <button className="add-favorite-button" disabled={isFavorite} onClick={(e) => addFavorite(e)}>Add to Favorites</button> */}
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
  isFavorite: PropTypes.bool,
  favorites: PropTypes.array,
  setFavorites: PropTypes.func
};

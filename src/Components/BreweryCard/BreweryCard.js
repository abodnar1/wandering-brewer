import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./BreweryCard.css";
import Favorites from "../Favorites/Favorites";

const BreweryCard = ({ id, name, city, state, type, isFavorite, setFavorites }) => {

  const addFavorite = (e, id) => {
    e.preventDefault();

    console.log("toggle me baby")
    console.log("id", id)
    console.log("before", isFavorite)

    isFavorite = true;
    const newFavorite = {
      id,
      name,
      city,
      state,
      type,
      isFavorite,
      setFavorites
    }

    setFavorites(favorites => [...favorites, newFavorite]);
        
    console.log("after", isFavorite)
    console.log("favorites", newFavorite)
    // toggle between add and remove favorite
    // update the favorites array
  }

  return (
    <Link to={`/${id}`} style={{textDecoration: "none"}}>
      <div className="brewery-card-wrapper">
        <button className="favorite-button" onClick={(e) => addFavorite(e, id)}>FAVORITE</button>
        <h2 className="brewery-name">{name}</h2>
        <p className="brewery-location">{city}, {state}</p>
        <div className="brewery-type">
          <p className="brewery-type">Type: {type}</p>
        </div>
      </div>
    </Link>
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
  setFavorites: PropTypes.func
};

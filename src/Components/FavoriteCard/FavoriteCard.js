import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./FavoriteCard.css";

const FavoriteCard = ({ id, name, city, state, type }) => {

  return (
    <Link to={`/${id}`} style={{textDecoration: "none"}}>
      <div className="favorite-card-wrapper">
        {/* <button className="add-favorite-button" onClick={(e) => addFavorite(e)}>Favorite</button> */}
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

// need to add a delete function to this component
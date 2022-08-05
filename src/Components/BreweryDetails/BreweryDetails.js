import React from "react";
import "./BreweryDetails.css";

const BreweryDetails = ({ breweryToView }) => {

  return (
    <div className="brewery-details-container">

      <h2 className="brewery-details-name">{breweryToView.name}</h2>

      <div className="details-wrapper">

        <div className="type-and-favorite-wrapper">
          <p className="brewery-type">TYPE: MICRO </p>
          <button className="favorite-button">FAV BUTTON</button>
        </div>

        <div className="contact-info-wrapper">
          <p className="brewery-location">LOCATION</p>
          <p className="phone">PHONE NUMBER</p>
          <p className="website-link">Visit the page</p>
          <p className="last-updated">LAST UPDATED: DATE</p>
        </div>

      </div>

    </div>
  );
};

export default BreweryDetails;

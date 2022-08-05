import React from "react";
import "./BreweryDetails.css";

const BreweryDetails = ({ breweryToView }) => {

  const formatLocation = (city, state, zip) => {
    if (!zip) {
      return `${city}, ${state}`;
    } else {
      return `${city}, ${state} ${zip}`;
    };
  };
  
  const formatPhone = (phone) => {
    if (phone) {
      return `${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6, 10)}`;
    } else {
      return "";
    };
  };

  const formatLastUpdated = (date) => {
    let lastUpdatedDate = new Date(date);
    let options = {year: "numeric", month: "short", day: "numeric"};
    return lastUpdatedDate.toLocaleString("en-us", options)
  }

  return (
    <div className="brewery-details-container">
      <h2 className="brewery-details-name">{breweryToView.name}</h2>
      <div className="details-wrapper">
        <div className="type-and-favorite-wrapper">
          <p className="brewery-type">Type: {breweryToView.brewery_type}</p>
          <button className="favorite-button">FAV BUTTON</button>
        </div>
        <div className="contact-info-wrapper">
          {breweryToView.street && <p className="street">{breweryToView.street}</p>}
          <p className="brewery-location">{formatLocation(breweryToView.city, breweryToView.state, breweryToView.zip)}</p>
          {breweryToView.phone && <a className="phone" href={"tel:" + breweryToView.phone}>Phone: {formatPhone(breweryToView.phone)}</a>}
          <br/>
          <br/>
          {breweryToView.website_url && <a className="website-link" href={breweryToView.website_url}>Visit website</a>}
          <p className="last-updated">Updated: {formatLastUpdated(breweryToView.updated_at)}</p>
        </div>
      </div>
    </div>
  );
};

export default BreweryDetails;

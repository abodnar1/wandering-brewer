import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
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
    return lastUpdatedDate.toLocaleString("en-us", options);
  };

  return (
    <div className="brewery-details-container">
      <div className="back-to-search-link">
        <Link to="/" style={{"textDecoration": "none"}}>
           <span className="back-to-search">back to search</span>
        </Link>
      </div>
      <div className="details-wrapper">
        <div className="details-header">
          <h2 className="brewery-name">{breweryToView.name}</h2>
        </div>
        <div className="details-image-container">
         <img className="details-image" src={breweryToView.image} alt={breweryToView.type}></img>
        </div>
        <div className="details-type-contact-container">
          <div className="type-updated-wrapper">
            <p className="brewery-type">{breweryToView.brewery_type}</p>
            <p className="last-updated">{formatLastUpdated(breweryToView.updated_at)}</p>
          </div>
          <div className="contact-info-wrapper">
            <div className="address">
              {breweryToView.street && <p className="street">{breweryToView.street}</p>}
              <p className="city-state">{formatLocation(breweryToView.city, breweryToView.state, breweryToView.zip)}</p>
            </div>
            <div className="phone-website">
              {breweryToView.phone && <a className="phone" href={"tel:" + breweryToView.phone}>Phone: {formatPhone(breweryToView.phone)}</a>}
              <br/>
              {breweryToView.website_url && <a className="website-link" href={breweryToView.website_url}>Visit website</a>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreweryDetails;

BreweryDetails.propTypes = {
  breweryToView: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    type: PropTypes.string,
    isFavorite: PropTypes.bool.isRequired,
    image: PropTypes.string
  })
};

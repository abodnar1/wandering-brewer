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
      <Link to="/">
        <div className="back-to-search-link">back to search</div>
      </Link>
      <div className="brewery-details-wrapper">
        <div className="brewery-detail-header">
          <h2 className="brewery-details-name">{breweryToView.name}</h2>
        </div>
        <div className="brewery-details-image-container">
         <img className="brewery-details-image" src={breweryToView.image} alt={breweryToView.type}></img>
        </div>
        <div className="brewery-type-and-contact-wrapper">
          <div className="brewery-type-updated-wrapper">
            <p className="brewery-type">Brewery Type: {breweryToView.brewery_type}</p>
            <p className="last-updated">Updated: {formatLastUpdated(breweryToView.updated_at)}</p>
          </div>
          <div className="contact-info-wrapper">
            {breweryToView.street && <p className="street">Address: <br/> {breweryToView.street}</p>}
            <p className="brewery-location">City, State: <br/> {formatLocation(breweryToView.city, breweryToView.state, breweryToView.zip)}</p>
            <br/>
            {breweryToView.phone && <a className="phone" href={"tel:" + breweryToView.phone}>Phone: {formatPhone(breweryToView.phone)}</a>}
            <br/>
            {breweryToView.website_url && <a className="website-link" href={breweryToView.website_url}>Visit website</a>}
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

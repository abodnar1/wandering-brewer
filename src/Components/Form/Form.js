import React, { useState } from "react";
import PropTypes from "prop-types";
import { fetchBreweriesByCity } from "../../apiCalls";
import { getCleanData } from "../../utilities"
import "./Form.css";

const Form = ({ breweries, setBreweries, error, setError }) => {
  const [city, setCity] = useState("");

  const handleClick = (e) => {  
    e.preventDefault();
    
    fetchBreweriesByCity(city)
      .then(data => {
        if (data.length === 0) {
          setBreweries([]);
          setError("Oops, check your spelling and try again!");
        } else {
          setError("");
          const cleanData = getCleanData(data);
          setBreweries(cleanData);
        }
      })
      .catch(err => {
        setError(`Oops! Something went wrong. ${err.message}. Please try again.`)
      });

    clearForm();
  };

  const clearForm = () => {
    setCity("");
  };

  return (
    <div className="form-container">
      <p className="site-info">
        This app was designed for beer lovers who are looking<br/>
        to keep tabs on their favorite breweries while traveling.<br/>
        Start by typing in the city you're visiting to see what's around!
      </p>
      <form>
        <input className="city-search" 
          type="text"
          name="city"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="search-button" disabled={!city} onClick={(e) => handleClick(e)}>Search</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {!error && breweries.length === 0 && <h3 className="no-search-results-message">Start looking for breweries in your area!</h3>}
    </div>
  );
};

export default Form;

Form.propTypes = {
  setBreweries: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired
}

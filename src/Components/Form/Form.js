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
        const cleanData = getCleanData(data)
        setBreweries(cleanData)
      })
      .catch(err => {
        setError("Oops! Something went wrong. Please try again")
      });

    clearForm();
  };

  const clearForm = () => {
    setCity("");
  };

  return (
    <div className="form-container">
      <h2 className="site-info">Type in any city in the US!</h2>
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
      {breweries.length === 0 && <h3 className="no-search-results-message">Choose a city to search!</h3>}
    </div>
  );
};

export default Form;

Form.propTypes = {
  setBreweries: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired
}

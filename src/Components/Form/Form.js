import React, { useState } from "react";
import PropTypes from "prop-types";
import { fetchBreweriesByCity } from "../../apiCalls";
import { getCleanData, getBreweryTypeImage } from "../../utilities";
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
          const cleanDataWithImages = getBreweryTypeImage(cleanData);
          setBreweries(cleanDataWithImages);
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
        This app was designed for the wandering brewer who is looking<br/>
        to keep tabs on their favorite breweries while traveling.<br/>
       Type in a city to see what's around!
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
    </div>
  );
};

export default Form;

Form.propTypes = {
  breweries: PropTypes.array.isRequired,
  setBreweries: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  setError: PropTypes.func.isRequired
};

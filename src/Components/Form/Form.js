import React, { useState } from "react";
import PropTypes from "prop-types";
import { fetchBreweriesByCity } from "../../apiCalls";
import { getCleanData } from "../../utilities"
import "./Form.css";

const Form = ({ setBreweries, setError }) => {
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
    <form>
      <p className="site-info">Which city are you in? Type in a city below & see which breweries are in your area!</p>
      <input className="city-search" 
        type="text"
        name="city"
        placeholder="City"
        required
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="search-button" onClick={(e) => handleClick(e)}>Search</button>
    </form>
  );
};

export default Form;

Form.propTypes = {
  setBreweries: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired
}

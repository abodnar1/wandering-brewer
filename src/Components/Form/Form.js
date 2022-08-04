import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [city, setCity] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    console.log("hiiiii")

    clearForm();
  }

  const clearForm = () => {
    setCity("");
  };

  return (
    <form>
      <p className="site-info">A blurb about how to interact with the site</p>
      <input className="city-search" 
        type="text"
        name="city"
        placeholder="city"
        required
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="search-button" onClick={(e) => handleClick(e)}>Search</button>
    </form>
  );
};

export default Form;

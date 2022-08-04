import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <form>
      <p className="site-info">A blurb about how to interact with the site</p>
      <input className="state-search" 
        type="text"
        name="state"
        placeholder="State"
      />
      <button className="search-button">Search</button>
    </form>
  );
};

export default Form;

import React, { useEffect, useState } from "react";
// import { Route } from "react-router-dom";
import "./App.css";
import "../../apiCalls";
import Header from "../Header/Header";
import Form from "../Form/Form";
import Breweries from "../Breweries/Breweries";
import { fetchBreweriesByCity } from "../../apiCalls";

const App = () => {
  const [breweries, setBreweries] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBreweriesByCity()
    .then(data => setBreweries(data))
    .catch(err => {
      setError("Oops! Something went wrong. Please try again")
      // console.log(err.message);
    })
  }, []);

  return (
    <div className="app">
      <Header />
      <Form />
      {!error ? <Breweries breweries={breweries} /> 
      : 
      <p className="error-message">{error}</p>}
    </div>
  );
};

export default App;

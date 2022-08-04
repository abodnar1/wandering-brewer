import React, { useState } from "react";
// import { Route } from "react-router-dom";
import "./App.css";
// import "../../apiCalls";
import Header from "../Header/Header";
import Form from "../Form/Form";
import Breweries from "../Breweries/Breweries";

const App = () => {
  const [breweries, setBreweries] = useState([]);
  const [error, setError] = useState("");

  return (
    <div className="app">
      <Header />
      <Form breweries={breweries} setBreweries={setBreweries} setError={setError}/>
      {!error ? <Breweries breweries={breweries} /> 
      : 
      <p className="error-message">{error}</p>}
    </div>
  );
};

export default App;

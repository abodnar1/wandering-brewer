import React, { useEffect, useState } from "react";
// import { Route } from "react-router-dom";
import "./App.css";
// import { mockDataSavannah } from "../../mockDataSavannah";
import Header from "../Header/Header";
import Form from "../Form/Form";
import Breweries from "../Breweries/Breweries";

const App = () => {
  const [breweries, setBreweries] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetch("https://api.openbrewerydb.org/breweries?by_city=lancaster")
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        return setErrorMessage("There was an error, please try again")
      }
    })
    .then(data => setBreweries(data))
    .catch(err => setErrorMessage(err.message))
  }, []);

  return (
    <div className="app">
      <Header />
      <Form />
      {!errorMessage ? <Breweries breweries={breweries} /> 
      : 
      <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default App;

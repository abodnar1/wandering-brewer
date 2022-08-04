import React, { useEffect, useState } from "react";
// import { Route } from "react-router-dom";
import "./App.css";
// import { mockDataSavannah } from "../../mockDataSavannah";
import Header from "../Header/Header";
import Form from "../Form/Form";
import Breweries from "../Breweries/Breweries";
import BreweryDetails from "../BreweryDetails/BreweryDetails";

const App = () => {
  const [breweries, setBreweries] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetch("https://api.openbrewerydb.org/breweries?by_city=savannah")
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
    <div className="App">
      <Header />
      <Form />
      <Breweries breweries={breweries} />
      <BreweryDetails />
    </div>
  );
};

export default App;

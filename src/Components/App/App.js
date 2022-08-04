import React from "react";
// import { Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Form from "../Form/Form";
import Breweries from "../Breweries/Breweries";
import BreweryDetails from "../BreweryDetails/BreweryDetails";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Form />
      <Breweries />
      <BreweryDetails />
    </div>
  );
};

export default App;

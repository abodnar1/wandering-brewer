import React, { useState } from "react";
// import { Route } from "react-router-dom";
import "./App.css";
import { mockDataSavannah } from "../../mockDataSavannah";
import Header from "../Header/Header";
import Form from "../Form/Form";
import Breweries from "../Breweries/Breweries";
import BreweryDetails from "../BreweryDetails/BreweryDetails";

const App = () => {
  const [breweries, setBreweries] = useState(mockDataSavannah)
  console.log(mockDataSavannah);

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

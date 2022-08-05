import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Form from "../Form/Form";
import Breweries from "../Breweries/Breweries";
import BreweryDetails from "../BreweryDetails/BreweryDetails";

const App = () => {
  const [breweries, setBreweries] = useState([]);
  const [error, setError] = useState("");

  return (
    <div className="app">
      <Route exact path="/">
        <Header />
        <Form breweries={breweries} setBreweries={setBreweries} setError={setError}/>
        <Breweries breweries={breweries} error={error}/>
      </Route>

      <Route 
        exact path="/:id"
        render={({ match }) => <BreweryDetails />}>
      </Route>
    </div>
  );
};

export default App;

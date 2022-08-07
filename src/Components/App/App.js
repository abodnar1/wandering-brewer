import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Form from "../Form/Form";
import Breweries from "../Breweries/Breweries";
import BreweryDetails from "../BreweryDetails/BreweryDetails";
import Favorites from "../Favorites/Favorites";

const App = () => {
  const [breweries, setBreweries] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState("");

  return (
    <div className="app">
      <Header setBreweries={setBreweries} />
      
      <Switch>
        <Route exact path="/">
          <Form breweries={breweries} setBreweries={setBreweries} error={error} setError={setError} />
          <Breweries breweries={breweries} error={error} favorites={favorites} setFavorites={setFavorites} />
        </Route>

        <Route path="/favorites">
          <Favorites favorites={favorites} setFavorites={setFavorites} />
        </Route>
        
        <Route path="/:id"
          render={({ match }) => {
            const breweryToView = breweries.find(brewery => brewery.id === match.params.id);
            return <BreweryDetails breweryToView={breweryToView}/>
          }}>
        </Route>
        
      </Switch>
    </div>
  );
};

export default App;

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
      <Header />
      
      <Switch>
        <Route exact path="/">
          <Form breweries={breweries} setBreweries={setBreweries} setError={setError} />
          <Breweries breweries={breweries} error={error} setFavorites={setFavorites} />
          <Favorites favorites={favorites} setFavorites={setFavorites}error={error} />
        </Route>

        <Route path="/:id"
          render={({ match }) => {
            const breweryToView = breweries.find(brewery => brewery.id === match.params.id);
            return <BreweryDetails breweryToView={breweryToView}/>
          }}>
        </Route>
        
        {/* <Route path="/favorites">
          <Favorites favorites={favorites} error={error} />
        </Route> */}
      </Switch>
    </div>
  );
};

export default App;

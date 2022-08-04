import React from "react";
// import { Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Form from "../Form/Form";
import Breweries from "../Breweries/Breweries";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Form />
      <Breweries />
    </div>
  );
};

export default App;

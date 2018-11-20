import React, { Component } from "react";
import "normalize.css";
import CardsView from "./Components/CardsView";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="/"component={CardsView} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

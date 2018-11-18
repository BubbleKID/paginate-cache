import React, { Component } from "react";
import CardsView from "./Components/CardsView";
import TemporaryDrawer from "./Components/TemporaryDrawer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardsView />
        <TemporaryDrawer />
      </div>
    );
  }
}

export default App;

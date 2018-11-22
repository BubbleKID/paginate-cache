import React, { Component } from "react";
import "normalize.css";
import Cards from "../Cards/Cards";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import CardsReducer from "../../Reducers/CardsReducer";
import CardDrawer from "../CardDrawer/CardDrawer";

const store = createStore(
  CardsReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

class App extends Component {
  render() {
    return (
      <Provider store={store} className="App">
        <BrowserRouter>
          <div>
            <Route path="/" component={Cards} />
            <Route path="/card/:number" component={CardDrawer} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

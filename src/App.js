import React, { Component } from "react";
import "normalize.css";
import CardsView from "./Components/CardsView";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

const innitialState = {
  cards: [],
  token: "",
  totalPage: 0
};

function reducer(state = innitialState, action) {
  switch (action.type) {
    case "SET_CARDS":
      return {
        cards: action.cards,
        totalPage: action.totalPage
      };
    case "SET_TOKEN":
      return {
        token: action.token
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log("store changed", store.getState());
});

class App extends Component {
  render() {
    return (
      <Provider store={store} className="App">
        <BrowserRouter>
          <Route path="/" component={CardsView} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

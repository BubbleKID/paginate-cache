import React, { Component } from "react";
import "normalize.css";
import CardsView from "../CardsView/CardsView";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import CardsViewReducer from "../../Reducers/CardsView";
import TemporaryDrawer from "../TemporaryDrawer/TemporaryDrawer";

const store = createStore(
  CardsViewReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

console.log(store.getState());

class App extends Component {
  render() {
    return (
      <Provider store={store} className="App">
        <BrowserRouter>
          <div>
            <Route path="/" component={CardsView} />
            <Route
              path="/card/:number"         
              component={TemporaryDrawer}
            />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

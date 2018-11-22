import React from "react";
import { shallow } from "enzyme";
import Card from "./Card.js";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

describe("Card", () => {
  it("should render correctly", () => {
    expect(
      shallow(
        <Provider store={store}>
          <Card />
        </Provider>
      )
    ).toBeTruthy;
  });
});

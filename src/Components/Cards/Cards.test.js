import React from "react";
import { shallow } from "enzyme";
import Cards from "./Cards";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

describe("Cards", () => {
  it("should render correctly", () => {
    expect(
      shallow(
        <Provider store={store}>
          <Cards />
        </Provider>
      )
    ).toBeTruthy;
  });
});

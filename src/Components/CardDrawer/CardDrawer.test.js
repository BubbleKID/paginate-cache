import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import CardDrawer from "./CardDrawer.js";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

describe("CardDrawer", () => {
  it("should render correctly", () => {
    expect(
      shallow(
        <Provider store={store}>
          <CardDrawer />
        </Provider>
      )
    ).toBeTruthy;
  });
});

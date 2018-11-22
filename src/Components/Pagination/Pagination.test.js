import React from "react";
import { shallow } from "enzyme";
import Pagination from "./Pagination";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

describe("Pagination", () => {
  it("should render correctly", () => {
    expect(
      shallow(
        <Provider store={store}>
          <Pagination />
        </Provider>
      )
    ).toBeTruthy;
  });
});

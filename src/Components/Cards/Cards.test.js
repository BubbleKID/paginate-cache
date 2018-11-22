import React from "react";
import { mount, shallow } from "enzyme";
import Cards from "./Cards";
import { Provider } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import configureMockStore from "redux-mock-store";
import { spy } from 'sinon';
import { assert } from 'chai';

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

describe("Cards", () => {
  it("should show loading sign when isLoading is true", () => {
    expect(
      shallow(
        <Provider store={store} isLoading={true}>
          <Cards>
            <CircularProgress />
          </Cards>
        </Provider>
      )
    ).toBeTruthy;
  });
});

describe("Cards", () => {
  it("should show call componentDidMount when component is mounted", () => {
    const componentDidMountSpy = spy(Cards.prototype, "componentDidMount");
    const PROPS = {
      totalPage: 200,
    };
    const wrapper = mount(
      <Provider store={store} totalPage={200} isLoading={true}>
        <Cards {...PROPS}>
        <CircularProgress />
      </Cards>
    </Provider>);

    assert.ok(Cards.prototype.componentDidMount.calledOnce);

    componentDidMountSpy.restore();
  });
});

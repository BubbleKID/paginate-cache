import React from "react";
import { shallow } from "enzyme";
import CardsView from "../Components/CardsView";
describe("CardsView", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<CardsView debug />);
    expect(component).toMatchSnapshot();
  });
});

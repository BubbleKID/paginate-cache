import React from "react";
import { shallow } from "enzyme";
import CardsView from "../Components/CardsView";
describe("CardsView", () => {
  it('should render correctly', () => {
    const component = shallow(<CardsView />);
    expect(component).toMatchSnapshot();
  });
});

import React from "react";
import { shallow } from "enzyme";
import Cards from "../Components/Cards";
describe("CardsView", () => {
  it('should render correctly', () => {
    const component = shallow(<Cards />);
    expect(component).toMatchSnapshot();
  });
});

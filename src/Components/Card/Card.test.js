import React from "react";
import { shallow } from "enzyme";
import Card from "../Components/Card";
describe("Card", () => {
  it("should render correctly", () => {
    const component = shallow(<Card />);
    expect(component).toMatchSnapshot();
  });
});

import React from "react";
import { shallow } from "enzyme";
import CardDrawer from "../Components/CardDrawer";
describe("TemporaryDrawer", () => {
  it("should render correctly", () => {
    const component = shallow(<CardDrawer />);
    expect(component).toMatchSnapshot();
  });
});

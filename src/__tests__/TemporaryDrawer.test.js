import React from "react";
import { shallow } from "enzyme";
import TemporaryDrawer from "../Components/TemporaryDrawer";
describe("TemporaryDrawer", () => {
  it("should render correctly", () => {
    const component = shallow(<TemporaryDrawer />);
    expect(component).toMatchSnapshot();
  });
});

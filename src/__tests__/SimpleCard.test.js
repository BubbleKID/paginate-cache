import React from "react";
import { shallow } from "enzyme";
import SimpleCard from "../Components/SimpleCard";
describe("SimpleCard", () => {
  it("should render correctly", () => {
    const component = shallow(<SimpleCard />);
    expect(component).toMatchSnapshot();
  });
});

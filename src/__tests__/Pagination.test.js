import React from "react";
import { shallow } from "enzyme";
import Pagination from "../Components/Pagination";
describe("Pagination", () => {
  it("should render correctly", () => {
    const component = shallow(<Pagination />);
    expect(component).toMatchSnapshot();
  });
});

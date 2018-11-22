import ReactDOM from "react-dom";
import index from './index';
jest.mock("react-dom", () => ({ render: jest.fn() }));

it("renders without crashing", () => {
  expect(JSON.stringify(index)).toMatchSnapshot();
});

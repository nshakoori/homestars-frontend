import HomeIndex from "./index";
import RoomsContainer from "../Room/RoomsContainer";

it("renders without crashing", () => {
  shallow(<HomeIndex />);
});

it("renders header", () => {
  const wrapper = shallow(<HomeIndex />);
  const welcome = <h1>Available Rooms</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

it("renders RoomsContainer header", () => {
  const wrapper = shallow(<HomeIndex />);
  const welcome = <RoomsContainer />;
  expect(wrapper.contains(welcome)).toEqual(true);
});
import Error from "./error";

const errorMsg = "Error Message"

it("renders without crashing", () => {
  shallow(<Error />);
});

it("renders header", () => {
  const wrapper = mount(<Error error={errorMsg}/>);
  const value = wrapper.find("p").text();
    expect(value).toEqual(errorMsg);
});

import React from "react";
import ListHeader from "../../component/ListHeader";
import { mount, shallow } from "enzyme";
import { PlusCircleOutlined } from "@ant-design/icons";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Button Component", () => {
  const onPlusClick = jest.fn();
  const wrapper = shallow(<ListHeader onPlusClick={onPlusClick} />);

  const addButton = wrapper.find(PlusCircleOutlined);

  it("Add Button Rendering", () => {
    expect(addButton.exists()).toBeTruthy();
  });

  it("call onPlusClick when clicked", () => {
    addButton.simulate("click");
    expect(onPlusClick).toBeCalled();
  });
});

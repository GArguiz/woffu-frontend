import React from "react";
import { shallow } from "enzyme";
import { PlusCircleOutlined } from "@ant-design/icons";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ListComponent from "../../component/List";
import { List, Modal } from "antd";
import ListItem from "../../component/ListItem";

configure({ adapter: new Adapter() });

const data = [
  {
    id: 1,
    horse: "Horse1",
    bet_amount: 21,
    jockey: "Jockey1",
    race_date: "2022-01-12",
  },
  {
    id: 2,
    horse: "Horse2",
    bet_amount: 22,
    jockey: "Jockey2",
    race_date: "2022-02-12",
  },
  {
    id: 3,
    horse: "Horse3",
    bet_amount: 23,
    jockey: "Jockey3",
    race_date: "2023-01-12",
  },
];
describe("Button Component", () => {
  const onEditData = jest.fn();
  const onDeleteData = jest.fn();
  const onAddData = jest.fn();
  const wrapper = shallow(
    <ListComponent
      dataSource={data}
      loading={false}
      onEditData={onEditData}
      onDeleteData={onDeleteData}
      onAddData={onAddData}
    />
  );

  const list = wrapper.find(List);
  it("List should render", () => {
    expect(list.exists()).toBeTruthy();
  });

  it("modals should not exist", () => {
    const modal1 = wrapper.find(Modal).first();
    const modal2 = wrapper.find(Modal).at(1);
    const modal3 = wrapper.find(Modal).at(2);

    expect(modal1.props().open).toBeFalsy();
    expect(modal2.props().open).toBeFalsy();
    expect(modal3.props().open).toBeFalsy();
  });
});

import React from "react";
import { getDescription } from "../../containers/HomePage/utils";
import { List, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export default function ListItem({ item, onEdit, onDelete }) {
  return (
    <List.Item
      key={item.id}
      actions={[
        <Tooltip title="Edit">
          <EditOutlined onClick={() => onEdit(item)} />
        </Tooltip>,
        <Tooltip title="Delete">
          <DeleteOutlined onClick={() => onDelete(item.id)} />
        </Tooltip>,
      ]}
    >
      <List.Item.Meta title={item.horse} description={getDescription(item)} />
      <strong>{`${item.gambler}  bet ${item.bet_amount}$`}</strong>
    </List.Item>
  );
}

import React from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./styles.css";
import { Tooltip } from "antd";

export default function ListHeader({ onPlusClick }) {
  return (
    <div className="list-header">
      <Tooltip title="Add">
        <PlusCircleOutlined onClick={onPlusClick} />
      </Tooltip>
    </div>
  );
}

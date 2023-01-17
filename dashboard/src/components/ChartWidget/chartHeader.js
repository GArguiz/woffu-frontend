import { Select, DatePicker } from "antd";
import React from "react";

const { RangePicker } = DatePicker;
export default function ChartHeader({ handleSelectChange, handleRangeChange }) {
  return (
    <div className="list-header">
      <Select
        defaultValue="horse"
        style={{
          width: 120,
        }}
        onChange={handleSelectChange}
        options={[
          {
            value: "horse",
            label: "By horse",
          },
          {
            value: "jockey",
            label: "By jockey",
          },
        ]}
      />
      <RangePicker
        onChange={(values, formatString) => {
          handleRangeChange({
            startDate: formatString[0],
            endDate: formatString[1],
          });
        }}
      />
    </div>
  );
}

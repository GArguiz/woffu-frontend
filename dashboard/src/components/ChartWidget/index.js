import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./styles.css";
import ChartHeader from "./chartHeader";
import { transformByHorse, transformByJockey } from "../../api/util";

export default function CharWidget({ data, handleRangeChange }) {
  const [dataSource, setDataSource] = useState([]);
  const [bySelect, setBySelect] = useState("horse");

  useEffect(() => {
    if (bySelect === "horse") {
      setDataSource(transformByHorse(data));
    } else {
      setDataSource(transformByJockey(data));
    }
  }, [bySelect, data]);

  const handleByChange = (props) => {
    setBySelect(props);
  };

  return (
    <React.Fragment>
      <ChartHeader
        handleSelectChange={handleByChange}
        handleRangeChange={handleRangeChange}
      />
      <LineChart
        width={600}
        height={400}
        data={dataSource}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="bet_amount"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </React.Fragment>
  );
}

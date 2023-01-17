import "./App.css";
import CharWidget from "./components/ChartWidget";
import { api } from "./api";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const { status, data } = await api.getAllData();
    if (status >= 200 && status < 300) {
      setData(data);
    }
  };

  const getDataByRange = async (formatString) => {
    const { status, data } = await api.getRangeData(formatString);
    if (status >= 200 && status < 300) {
      setData(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <CharWidget data={data} handleRangeChange={getDataByRange} />
    </div>
  );
}

export default App;

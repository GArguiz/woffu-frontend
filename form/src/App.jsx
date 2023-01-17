import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./containers/HomePage";

const HomePageM = React.memo(HomePage);
function App() {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <HomePageM />
    </div>
  );
}

export default App;

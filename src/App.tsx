import React from "react";
import "./App.css";
import DropDown from "./components/DropDown";
import { PageMap } from "./utils/PageMap";

function App() {
  const [currPage, setCurrPage] = React.useState("Basic");

  return (
    <div className="App">
      <DropDown currPage={currPage} setCurrPage={setCurrPage} />
      {PageMap[currPage]}
    </div>
  );
}

export default App;

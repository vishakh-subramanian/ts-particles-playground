import React, { useEffect } from "react";
import "./App.css";
import DropDown from "./components/DropDown";
import { BackgroundMaskPage } from "./pages/bOptions/BackgroundMask";
import { ShadowPage } from "./pages/sOptions/ShadowPage";
import { SnowPage } from "./pages/sOptions/SnowPage";
import { SpinPage } from "./pages/sOptions/SpinPage";
import { StarPage } from "./pages/sOptions/StarPage";
import { ShapeArrowPage } from "./pages/sOptions/ShapeArrow";
// import { SeaAnemonePage } from "./pages/sOptions/SeaAnemone";

function App() {
  const [currOptions, setCurrOptions] = React.useState("Snow");

  useEffect(() => {
    console.log(currOptions);
  }, [currOptions]);

  return (
    <div className="App">
      <DropDown
        currOptions={currOptions}
        setCurrOptions={setCurrOptions}
      ></DropDown>
      {currOptions === "Snow" && <SnowPage />}
      {currOptions === "Shadow" && <ShadowPage />}
      {currOptions === "Spin" && <SpinPage />}
      {currOptions === "Star" && <StarPage />}
      {/* {currOptions === "Sea Anemone" && <SeaAnemonePage />} */}
      {currOptions === "Background Mask" && <BackgroundMaskPage />}
      {currOptions === "Shape Arrow" && <ShapeArrowPage />}
    </div>
  );
}

export default App;

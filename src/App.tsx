import React, { useEffect } from "react";
import "./App.css";
import DropDown from "./components/DropDown";
import { AbsorbersPage } from "./pages/aOptions/AbsorbersPage";
import { AmongUsPage } from "./pages/aOptions/AmongUsPage";
import { BasicPage } from "./pages/bOptions/BasicPage";
import { BigPage } from "./pages/bOptions/BigPage";
import { BlackHolePage } from "./pages/bOptions/BlackHolePage";
import { BubblePage } from "./pages/bOptions/BubblePage";
import { BackgroundMaskPage } from "./pages/bOptions/BackgroundMaskPage";
import { SeaAnemonePage } from "./pages/sOptions/SeaAnemonePage";
import { ShadowPage } from "./pages/sOptions/ShadowPage";
import { ShapeArrowPage } from "./pages/sOptions/ShapeArrowPage";
import { ShapeCogPage } from "./pages/sOptions/ShapeCogPage";
import { SlowPage } from "./pages/sOptions/SlowPage";
import { SnowPage } from "./pages/sOptions/SnowPage";
import { SpinPage } from "./pages/sOptions/SpinPage";
import { StarPage } from "./pages/sOptions/StarPage";

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
      {currOptions === "Absorbers" && <AbsorbersPage />}
      {currOptions === "Among Us" && <AmongUsPage />}
      {currOptions === "Background Mask" && <BackgroundMaskPage />}
      {currOptions === "Basic" && <BasicPage />}
      {currOptions === "Big" && <BigPage />}
      {currOptions === "Black Hole" && <BlackHolePage />}
      {currOptions === "Bubble" && <BubblePage />}
      {currOptions === "Sea Anemone" && <SeaAnemonePage />}
      {currOptions === "Shadow" && <ShadowPage />}
      {currOptions === "Shape Arrow" && <ShapeArrowPage />}
      {currOptions === "Shape Cog" && <ShapeCogPage />}
      {currOptions === "Slow" && <SlowPage />}
      {currOptions === "Snow" && <SnowPage />}
      {currOptions === "Spin" && <SpinPage />}
      {currOptions === "Star" && <StarPage />}
    </div>
  );
}

export default App;

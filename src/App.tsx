import React, { useEffect } from "react";
import "./App.css";
import DropDown from "./components/DropDown";
import { AbsorbersPage } from "./pages/aOptions/AbsorbersPage";
import { AmongUsPage } from "./pages/aOptions/AmongUsPage";
import { BackgroundMaskPage } from "./pages/bOptions/BackgroundMaskPage";
import { BasicPage } from "./pages/bOptions/BasicPage";
import { BigPage } from "./pages/bOptions/BigPage";
import { BlackHolePage } from "./pages/bOptions/BlackHolePage";
import { BubblePage } from "./pages/bOptions/BubblePage";
import { CardsPage } from "./pages/cOptions/cardsPage";
import { CharsPage } from "./pages/cOptions/charsPage";
import { ClickConfettiPage } from "./pages/cOptions/clickConfettiPage";
import { ClickPausePage } from "./pages/cOptions/clickPausePage";
import { CollisionsAbsorbPage } from "./pages/cOptions/collisionsAbsorbPage";
import { CollisionsBouncePage } from "./pages/cOptions/collisionsBouncePage";
import { CollisionsDestroyPage } from "./pages/cOptions/collisionsDestroyPage";
import { ColorAnimationPage } from "./pages/cOptions/colorAnimationPage";
import { CurlNoisePage } from "./pages/cOptions/curlNoisePage";
import { DataImagesPage } from "./pages/dOptions/dataImagesPage";
import { DelayColorPage } from "./pages/dOptions/delayColorPage";
import { DelayOpacityPage } from "./pages/dOptions/delayOpacityPage";
import { DelayPage } from "./pages/dOptions/delayPage";
import { DelaySizePage } from "./pages/dOptions/delaySizePage";
import { DestroyPage } from "./pages/dOptions/destroyPage";
import { DisappearingPage } from "./pages/dOptions/disappearingPage";
import { DivEventsPage } from "./pages/dOptions/divEventsPage";
import { SeaAnemonePage } from "./pages/sOptions/SeaAnemonePage";
import { ShadowPage } from "./pages/sOptions/ShadowPage";
import { ShapeArrowPage } from "./pages/sOptions/ShapeArrowPage";
import { ShapeCogPage } from "./pages/sOptions/ShapeCogPage";
import { SlowPage } from "./pages/sOptions/SlowPage";
import { SnowPage } from "./pages/sOptions/SnowPage";
import { SpinPage } from "./pages/sOptions/SpinPage";
import { StarPage } from "./pages/sOptions/StarPage";
import { DelayStrokeColorPage } from "./pages/dOptions/delayStrokeColorPage";

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
      {currOptions === "Cards" && <CardsPage />}
      {currOptions === "Chars" && <CharsPage />}
      {currOptions === "Click Confetti" && <ClickConfettiPage />}
      {currOptions === "Click Pause" && <ClickPausePage />}
      {currOptions === "Collisions Absorb" && <CollisionsAbsorbPage />}
      {currOptions === "Collisions Bounce" && <CollisionsBouncePage />}
      {currOptions === "Collisions Destroy" && <CollisionsDestroyPage />}
      {currOptions === "Color Animation" && <ColorAnimationPage />}
      {currOptions === "Curl Noise" && <CurlNoisePage />}
      {currOptions === "Data Images" && <DataImagesPage />}
      {currOptions === "Delay Color" && <DelayColorPage />}
      {currOptions === "Delay Opacity" && <DelayOpacityPage />}
      {currOptions === "Delay" && <DelayPage />}
      {currOptions === "Delay Size" && <DelaySizePage />}
      {currOptions === "Delay Stroke Color" && <DelayStrokeColorPage />}
      {currOptions === "Destroy" && <DestroyPage />}
      {currOptions === "Disappearing" && <DisappearingPage />}
      {currOptions === "Div Events" && <DivEventsPage />}
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

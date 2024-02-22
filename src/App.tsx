import React, { useEffect } from "react";
import "./App.css";
import DropDown from "./components/DropDown";
import "./pages/index";
import * as AllPages from "./pages/index";

function App() {
  const [currOptions, setCurrOptions] = React.useState("Basic");

  useEffect(() => {
    console.log(currOptions);
  }, [currOptions]);

  return (
    <div className="App">
      <DropDown
        currOptions={currOptions}
        setCurrOptions={setCurrOptions}
      ></DropDown>
      {currOptions === "Absorbers" && <AllPages.AbsorbersPage />}
      {currOptions === "Among Us" && <AllPages.AmongUsPage />}
      {currOptions === "Background Mask" && <AllPages.BackgroundMaskPage />}
      {currOptions === "Basic" && <AllPages.BasicPage />}
      {currOptions === "Big" && <AllPages.BigPage />}
      {currOptions === "Black Hole" && <AllPages.BlackHolePage />}
      {currOptions === "Bubble" && <AllPages.BubblePage />}
      {currOptions === "Cards" && <AllPages.CardsPage />}
      {currOptions === "Chars" && <AllPages.CharsPage />}
      {currOptions === "Click Confetti" && <AllPages.ClickConfettiPage />}
      {currOptions === "Click Pause" && <AllPages.ClickPausePage />}
      {currOptions === "Collisions Absorb" && <AllPages.CollisionsAbsorbPage />}
      {currOptions === "Collisions Bounce" && <AllPages.CollisionsBouncePage />}
      {currOptions === "Collisions Destroy" && (
        <AllPages.CollisionsDestroyPage />
      )}
      {currOptions === "Color Animation" && <AllPages.ColorAnimationPage />}
      {currOptions === "Curl Noise" && <AllPages.CurlNoisePage />}
      {currOptions === "Data Images" && <AllPages.DataImagesPage />}
      {currOptions === "Delay Color" && <AllPages.DelayColorPage />}
      {currOptions === "Delay Opacity" && <AllPages.DelayOpacityPage />}
      {currOptions === "Delay" && <AllPages.DelayPage />}
      {currOptions === "Delay Size" && <AllPages.DelaySizePage />}
      {currOptions === "Delay Stroke Color" && (
        <AllPages.DelayStrokeColorPage />
      )}
      {currOptions === "Destroy" && <AllPages.DestroyPage />}
      {currOptions === "Disappearing" && <AllPages.DisappearingPage />}
      {currOptions === "Div Events" && <AllPages.DivEventsPage />}
      {currOptions === "Effect Bubble" && <AllPages.EffectBubblePage />}
      {currOptions === "Effect Trail" && <AllPages.EffectTrailPage />}
      {currOptions === "Emitter Absorber" && <AllPages.EmitterAbsorberPage />}
      {currOptions === "Emitter Angled" && <AllPages.EmitterAngledPage />}
      {currOptions === "Emitter Image Shape" && (
        <AllPages.EmitterImageShapePage />
      )}
      {currOptions === "Emitter Images" && <AllPages.EmitterImagesPage />}
      {currOptions === "Emitter" && <AllPages.EmitterPage />}
      {currOptions === "Emitter Paths" && <AllPages.EmitterPathsPage />}
      {currOptions === "Emitter Shapes" && <AllPages.EmitterShapesPage />}
      {currOptions === "Emitter Spawn Color" && (
        <AllPages.EmitterSpawnColorPage />
      )}
      {currOptions === "Emitter Text Shape" && (
        <AllPages.EmitterTextShapePage />
      )}
      {currOptions === "Emitter Text Stroke Shape" && (
        <AllPages.EmitterTextStrokeShapePage />
      )}
      {currOptions === "Fireworks 2" && <AllPages.Fireworks2Page />}
      {currOptions === "Fireworks" && <AllPages.FireworksPage />}
      {currOptions === "Fontawesome" && <AllPages.FontawesomePage />}
      {currOptions === "Forward" && <AllPages.ForwardPage />}
      {currOptions === "Gifs" && <AllPages.GifsPage />}
      {currOptions === "Grab Random Color" && <AllPages.GrabRandomColorPage />}
      {currOptions === "Gradients" && <AllPages.GradientsPage />}
      {currOptions === "Gravity" && <AllPages.GravityPage />}
      {currOptions === "Growing" && <AllPages.GrowingPage />}
      {currOptions === "Hexagon Path" && <AllPages.HexagonPathPage />}
      {currOptions === "Hollow Knight" && <AllPages.HollowknightPage />}
      {currOptions === "Hyperspace" && <AllPages.HyperspacePage />}
      {currOptions === "Image Mask" && <AllPages.ImageMaskPage />}
      {currOptions === "Images Directions" && <AllPages.ImagesDirectionsPage />}
      {currOptions === "Images" && <AllPages.ImagesPage />}
      {currOptions === "Infection" && <AllPages.InfectionPage />}
      {currOptions === "Life" && <AllPages.LifePage />}
      {currOptions === "Light Hover" && <AllPages.LightHoverPage />}
      {currOptions === "Link Triangles" && <AllPages.LinkTrianglesPage />}
      {currOptions === "Local Polygon Mask" && <AllPages.LocalPolygonMaskPage />}
    </div>
  );
}

export default App;

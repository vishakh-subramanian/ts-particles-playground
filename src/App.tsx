import React, { useEffect } from "react";
import "./App.css";
import DropDown from "./components/DropDown";
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
      {currOptions === "Local Polygon Mask" && (
        <AllPages.LocalPolygonMaskPage />
      )}
      {currOptions === "Manual" && <AllPages.ManualPage />}
      {currOptions === "Motion Disable" && <AllPages.MotionDisablePage />}
      {currOptions === "Motion Reduce" && <AllPages.MotionReducePage />}
      {currOptions === "Mouse Attract" && <AllPages.MouseAttractPage />}
      {currOptions === "Mouse Bounce" && <AllPages.MouseBouncePage />}
      {currOptions === "Mouse Follow" && <AllPages.MouseFollowPage />}
      {currOptions === "Mouse Particle" && <AllPages.MouseParticlePage />}
      {currOptions === "Mouse Particle 2" && <AllPages.MouseParticle2Page />}
      {currOptions === "Mouse Trail" && <AllPages.MouseTrailPage />}
      {currOptions === "Mouse Trail Noise" && <AllPages.MouseTrailNoisePage />}
      {currOptions === "Move Angle" && <AllPages.MoveAnglePage />}
      {currOptions === "Move Distance" && <AllPages.MoveDistancePage />}
      {currOptions === "Move Inside" && <AllPages.MoveInsidePage />}
      {currOptions === "Move Outside" && <AllPages.MoveOutsidePage />}
      {currOptions === "Multiple Click Emitters" && (
        <AllPages.MultipleClickEmittersPage />
      )}
      {currOptions === "Multiple Polygon Masks" && (
        <AllPages.MultiplePolygonMasksPage />
      )}
      {currOptions === "NASA" && <AllPages.NasaPage />}
      {currOptions === "No Clear" && <AllPages.NoClearPage />}
      {currOptions === "Noise Planes" && <AllPages.NoisePlanesPage />}
      {currOptions === "Nyan Cat" && <AllPages.NyancatPage />}
      {currOptions === "Nyan Cat 2" && <AllPages.Nyancat2Page />}
      {currOptions === "Orbit" && <AllPages.OrbitPage />}
      {currOptions === "Parallax" && <AllPages.ParallaxPage />}
      {currOptions === "Path Polygon Mask" && <AllPages.PathPolygonMaskPage />}
      {currOptions === "Path Svg" && <AllPages.PathSvgPage />}
      {currOptions === "Path Zig Zag" && <AllPages.PathZigZagPage />}
      {currOptions === "Planes" && <AllPages.PlanesPage />}
      {currOptions === "Plasma" && <AllPages.PlasmaPage />}
      {currOptions === "Poisson" && <AllPages.PoissonPage />}
      {currOptions === "Polygon Mask" && <AllPages.PolygonMaskPage />}
      {currOptions === "Polygons" && <AllPages.PolygonsPage />}
      {currOptions === "Pop" && <AllPages.PopPage />}
      {currOptions === "Random" && <AllPages.RandomPage />}
      {currOptions === "React Bubbles" && <AllPages.ReactBubblesPage />}
      {currOptions === "React Defaults" && <AllPages.ReactDefaultsPage />}
      {currOptions === "React Multiple Images" && (
        <AllPages.ReactMultipleImagesPage />
      )}
      {currOptions === "React Night Sky" && <AllPages.ReactNightSkyPage />}
      {currOptions === "React Polygon Mask" && (
        <AllPages.ReactPolygonMaskPage />
      )}
      {currOptions === "React Simple" && <AllPages.ReactSimplePage />}
      {currOptions === "React Snow" && <AllPages.ReactSnowPage />}
      {currOptions === "Reduce Duplicates" && <AllPages.ReduceDuplicatesPage />}
      {currOptions === "Repulse" && <AllPages.RepulsePage />}
      {currOptions === "Repulse Back" && <AllPages.RepulseBackPage />}
      {currOptions === "Repulse Circ" && <AllPages.RepulseCircPage />}
      {currOptions === "Repulse Cubic" && <AllPages.RepulseCubicPage />}
      {currOptions === "Repulse Expo" && <AllPages.RepulseExpoPage />}
      {currOptions === "Repulse Quart" && <AllPages.RepulseQuartPage />}
      {currOptions === "Repulse Quint" && <AllPages.RepulseQuintPage />}
      {currOptions === "Repulse Sine" && <AllPages.RepulseSinePage />}
      {currOptions === "Responsive" && <AllPages.ResponsivePage />}
      {currOptions === "Ring" && <AllPages.RingPage />}
      {currOptions === "Sea Anemone" && <AllPages.SeaAnemonePage />}
      {currOptions === "Shadow" && <AllPages.ShadowPage />}
      {currOptions === "Shape Arrow" && <AllPages.ShapeArrowPage />}
      {currOptions === "Shape Cog" && <AllPages.ShapeCogPage />}
      {currOptions === "Shape Emoji" && <AllPages.ShapeEmojiPage />}
      {currOptions === "Shape Heart" && <AllPages.ShapeHeartPage />}
      {currOptions === "Shape Multiline Text" && (
        <AllPages.ShapeMultilineTextPage />
      )}
      {currOptions === "Shape Options" && <AllPages.ShapeOptionsPage />}
      {currOptions === "Shape Path" && <AllPages.ShapePathPage />}
      {currOptions === "Shape Rounded Polygon" && (
        <AllPages.ShapeRoundedPolygonPage />
      )}
      {currOptions === "Shape Rounded Rect" && (
        <AllPages.ShapeRoundedRectPage />
      )}
      {currOptions === "Shape Spiral" && <AllPages.ShapeSpiralPage />}
      {currOptions === "Slow" && <AllPages.SlowPage />}
      {currOptions === "Snow" && <AllPages.SnowPage />}
      {currOptions === "Sounds Audio" && <AllPages.SoundsAudioPage />}
      {currOptions === "Sounds Loop" && <AllPages.SoundsLoopPage />}
      {currOptions === "Sounds Melodies" && <AllPages.SoundsMelodiesPage />}
      {currOptions === "Sounds Melody Loop" && (
        <AllPages.SoundsMelodyLoopPage />
      )}
      {currOptions === "Sounds Notes" && <AllPages.SoundsNotesPage />}
      {currOptions === "Speed Decay" && <AllPages.SpeedDecayPage />}
      {currOptions === "Spin" && <AllPages.SpinPage />}
      {currOptions === "Star" && <AllPages.StarPage />}
      {currOptions === "Stroke Animation" && <AllPages.StrokeAnimationPage />}
      {currOptions === "Style" && <AllPages.StylePage />}
      {currOptions === "Svg Replace" && <AllPages.SvgReplacePage />}
      {currOptions === "Test" && <AllPages.TestPage />}
      {currOptions === "Text Mask" && <AllPages.TextMaskPage />}
      {currOptions === "Text Mask Multiline" && (
        <AllPages.TextMaskMultilinePage />
      )}
      {currOptions === "Themes" && <AllPages.ThemesPage />}
      {currOptions === "Tilt" && <AllPages.TiltPage />}
      {currOptions === "Trail" && <AllPages.TrailPage />}
      {currOptions === "Trail Image" && <AllPages.TrailImagePage />}
      {currOptions === "Triangles" && <AllPages.TrianglesPage />}
      {currOptions === "Twinkle" && <AllPages.TwinklePage />}
      {currOptions === "Vibrate" && <AllPages.VibratePage />}
      {currOptions === "Virus" && <AllPages.VirusPage />}
      {currOptions === "Warp" && <AllPages.WarpPage />}
      {currOptions === "Wobble" && <AllPages.WobblePage />}
      {currOptions === "Z Index" && <AllPages.ZIndexPage />}
    </div>
  );
}

export default App;

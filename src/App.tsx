import { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import "./App.css";
import options from "./helpers/snow";

function App() {
  const initParticles = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <div className="App">
      <Particles
        id="bgParticles"
        init={initParticles}
        loaded={particlesLoaded}
        options={options}
      />
    </div>
  );
}

export default App;

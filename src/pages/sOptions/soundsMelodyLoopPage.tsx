import React, { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import allOptions from "../../configs";

export const SoundsMelodyLoopPage: React.FC = () => {
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
    <div className="SoundsMelodyLoopPage">
      <Particles
        id="soundsMelodyLoopParticles"
        init={initParticles}
        loaded={particlesLoaded}
        options={allOptions.sOptions.soundsMelodyLoop}
      />
    </div>
  );
};

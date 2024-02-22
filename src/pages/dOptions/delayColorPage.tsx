import React, { useCallback } from "react";
import { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import allOptions from "../../configs";
import { Particles } from "react-tsparticles";

export const DelayColorPage: React.FC = () => {
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
    <div className="delayColorPage">
      <Particles
        id="delayColorParticles"
        init={initParticles}
        loaded={particlesLoaded}
        options={allOptions.dOptions.delayColor}
      />
    </div>
  );
};

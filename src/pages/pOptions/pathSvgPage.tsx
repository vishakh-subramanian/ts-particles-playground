import React, { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import allOptions from "../../configs";
export const PathSvgPage: React.FC = () => {
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
    <div className="PathSvgPage">
      <Particles
        id="pathSvgParticles"
        init={initParticles}
        loaded={particlesLoaded}
        options={allOptions.pOptions.pathSvg}
      />
    </div>
  );
};

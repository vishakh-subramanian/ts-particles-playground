import React, { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import allOptions from "../../configs";
export const MoveAnglePage: React.FC = () => {
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
    <div className="MoveAnglePage">
      <Particles
        id="moveAngleParticles"
        init={initParticles}
        loaded={particlesLoaded}
        options={allOptions.mOptions.moveAngle}
      />
    </div>
  );
};

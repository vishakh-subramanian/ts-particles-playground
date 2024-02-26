import React, { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import allOptions from "../../configs";

// TODO: Currently broken, nothing loads in browser

export const WarpPage: React.FC = () => {
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
    <div className="WarpPage">
      <Particles
        id="warpParticles"
        init={initParticles}
        loaded={particlesLoaded}
        options={allOptions.wOptions.warp}
      />
    </div>
  );
};

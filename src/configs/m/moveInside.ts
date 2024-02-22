import { ISourceOptions } from "tsparticles-engine";

const options: ISourceOptions = {
  key: "moveInside",
  name: "Move Inside",
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
      },
    },
    color: {
      value: "#ff0000",
      animation: {
        enable: true,
        speed: 20,
        sync: true,
      },
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 1,
    },
    size: {
      value: {
        min: 5,
        max: 7,
      },
    },
    move: {
      enable: true,
      speed: 10,
      direction: "inside",
      straight: true,
    },
  },
  background: {
    color: "#000000",
  },
};

export default options;

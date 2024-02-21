import type { ISourceOptions } from "@tsparticles/engine";

const options: ISourceOptions = {
    key: "wobble",
    name: "Wobble",
    background: {
        color: "#000000",
    },
    particles: {
        bounce: {
            vertical: {
                value: 0,
            },
            horizontal: {
                value: 0,
            },
        },
        color: {
            value: ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"],
            animation: {
                enable: true,
                speed: 30,
            },
        },
        move: {
            decay: {
                min: 0.05,
                max: 0.15,
            },
            direction: "top",
            enable: true,
            gravity: {
                acceleration: 9.81,
                enable: true,
                maxSpeed: 200,
            },
            outModes: {
                top: "none",
                default: "destroy",
            },
            speed: {
                min: 50,
                max: 150,
            },
        },
        number: {
            value: 0,
            limit: { value: 300 },
        },
        opacity: {
            value: 1,
            animation: {
                enable: false,
                startValue: "max",
                destroy: "min",
                speed: 0.3,
                sync: true,
            },
        },
        rotate: {
            value: {
                min: 0,
                max: 360,
            },
            direction: "random",
            move: true,
            animation: {
                enable: true,
                speed: 60,
            },
        },
        tilt: {
            direction: "random",
            enable: true,
            move: true,
            value: {
                min: 0,
                max: 360,
            },
            animation: {
                enable: true,
                speed: 60,
            },
        },
        shape: {
            type: ["circle", "square", "polygon"],
            options: {
                polygon: [
                    {
                        sides: 5,
                    },
                    {
                        sides: 6,
                    },
                ],
            },
        },
        size: {
            value: 3,
        },
        roll: {
            darken: {
                enable: true,
                value: 30,
            },
            enlighten: {
                enable: true,
                value: 30,
            },
            enable: true,
            mode: "both",
            speed: {
                min: 15,
                max: 25,
            },
        },
        wobble: {
            distance: 30,
            enable: true,
            move: true,
            speed: {
                min: -15,
                max: 15,
            },
        },
    },
    emitters: {
        position: {
            x: 50,
            y: 100,
        },
        size: {
            width: 0,
            height: 0,
        },
        rate: {
            quantity: 10,
            delay: 0.05,
        },
    },
};
export default options;

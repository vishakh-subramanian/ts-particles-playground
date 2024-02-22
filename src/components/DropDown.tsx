import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import "./DropDown.css";

interface DropDownProps {
  currOptions: string;
  setCurrOptions: React.Dispatch<React.SetStateAction<string>>;
}

export const DropDown: React.FC<DropDownProps> = ({
  currOptions,
  setCurrOptions,
}) => {
  const [option1, setOption1] = React.useState("");
  const [option2, setOption2] = React.useState("");
  const getKeyString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const optionMap: { [key: string]: { value: number; label: string }[] } = {
    A: [
      { value: 1, label: "Absorbers" },
      { value: 2, label: "Among Us" },
    ],
    B: [
      { value: 101, label: "Background Mask" },
      { value: 102, label: "Basic" },
      { value: 103, label: "Big" },
      { value: 104, label: "Black Hole" },
      { value: 105, label: "Bubble" },
    ],
    C: [
      // { value: 201, label: "Cards" },
      { value: 201, label: "Chars" },
      // { value: 202, label: "Click Confetti" },
      { value: 202, label: "Click Pause" },
      { value: 203, label: "Collisions Absorb" },
      { value: 204, label: "Collisions Bounce" },
      { value: 205, label: "Collisions Destroy" },
      { value: 206, label: "Color Animation" },
      { value: 207, label: "Curl Noise" },
    ],
    D: [
      { value: 301, label: "Data Images" },
      { value: 302, label: "Delay Color" },
      { value: 303, label: "Delay Opacity" },
      { value: 304, label: "Delay" },
      { value: 305, label: "Delay Size" },
      { value: 306, label: "Delay Stroke Color" },
      { value: 307, label: "Destroy" },
      { value: 308, label: "Disappearing" },
      { value: 309, label: "Div Events" },
    ],
    E: [
      { value: 401, label: "Effect Bubble" },
      { value: 402, label: "Effect Trail" },
      // { value: 403, label: "Emitter Absorber" },
      // { value: 404, label: "Emitter Angled" },
      // { value: 405, label: "Emitter Image Shape" },
      // { value: 406, label: "Emitter Images" },
      { value: 403, label: "Emitter" },
      // { value: 408, label: "Emitter Paths" },
      // { value: 409, label: "Emitter Shapes" },
      // { value: 410, label: "Emitter Spawn Color" },
      // { value: 411, label: "Emitter Text Shape" },
      // { value: 412, label: "Emitter Text Stroke Shape" },
    ],
    F: [
      // { value: 501, label: "Fireworks 2" },
      // { value: 502, label: "Fireworks" },
      { value: 501, label: "Fontawesome" },
      { value: 502, label: "Forward" },
    ],
    G: [
      { value: 601, label: "Gifs" },
      { value: 602, label: "Grab Random Color" },
      { value: 603, label: "Gradients" },
      // { value: 604, label: "Gravity" },
      // { value: 605, label: "Growing" },
    ],
    H: [
      // { value: 701, label: "Hexagon Path" },
      { value: 701, label: "Hollow Knight" },
      // { value: 703, label: "Hyperspace" },
    ],
    I: [
      { value: 801, label: "Image Mask" },
      { value: 802, label: "Images Directions" },
      { value: 803, label: "Images" }, // images has bugs
      // { value: 804, label: "Infection "},
    ],
    J: [],
    K: [],
    L: [
      { value: 1101, label: "Life" },
      { value: 1102, label: "Light Hover" },
      { value: 1103, label: "Link Triangles" },
      { value: 1104, label: "Local Polygon Mask" },
    ],
    M: [],
    N: [],
    O: [],
    P: [],
    Q: [],
    R: [],
    S: [],
    T: [],
    U: [],
    V: [],
    W: [],
    X: [],
    Y: [],
    Z: [],
  };

  const handleChange = (event: SelectChangeEvent) => {
    setOption1(event.target.value);
    const index: number = getKeyString.indexOf(event.target.value) * 100;
    setOption2((index + 1).toString());
    const currOption = optionMap[event.target.value].find(
      (element) => element.value === index + 1
    );
    if (currOption?.label) {
      setCurrOptions(currOption.label);
    }
  };

  const handleChange2 = (event: SelectChangeEvent) => {
    setOption2(event.target.value);
    const numValue: number = Number.parseInt(event.target.value);
    const letter = getKeyString[Math.floor(numValue / 100)];
    const currOption = optionMap[letter].find(
      (element) => element.value === numValue
    );
    if (currOption?.label) {
      setCurrOptions(currOption.label);
    }
  };

  return (
    <>
      <FormControl
        id="form"
        variant="standard"
        sx={{ m: 1, minWidth: 120, zIndex: 1 }}
      >
        <InputLabel id="input-label-1">First Letter</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label-1"
          id="select1"
          value={option1}
          onChange={handleChange}
          label="First Letter"
        >
          <MenuItem value="A">A</MenuItem>
          <MenuItem value="B">B</MenuItem>
          <MenuItem value="C">C</MenuItem>
          <MenuItem value="D">D</MenuItem>
          <MenuItem value="E">E</MenuItem>
          <MenuItem value="F">F</MenuItem>
          <MenuItem value="G">G</MenuItem>
          <MenuItem value="H">H</MenuItem>
          <MenuItem value="I">I</MenuItem>
          <MenuItem value="J">J</MenuItem>
          <MenuItem value="K">K</MenuItem>
          <MenuItem value="L">L</MenuItem>
          <MenuItem value="M">M</MenuItem>
          <MenuItem value="N">N</MenuItem>
          <MenuItem value="O">O</MenuItem>
          <MenuItem value="P">P</MenuItem>
          <MenuItem value="Q">Q</MenuItem>
          <MenuItem value="R">R</MenuItem>
          <MenuItem value="S">S</MenuItem>
          <MenuItem value="T">T</MenuItem>
          <MenuItem value="U">U</MenuItem>
          <MenuItem value="V">V</MenuItem>
          <MenuItem value="W">W</MenuItem>
          <MenuItem value="X">X</MenuItem>
          <MenuItem value="Y">Y</MenuItem>
          <MenuItem value="Z">Z</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        id="form2"
        variant="standard"
        sx={{ m: 1, minWidth: 120, zIndex: 1 }}
      >
        <InputLabel id="input-label-2">Background</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label-2"
          id="select2"
          value={option2}
          onChange={handleChange2}
          label="Background"
        >
          {option1 && option1[0] && optionMap[option1[0]]
            ? optionMap[option1[0]].map(function (item) {
                return <MenuItem value={item.value}>{item.label}</MenuItem>;
              })
            : ""}
        </Select>
      </FormControl>
    </>
  );
};

export default DropDown;

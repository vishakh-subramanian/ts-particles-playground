import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import { getKeyString, letterToNum, optionMap } from "../utils/DropDownUtils";
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

  const handleChange = (event: SelectChangeEvent) => {
    setOption1(event.target.value);
    const index: number = letterToNum[event.target.value] * 100;
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

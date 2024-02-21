import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "./DropDown.css";

interface DropDownProps {
  currOptions: string;
  setCurrOptions: React.Dispatch<React.SetStateAction<string>>;
}

export const DropDown: React.FC<DropDownProps> = ({
  currOptions,
  setCurrOptions,
}) => {
  const [option, setOption] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value);
    switch (event.target.value.toString()) {
      case "10":
        setCurrOptions("Snow");
        break;
      case "20":
        setCurrOptions("Shadow");
        break;
      case "30":
        setCurrOptions("Spin");
        break;
      case "40":
        setCurrOptions("Star");
        break;
      case "50":
        // currently not supported
        setCurrOptions("Sea Anemone");
        break;
      case "60":
        setCurrOptions("Background Mask");
        break;
      case "70":
        setCurrOptions("Shape Arrow");
        break;
      default:
        break;
    }
  };

  return (
    <FormControl
      id="form"
      variant="standard"
      sx={{ m: 1, minWidth: 120, zIndex: 1 }}
    >
      <InputLabel id="input-label">Background</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="select"
        value={option}
        onChange={handleChange}
        label="Background"
      >
        <MenuItem value={60}>Background Mask</MenuItem>
        <MenuItem value={20}>Shadow</MenuItem>
        {/* <MenuItem value={70}>Shape Arrow</MenuItem> */}
        <MenuItem value={10}>Snow</MenuItem>
        <MenuItem value={30}>Spin</MenuItem>
        <MenuItem value={40}>Star</MenuItem>
        {/* <MenuItem value={50}>Sea Anemone</MenuItem> */}
      </Select>
    </FormControl>
  );
};

export default DropDown;

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
        // currently not supported
        setCurrOptions("Shape Arrow");
        break;
      case "80":
        // currently not supported
        setCurrOptions("Shape Cog");
        break;
      case "90":
        setCurrOptions("Slow");
        break;
      case "100":
        setCurrOptions("Absorbers");
        break;
      case "110":
        setCurrOptions("Among Us");
        break;
      case "120":
        setCurrOptions("Basic");
        break;
      case "130":
        setCurrOptions("Big");
        break;
      case "140":
        setCurrOptions("Black Hole");
        break;
      case "150":
        setCurrOptions("Bubble");
        break;
      case "160":
        // currently not supported
        setCurrOptions("Cards");
        break;
      case "170":
        setCurrOptions("Chars");
        break;
      case "180":
        // currently not supported
        setCurrOptions("Click Confetti");
        break;
      case "190":
        setCurrOptions("Click Pause");
        break;
      case "200":
        setCurrOptions("Collisions Absorb");
        break;
      case "210":
        setCurrOptions("Collisions Bounce");
        break;
      case "220":
        setCurrOptions("Collisions Destroy");
        break;
      case "230":
        setCurrOptions("Color Animation");
        break;
      case "240":
        setCurrOptions("Curl Noise");
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
        <MenuItem value={100}>Absorbers</MenuItem>
        <MenuItem value={110}>Among Us</MenuItem>
        <MenuItem value={60}>Background Mask</MenuItem>
        <MenuItem value={120}>Basic</MenuItem>
        <MenuItem value={130}>Big</MenuItem>
        <MenuItem value={140}>Black Hole</MenuItem>
        <MenuItem value={150}>Bubble</MenuItem>
        {/* <MenuItem value={160}>Cards</MenuItem> */}
        <MenuItem value={170}>Chars</MenuItem>
        {/* <MenuItem value={180}>Click Confetti</MenuItem> */}
        <MenuItem value={190}>Click Pause</MenuItem>
        <MenuItem value={200}>Collisions Absorb</MenuItem>
        <MenuItem value={210}>Collisions Bounce</MenuItem>
        <MenuItem value={220}>Collisions Destroy</MenuItem>
        <MenuItem value={230}>Color Animation</MenuItem>
        <MenuItem value={240}>Curl Noise</MenuItem>
        {/* <MenuItem value={50}>Sea Anemone</MenuItem> */}
        <MenuItem value={20}>Shadow</MenuItem>
        {/* <MenuItem value={70}>Shape Arrow</MenuItem> */}
        {/* <MenuItem value={80}>Shape Cog</MenuItem> */}
        <MenuItem value={90}>Slow</MenuItem>
        <MenuItem value={10}>Snow</MenuItem>
        <MenuItem value={30}>Spin</MenuItem>
        <MenuItem value={40}>Star</MenuItem>
      </Select>
    </FormControl>
  );
};

export default DropDown;

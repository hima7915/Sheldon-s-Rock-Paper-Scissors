import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function DSlider() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className="horizontal-slider">
      <Slider
        aria-label="Temperature"
        defaultValue={5}
        valueLabelDisplay="on"
        step={1}
        marks
        min={1}
        max={10}
        value={value} 
        onChange={handleChange}
      />
    </Box>
  );
}

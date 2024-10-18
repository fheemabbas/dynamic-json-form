import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

export default function SliderSizes({ data, defaultValue, updateSave }) {
  const [value, setValue] = React.useState(
    defaultValue?.[data.name] || data.min
  ); // Set initial value to default or min

  const handleChange = (event, newValue) => {
    setValue(newValue); // Update slider value on change
    updateSave(data.name, newValue);
  };

  React.useEffect(() => {
    setValue(defaultValue?.[data.name] || data.min);
  }, [data.name]);
  return (
    <Box sx={{ width: 300 }}>
      <Typography id="slider-label" gutterBottom>
        {data.label} {/* Display label */}
      </Typography>
      <Slider
        size="small"
        value={value}
        onChange={handleChange} // Handle slider value change
        min={data.min} // Minimum value
        max={data.max} // Maximum value
        step={data.step} // Step value, can be decimal
        valueLabelDisplay="on" // Show value label on hover
        aria-labelledby="slider-label"
        aria-label="Always visible"
      />
    </Box>
  );
}

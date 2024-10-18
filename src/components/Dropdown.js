import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FormControlLabel } from "@mui/material";

export default function SelectLabels({ data, updateSave, defaultValue }) {
  const [value, setValue] = React.useState(defaultValue?.[data.name] || ""); // Track selected value
  const [touched, setTouched] = React.useState(false); // Track if user has touched the field

  React.useEffect(() => {
    setValue(defaultValue?.[data.name] || []);
  }, [data.name]);
  const handleChange = (event) => {
    setValue(event.target.value); // Update value on selection
    updateSave(data.name, event.target.value);
  };

  const handleBlur = () => {
    setTouched(true); // Set touched to true on blur (when user leaves the field)
  };

  return (
    <div>
      <FormControl
        sx={{ m: 1, width: "300px" }}
        error={touched && data.required && value === ""} // Show error only if touched and no value selected
      >
        <InputLabel id="demo-simple-select-helper-label">
          {data.label}
        </InputLabel>
        <Select
          value={value}
          label={data.label}
          onChange={handleChange}
          onBlur={handleBlur} // Trigger when user leaves the select field
        >
          {data.options.map((item, index) => {
            return (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
        {/* Show error message if required, touched, and no value selected */}
        {touched && data.required && value === "" && (
          <FormHelperText>{`${data.label} is required`}</FormHelperText>
        )}
      </FormControl>
    </div>
  );
}

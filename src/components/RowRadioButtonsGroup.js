import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";

export default function RowRadioButtonsGroup({
  data,
  updateSave,
  defaultValue,
}) {
  const [value, setValue] = React.useState(defaultValue?.[data.name] || ""); // Track the selected value
  const [error, setError] = React.useState(false); // Track the error state
  const [touched, setTouched] = React.useState(false); // Track if user has touched the field

  React.useEffect(() => {
    setValue(defaultValue?.[data.name] || '');
  }, [data.name, defaultValue]);
  const handleChange = (event) => {
    setValue(event.target.value); // Update the selected value
    setError(false); // Clear any errors when user selects an option
    updateSave(data.name, event.target.value);
  };

  const handleBlur = () => {
    setTouched(true); // Mark the field as touched
    if (data.required && value === "") {
      setError(true); // Show error if required and no value is selected
    }
  };

  return (
    <FormControl error={touched && error}>
      <FormLabel id="demo-row-radio-buttons-group-label">
        {data.label}
        {data.required && "*"}
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name={data.name}
        value={value}
        onChange={handleChange} // Handle value change
        onBlur={handleBlur} // Handle field blur (when user leaves the field)
      >
        {data.options.map((item, index) => (
          <FormControlLabel
            key={index}
            value={item.value}
            control={<Radio />}
            label={item.label}
          />
        ))}
      </RadioGroup>
      {touched && error && (
        <FormHelperText>{`${data.label} is required`}</FormHelperText>
      )}
    </FormControl>
  );
}

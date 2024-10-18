import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";

export default function FormCheckBox({ data, updateSave, defaultValue }) {
  const [checkedValues, setCheckedValues] = React.useState(
    defaultValue?.[data.name] || []
  );
  const [error, setError] = React.useState(false); // Track the error state
  const [touched, setTouched] = React.useState(false); // Track if the user has touched the field

  const handleChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setCheckedValues((prev) => [...prev, value]);
      updateSave(data.name, [...checkedValues, value]);
    } else {
      setCheckedValues((prev) => prev.filter((item) => item !== value));
      updateSave(data.name, [...checkedValues, value]);
    }
    setError(false); // Clear error on change
  };
  React.useEffect(() => {
    setCheckedValues(defaultValue?.[data.name] || []);
  }, [data.name]);
  const handleBlur = () => {
    setTouched(true); // Mark as touched when user leaves the field
    if (data.required && checkedValues.length === 0) {
      setError(true); // Show error if required and no checkbox is selected
    }
  };

  return (
    <FormControl
      component="fieldset"
      name={data.name}
      error={touched && error} // Show error only if field is touched and there's an error
    >
      <FormLabel component="">
        {data.label}
        {data.required && "*"}
      </FormLabel>
      <FormGroup
        aria-label="position"
        name={data.name}
        onBlur={handleBlur} // Mark the field as touched when it loses focus
      >
        {data.options.map((item, index) => (
          <FormControlLabel
            key={index}
            value={item.value}
            control={
              <Checkbox
                checked={checkedValues.includes(item.value)}
                onChange={handleChange} // Handle checkbox value change
              />
            }
            label={item.label}
          />
        ))}
      </FormGroup>
      {touched && error && (
        <FormHelperText>{`${data.label} is required`}</FormHelperText>
      )}
    </FormControl>
  );
}

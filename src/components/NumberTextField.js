import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";

export default function NumberTextField({ data, updateSave, defaultValue }) {
  const [value, setValue] = React.useState(defaultValue?.[data.name] || ""); // Track input value
  const [error, setError] = React.useState(false); // Track error state
  const [touched, setTouched] = React.useState(false); // Track if user has touched the field

  React.useEffect(() => {
    setValue(defaultValue?.[data.name] || []);
  }, [data.name]);
  // Handler to allow only numbers and validate the input
  const handleChange = (event) => {
    const inputValue = event.target.value;

    // Only allow numeric input
    if (/^\d*$/.test(inputValue)) {
      setValue(inputValue);
      updateSave(data.name, inputValue);
    }
  };

  // Validation on blur (when the user leaves the input field)
  const handleBlur = () => {
    setTouched(true);

    // Check if the value is empty and required
    if (data.required && value === "") {
      setError(true);
    } else {
      const numValue = Number(value);

      // Validate if the number is within the min and max range
      if (numValue < data.min || numValue > data.max) {
        setError(true);
      } else {
        setError(false); // Clear error if within the valid range
      }
    }
  };

  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "300px" } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required={data.required}
          id="outlined-required"
          label={data.label}
          name={data.name}
          placeholder={data.placeholder}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur} // Validate on blur
          error={touched && error} // Show error state
          helperText={
            touched && error
              ? value === ""
                ? `${data.label} is required`
                : `Value should be between ${data.min} and ${data.max}`
              : ""
          }
        />
      </div>
    </Box>
  );
}

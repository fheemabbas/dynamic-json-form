import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function FormEmailField({ data, updateSave, defaultValue }) {
  const [value, setValue] = React.useState(defaultValue?.[data.name] || ""); // Track selected value
  const [error, setError] = React.useState(false); // Track validation error

  React.useEffect(() => {
    setValue(defaultValue?.[data.name] || "");
  }, [data.name, defaultValue]);

  const handleChange = (e) => {
    const emailValue = e.target.value;
    setValue(emailValue);

    // Basic email validation
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    setError(data.required && emailValue.trim() === "" ? true : !isValidEmail);

    updateSave(e.target.name, emailValue);
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
          id="outlined-email"
          label={data.label}
          name={data.name}
          placeholder={data.placeholder}
          value={value}
          onChange={handleChange}
          error={error}
          helperText={error ? "Please enter a valid email." : ""}
        />
      </div>
    </Box>
  );
}

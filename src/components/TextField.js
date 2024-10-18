import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function FormTextField({ data, updateSave, defaultValue }) {
  const [value, setValue] = React.useState(defaultValue?.[data.name] || ""); // Track selected value

  React.useEffect(() => {
    setValue(defaultValue?.[data.name] || []);
  }, [data.name]);
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
          onChange={(e) => {
            updateSave(e.target.name, e.target.value);
            setValue(e.target.value);
          }}
        />
      </div>
    </Box>
  );
}

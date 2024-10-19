import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import moment from "moment";

export default function FormDateField({ data, updateSave, defaultValue }) {
    const [value, setValue] = React.useState(defaultValue?.[data.name] || ""); // Track selected date
    const [error, setError] = React.useState(false); // Track validation error

    React.useEffect(() => {
        setValue(defaultValue?.[data.name] || "");
    }, [data.name, defaultValue]);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);

        // Validate using Moment.js
        const isValidDate = moment(newValue, "YYYY-MM-DD", true).isValid();
        setError(data.required && !isValidDate);

        updateSave(data.name, newValue);
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
                    label={data.label}
                    name={data.name}
                    type="date"
                    value={value}
                    onChange={handleChange}
                    error={error}
                    helperText={error ? "This field is required." : ""}
                    InputLabelProps={{
                        shrink: true, // Keeps the label above the input
                    }}
                />
            </div>
        </Box>
    );
}

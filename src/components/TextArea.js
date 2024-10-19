import * as React from "react";
import { TextareaAutosize } from "@mui/material";
import { styled } from "@mui/system";

const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
  width: "300px",
  marginLeft: "10px",
  padding: "10px",
  // marginBottom: "20px",
  // borderColor: theme.palette.grey[300],
  borderWidth: 1,
  borderStyle: "solid",
  borderRadius: 4,
  "&:focus": {
    // borderColor: theme.palette.primary.main,
    outline: "none",
  },
}));

export default function TextArea({ data, updateSave, defaultValue }) {
  const [value, setValue] = React.useState(defaultValue?.[data.name] || "");
  const [touched, setTouched] = React.useState(false);
  const isRequired = data.required; // Assuming `data` has a `required` property

  const handleBlur = () => {
    setTouched(true);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    updateSave(data.name, event.target.value); // Update parent component with the current value
  };

  const showError = touched && isRequired && !value;

  React.useEffect(() => {
    setValue(defaultValue?.[data.name] || "");
  }, [data.name, defaultValue]);
  return (
    <div>
      <StyledTextarea
        minRows={2}
        placeholder={data.placeholder}
        id="bio"
        name={data.name}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        style={{
          borderColor: showError ? "red" : undefined,
        }}
      />
      {showError && <div style={{ color: "red" }}>This field is required</div>}
    </div>
  );
}

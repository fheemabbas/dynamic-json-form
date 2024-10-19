import React from "react";
import { Typography } from "@mui/material";

const ErrorList = ({ errors }) => {
  return (
    <>
      {errors.length > 0 && (
        <>
          <Typography color="red">Validation Error found:</Typography>
          <ul>
            {errors.map((error, index) => (
              <li key={index} style={{ color: "red" }}>
                {error}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default ErrorList;

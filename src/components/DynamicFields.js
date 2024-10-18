import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Typography,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import dynamicFormData from "../data/form.json";
import RowRadioButtonsGroup from "./RowRadioButtonsGroup";
import SelectLabels from "./Dropdown";
import FormTextField from "./TextField";
import TextArea from "./TextArea";
import FormCheckBox from "./FormCheckBox";
import SliderSizes from "./SliderSizes";
import NumberTextField from "./NumberTextField";

const DynamicFields = ({ type, field, updateSave, value }) => {
  if (type === "text") {
    return (
      <FormTextField
        data={field}
        updateSave={updateSave}
        defaultValue={value}
      />
    );
  } else if (type === "textarea") {
    return (
      <TextArea data={field} updateSave={updateSave} defaultValue={value} />
    );
  } else if (type === "dropdown") {
    return (
      <SelectLabels data={field} updateSave={updateSave} defaultValue={value} />
    );
  } else if (type === "radio") {
    return (
      <RowRadioButtonsGroup
        data={field}
        updateSave={updateSave}
        defaultValue={value}
      />
    );
  } else if (type === "number") {
    return (
      <NumberTextField
        data={field}
        updateSave={updateSave}
        defaultValue={value}
      />
    );
    return <div>Number</div>;
  } else if (type === "checkbox") {
    return (
      <FormCheckBox data={field} updateSave={updateSave} defaultValue={value} />
    );
  } else if (type === "slider") {
    return (
      <SliderSizes data={field} updateSave={updateSave} defaultValue={value} />
    );
  } else {
    return type;
  }
};

export default DynamicFields;

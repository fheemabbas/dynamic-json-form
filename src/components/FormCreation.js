import React, { useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Typography,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import dynamicFormData from "../data/form.json";
import DynamicFields from "./DynamicFields";
import {
  updateSelectedForm,
  updateSelectedFormIndex,
  updateSelectedFormfields,
} from "../store/action";
import "../App.css";
import ErrorList from "./ErrorList";
const FormCreation = () => {
  let isError = false;
  const dispatch = useDispatch();
  const getFormValue = JSON.parse(
    localStorage.getItem("dynamicFormCreatedValue")
  );
  const [anchorEl, setAnchorEl] = useState(null);
  const { selectedFormfields, selectedFormIndex, dynamicFormGroup } =
    useSelector((state) => state);
  const { selectedForm } = useSelector((state) => state);
  const [error, setError] = useState([]);
  React.useEffect(() => {
    setError([]);
  }, [selectedFormIndex]);
  const [formData, setFormData] = useState(
    getFormValue || {
      form: [
        {
          id: 1,
          [selectedForm]: {
            value: {},
          },
          //   value: {},
        },
      ],
    }
  );
  const checkValidation = () => {
    const validateformdata = formData?.form[0][selectedForm]?.value;
    console.log('validateformdata', validateformdata);
    const fieldsFormData = dynamicFormGroup[selectedFormIndex];
    const tempError = [];
    fieldsFormData.fields.forEach((element) => {
      if (
        element.required &&
        (validateformdata === undefined ||
          validateformdata[element.name] === undefined ||
          validateformdata[element.name] === "" ||
          validateformdata[element.name].length === 0)
      ) {
        tempError.push(`${element.label} is required`);
        isError = true;
      }
      if (element.type === 'email' && validateformdata[element.name]) {
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(validateformdata[element.name])
        if (!isValidEmail) {
          tempError.push(`Please enter valid ${element.label}`);
        }
      }
      if (
        element.min &&
        element.max && validateformdata != undefined &&
        !(
          validateformdata[element.name] >= element.min &&
          validateformdata[element.name] <= element.max
        )
      ) {
        tempError.push(
          `${element.label} not valid, Please Enter between ${element.min} to ${element.max}`
        );
        isError = true;
      }
    });
    setError(tempError);
  };
  return (
    <div style={{ width: "100%" }}>
      <h1>{selectedForm}</h1>
      <ErrorList errors={error} />
      {selectedFormfields.map((item, index) => (
        <div>
          <DynamicFields
            type={item.type}
            field={item}
            value={formData?.form[0][selectedForm]?.value}
            updateSave={(name, value) => {
              let tempFormdata = { ...formData };
              tempFormdata["form"][0][selectedForm] = {
                value: {
                  ...tempFormdata["form"][0][selectedForm]?.value,
                  [name]: value,
                },
              };
              setFormData(tempFormdata);
            }}
          />
        </div>
      ))}
      <div className="dynamic-btn">
        {!(selectedFormIndex === dynamicFormGroup.length - 1) && (
          <Button
            className="btn"
            variant="contained"
            onClick={() => {
              localStorage.setItem(
                "dynamicFormCreatedValue",
                JSON.stringify(formData)
              );
            }}
          >
            Save as Draft
          </Button>
        )}
        <Button
          variant="contained"
          className="btn"
          onClick={() => {
            checkValidation();
            if (!isError) {
              localStorage.setItem(
                "dynamicFormCreatedValue",
                JSON.stringify(formData)
              );
              if (!(selectedFormIndex === dynamicFormGroup.length - 1)) {
                const getNextForm = dynamicFormGroup[selectedFormIndex + 1];
                dispatch(updateSelectedForm(getNextForm.title));
                dispatch(updateSelectedFormfields(getNextForm.fields));
                dispatch(updateSelectedFormIndex(selectedFormIndex + 1));
              }
            }
          }}
        >
          {selectedFormIndex === dynamicFormGroup.length - 1
            ? " Save"
            : "Save & next"}
          {/* Save & next */}
        </Button>
      </div>
    </div>
  );
};

export default FormCreation;

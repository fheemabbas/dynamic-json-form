import React from "react";
import RowRadioButtonsGroup from "./RowRadioButtonsGroup";
import SelectLabels from "./Dropdown";
import FormTextField from "./TextField";
import TextArea from "./TextArea";
import FormCheckBox from "./FormCheckBox";
import SliderSizes from "./SliderSizes";
import NumberTextField from "./NumberTextField";
import FormEmailField from "./FormEmailField";
import FormDateField from "./FormDateField";


const DynamicFields = ({ type, field, updateSave, value }) => {
  if (type === "text") {
    return (
      <FormTextField
        data={field}
        updateSave={updateSave}
        defaultValue={value}
      />
    );
  } else if (type === "email") {
    return (
      <FormEmailField
        data={field}
        updateSave={updateSave}
        defaultValue={value}
      />
    );
  } else if (type === "date") {
    return (
      <FormDateField
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

import {
  UPDATE_SELECTED_FORM,
  UPDATE_SELECTED_FORM_FIELDS,
  UPDATE_SELECTED_INDEX,
} from "./actionTypes";

// Action to update the selected form
export const updateSelectedForm = (formName) => {
  return {
    type: UPDATE_SELECTED_FORM,
    payload: formName,
  };
};
export const updateSelectedFormIndex = (formName) => {
  return {
    type: UPDATE_SELECTED_INDEX,
    payload: formName,
  };
};
export const updateSelectedFormfields = (fields) => {
  return {
    type: UPDATE_SELECTED_FORM_FIELDS,
    payload: fields,
  };
};

import { createStore } from "redux";
import dynamicFormData from "../data/form.json";
import {
  UPDATE_SELECTED_FORM,
  UPDATE_SELECTED_FORM_FIELDS,
  UPDATE_SELECTED_INDEX,
} from "./actionTypes";

const initialState = {
  isDrawerOpen: false,
  dynamicFormData: dynamicFormData.form,
  selectedForm: dynamicFormData.form?.groups[0]?.title,
  selectedFormfields: dynamicFormData.form?.groups[0]?.fields,
  dynamicFormGroup: dynamicFormData.form?.groups,
  selectedFormIndex: 0,
};
console.log("initialState :", initialState);
// Reducer to toggle the drawer open and close state
const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_DRAWER":
      return {
        ...state,
        isDrawerOpen: !state.isDrawerOpen,
      };
    case "CLOSE_DRAWER":
      return {
        ...state,
        isDrawerOpen: false,
      };
    case UPDATE_SELECTED_FORM:
      return {
        ...state,
        selectedForm: action.payload,
      };
    case UPDATE_SELECTED_FORM_FIELDS:
      return {
        ...state,
        selectedFormfields: action.payload,
      };
    case UPDATE_SELECTED_INDEX:
      return {
        ...state,
        selectedFormIndex: action.payload,
      };
    default:
      return state;
  }
};

// Create the store
const store = createStore(uiReducer);

export default store;

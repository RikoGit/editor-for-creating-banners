export const CLEAR_PREVIEW = "CLEAR_PREVIEW";
export const SET_BACKGROUND = "SET_BACKGROUND";
export const SET_TEXT_VALUE = "SET_TEXT_VALUE";
export const SET_TEXT_COLOR = "SET_TEXT_COLOR";

export const clearPreview = () => ({ type: CLEAR_PREVIEW });

export const setBackground = (value) => ({
  type: SET_BACKGROUND,
  payload: value,
});

export const setTextValue = (value) => ({
  type: SET_TEXT_VALUE,
  payload: value,
});

export const setTextColor = (value) => ({
  type: SET_TEXT_COLOR,
  payload: value,
});

export const CLEAR_PREVIEW = "CLEAR_PREVIEW";
export const SET_BACKGROUND = "SET_BACKGROUND";
export const SET_TEXT_VALUE = "SET_TEXT_VALUE";
export const SET_IMAGE = "SET_IMAGE";
export const SET_TEXT_COLOR = "SET_TEXT_COLOR";
export const SET_BACKGROUND_DIRECTION = "SET_BACKGROUND_DIRECTION";
export const SET_BACKGROUND_GRADIENT = "SET_BACKGROUND_GRADIENT";
export const IMAGE_LOADED = "IMAGE_LOADED";

export const clearPreview = () => ({ type: CLEAR_PREVIEW });

export const setBackground = (index, color) => ({
  type: SET_BACKGROUND,
  payload: { index, color },
});

export const setTextValue = (value) => ({
  type: SET_TEXT_VALUE,
  payload: value,
});

export const setImage = (value) => ({
  type: SET_IMAGE,
  payload: value,
});

export const imageLoaded = (value) => ({
  type: IMAGE_LOADED,
  payload: value,
});

export const setTextColor = (value) => ({
  type: SET_TEXT_COLOR,
  payload: value,
});

export const setBackgroundGradient = (value) => ({
  type: SET_BACKGROUND_GRADIENT,
  payload: value,
});

export const setBackgroundDirection = (value) => ({
  type: SET_BACKGROUND_DIRECTION,
  payload: value,
});

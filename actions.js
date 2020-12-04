export const ADD_BACKGROUND_COLOR = "ADD_BACKGROUND_COLOR";
export const IMAGE_LOADED = "IMAGE_LOADED";
export const SET_BACKGROUND = "SET_BACKGROUND";
export const SET_BACKGROUND_CONTROL = "SET_BACKGROUND_CONTROL";
export const SET_BACKGROUND_DIRECTION = "SET_BACKGROUND_DIRECTION";
export const SET_BACKGROUND_GRADIENT = "SET_BACKGROUND_GRADIENT";
export const SET_IMAGE = "SET_IMAGE";
export const SET_IMAGE_CONTROL = "SET_IMAGE_CONTROL";
export const SET_IMAGE_HAS_ERROR = "SET_IMAGE_HAS_ERROR";
export const SET_IMAGE_SIZE = "SET_IMAGE_SIZE";
export const SET_INITIAL_PREVIEW = "SET_INITIAL_PREVIEW";
export const SET_FONT_SIZE = "SET_FONT_SIZE";
export const SET_TEXT_COLOR = "SET_TEXT_COLOR";
export const SET_TEXT_CONTROL = "SET_TEXT_CONTROL";
export const SET_TEXT_VALUE = "SET_TEXT_VALUE";

export const setInitialPreview = () => ({ type: SET_INITIAL_PREVIEW });
export const setBackgroundControl = () => ({ type: SET_BACKGROUND_CONTROL });
export const setImageControl = () => ({ type: SET_IMAGE_CONTROL });
export const setTextControl = () => ({ type: SET_TEXT_CONTROL });

export const addBackgroundColor = () => ({ type: ADD_BACKGROUND_COLOR });

export const setBackground = (index, color) => ({
  type: SET_BACKGROUND,
  payload: { index, color },
});

export const setFontSize = (value) => ({
  type: SET_FONT_SIZE,
  payload: value,
});

export const setImageSize = (width, height) => ({
  type: SET_IMAGE_SIZE,
  payload: { width, height },
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

export const setImageHasError = (value) => ({
  type: SET_IMAGE_HAS_ERROR,
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

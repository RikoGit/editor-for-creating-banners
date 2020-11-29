import {
  CLEAR_PREVIEW,
  SET_BACKGROUND,
  SET_TEXT_VALUE,
  SET_TEXT_COLOR,
} from "./actions.js";

export default (state, { type, payload }) => {
  switch (type) {
    case CLEAR_PREVIEW: {
      return {
        ...state,
        preview: {
          ...state.preview,
          background: "#ffffff",
          text: { ...state.preview.text, value: "", color: "#000000" },
        },
      };
    }

    case SET_BACKGROUND: {
      return { ...state, preview: { ...state.preview, background: payload } };
    }

    case SET_TEXT_VALUE: {
      return {
        ...state,
        preview: {
          ...state.preview,
          text: { ...state.preview.text, value: payload },
        },
      };
    }

    case SET_TEXT_COLOR: {
      return {
        ...state,
        preview: {
          ...state.preview,
          text: { ...state.preview.text, color: payload },
        },
      };
    }

    default:
      return state;
  }
};

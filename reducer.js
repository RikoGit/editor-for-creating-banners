import {
  CLEAR_PREVIEW,
  SET_BACKGROUND,
  SET_IMAGE,
  IMAGE_LOADED,
  SET_TEXT_VALUE,
  SET_TEXT_COLOR,
  SET_BACKGROUND_DIRECTION,
  SET_BACKGROUND_GRADIENT,
  SET_IMAGE_HAS_ERROR,
} from "./actions.js";

export default (state, { type, payload }) => {
  switch (type) {
    case CLEAR_PREVIEW: {
      return {
        ...state,
        preview: {
          ...state.preview,
          background: { ...state.preview.background, colors: ["#ffffff"] },
          text: { ...state.preview.text, value: "", color: "#000000" },
        },
      };
    }

    case SET_BACKGROUND: {
      const colors = [...state.preview.background.colors];
      colors[payload.index] = payload.color;

      //const persentages = [...state.preview.background.persentages];
      //colors[payload.index] = payload.color;

      return {
        ...state,
        preview: {
          ...state.preview,
          background: { ...state.preview.background, colors },
        },
      };
    }

    case SET_BACKGROUND_GRADIENT: {
      return {
        ...state,
        preview: {
          ...state.preview,
          background: { ...state.preview.background, gradient: payload },
        },
      };
    }

    case SET_BACKGROUND_DIRECTION: {
      return {
        ...state,
        preview: {
          ...state.preview,
          background: { ...state.preview.background, direction: payload },
        },
      };
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

    case SET_IMAGE: {
      return {
        ...state,
        preview: {
          ...state.preview,
          image: payload,
        },
      };
    }

    case IMAGE_LOADED: {
      return {
        ...state,
        preview: {
          ...state.preview,
          imageIsLoaded: payload,
        },
      };
    }

    case SET_IMAGE_HAS_ERROR: {
      return {
        ...state,
        preview: {
          ...state.preview,
          imageHasError: payload,
        },
      };
    }

    default:
      return state;
  }
};

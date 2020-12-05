import {
  SET_INITIAL_PREVIEW,
  SET_BACKGROUND,
  SET_IMAGE,
  SET_LINK,
  IMAGE_LOADED,
  SET_TEXT_VALUE,
  SET_TEXT_COLOR,
  SET_BACKGROUND_DIRECTION,
  SET_BACKGROUND_GRADIENT,
  SET_IMAGE_HAS_ERROR,
  SET_IMAGE_CONTROL,
  SET_BACKGROUND_CONTROL,
  SET_TEXT_CONTROL,
  ADD_BACKGROUND_COLOR,
  SET_FONT_SIZE,
  SET_IMAGE_SIZE,
  SET_INITIAL_IMAGE,
  SET_LINK_CONTROL,
} from "./actions.js";
import { initialPreview } from "./initialPreview.js";

export default (state, { type, payload }) => {
  switch (type) {
    // clear all preview
    case SET_INITIAL_PREVIEW: {
      return {
        ...state,
        preview: {
          ...initialPreview,
          image: { ...initialPreview.image },
          text: { ...initialPreview.text },
          background: { ...initialPreview.background },
        },
      };
    }

    // clear image
    case SET_INITIAL_IMAGE: {
      return {
        ...state,
        preview: {
          ...state.preview,
          image: {
            ...initialPreview.image,
            src: state.preview.image.src,
          },
        },
      };
    }

    case SET_FONT_SIZE: {
      return {
        ...state,
        preview: {
          ...state.preview,
          text: {
            ...state.preview.text,
            fontSize: payload,
          },
        },
      };
    }

    case SET_BACKGROUND: {
      const colors = [...state.preview.background.colors];
      colors[payload.index] = payload.color;

      return {
        ...state,
        preview: {
          ...state.preview,
          background: { ...state.preview.background, colors },
        },
      };
    }

    case ADD_BACKGROUND_COLOR: {
      const colors = [...state.preview.background.colors];
      const percentages = [...state.preview.background.percentages];
      colors.push("#ffffff");
      percentages.push(1);

      return {
        ...state,
        preview: {
          ...state.preview,
          background: { ...state.preview.background, colors, percentages },
        },
      };
    }

    case SET_LINK_CONTROL: {
      return {
        ...state,
        linkControlIsActive: !state.linkControlIsActive,
        imageControlIsActive: false,
        textControlIsActive: false,
        backgroundControlIsActive: false,
      };
    }

    case SET_BACKGROUND_CONTROL: {
      return {
        ...state,
        backgroundControlIsActive: !state.backgroundControlIsActive,
        linkControlIsActive: false,
        imageControlIsActive: false,
        textControlIsActive: false,
      };
    }

    case SET_IMAGE_CONTROL: {
      return {
        ...state,
        imageControlIsActive: !state.imageControlIsActive,
        linkControlIsActive: false,
        backgroundControlIsActive: false,
        textControlIsActive: false,
      };
    }

    case SET_TEXT_CONTROL: {
      return {
        ...state,
        textControlIsActive: !state.textControlIsActive,
        linkControlIsActive: false,
        imageControlIsActive: false,
        backgroundControlIsActive: false,
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

    case SET_LINK: {
      return {
        ...state,
        preview: {
          ...state.preview,
          link: payload,
        },
      };
    }

    case SET_IMAGE: {
      return {
        ...state,
        preview: {
          ...state.preview,
          image: { ...state.preview.image, src: payload },
        },
      };
    }

    case IMAGE_LOADED: {
      console.log("load");
      return {
        ...state,
        preview: {
          ...state.preview,
          image: {
            ...state.preview.image,
            //...initialPreview.image,
            src: state.preview.image.src,
            isLoaded: payload,
          },
        },
      };
    }

    case SET_IMAGE_SIZE: {
      console.log("size");
      return {
        ...state,
        preview: {
          ...state.preview,
          image: {
            ...state.preview.image,
            width: payload.scaledWidth,
            height: payload.scaledHeight,
            startX: payload.startX || initialPreview.image.startX,
            startY: payload.startY || initialPreview.image.startY,
            endX: payload.endX || initialPreview.image.endX,
            endY: payload.endY || initialPreview.image.endY,
          },
        },
      };
    }

    case SET_IMAGE_HAS_ERROR: {
      return {
        ...state,
        preview: {
          ...state.preview,
          image: { ...state.preview.image, hasError: payload },
        },
      };
    }

    default:
      return state;
  }
};

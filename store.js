import { createStore } from "redux";

import { initialPreview } from "./initialPreview.js";
import reducer from "./reducer.js";

const initialState = {
  imageControlIsActive: true,
  backgroundControlIsActive: false,
  textControlIsActive: false,
  fonts: [8, 10, 12, 14, 16, 18, 20, 24, 28, 30, 36, 40, 46, 52, 58, 60],
  backgroundColorsLengthMax: 2,
  preview: {
    ...initialPreview,
    image: { ...initialPreview.image },
    text: { ...initialPreview.text },
    background: { ...initialPreview.background },
  },
};

export default createStore(reducer, initialState);

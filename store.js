import { createStore } from "redux";

import reducer from "./reducer.js";

const initialState = {
  imageControlIsActive: true,
  backgroundControlIsActive: false,
  textControlIsActive: false,
  preview: {
    width: 300,
    height: 400,
    image: "",
    imageIsLoaded: false,
    imageHasError: false,
    text: {
      fonts: [8, 10, 12, 14, 16, 18, 20, 24, 28, 30, 36, 40, 46, 52, 58, 60],
      fontSize: 30,
      lineHeight: 30,
      fontStyle: "normal",
      fontFamily: "sans-serif",
      color: "#000000",
      value: "",
    },
    background: {
      colors: ["#ffffff"],
      colorsLengthMax: 2,
      percentages: [0, 1],
      direction: "horizontal",
      gradient: "linear",
    },
  },
};

export default createStore(reducer, initialState);

import { createStore } from "redux";

import reducer from "./reducer.js";

const initialState = {
  preview: {
    width: 300,
    height: 400,
    illustration: "",
    text: {
      fontSize: "18px",
      lineHeight: "20px",
      fontStyle: "normal",
      fontFamily: "sans-serif",
      color: "#000000",
      value: "",
    },
    background: "#ffffff",
  },
};

export default createStore(reducer, initialState);
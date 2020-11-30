import React from "react";
import { connect } from "react-redux";

import Sidebar from "../Sidebar/index.jsx";
import Preview from "../Preview/index.jsx";
import image from "../../utils.js";

import {
  setBackground,
  setTextValue,
  setTextColor,
  clearPreview,
  setBackgroundDirection,
  setBackgroundGradient,
  setImage,
  imageLoaded,
} from "../../actions.js";

const Main = ({
  preview,
  dispatchSetBackground,
  dispatchSetTextValue,
  dispatchSetTextColor,
  dispatchClearPreview,
  dispatchSetBackgroundDirection,
  dispatchSetBackgroundGradient,
  dispatchSetImage,
  dispatchImageLoaded,
}) => (
  <div className="main">
    <Sidebar
      image={image}
      imageLoaded={dispatchImageLoaded}
      src={preview.image}
      background={preview.background}
      text={preview.text}
      setBackground={dispatchSetBackground}
      setTextValue={dispatchSetTextValue}
      setTextColor={dispatchSetTextColor}
      clearPreview={dispatchClearPreview}
      setImage={dispatchSetImage}
      setBackgroundDirection={dispatchSetBackgroundDirection}
      setBackgroundGradient={dispatchSetBackgroundGradient}
    />
    <Preview
      width={preview.width}
      height={preview.height}
      image={image}
      imageIsLoaded={preview.imageIsLoaded}
      text={preview.text}
      background={preview.background}
    />
  </div>
);

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {
  dispatchSetBackground: setBackground,
  dispatchSetTextValue: setTextValue,
  dispatchSetTextColor: setTextColor,
  dispatchSetImage: setImage,
  dispatchImageLoaded: imageLoaded,
  dispatchClearPreview: clearPreview,
  dispatchSetBackgroundDirection: setBackgroundDirection,
  dispatchSetBackgroundGradient: setBackgroundGradient,
})(Main);

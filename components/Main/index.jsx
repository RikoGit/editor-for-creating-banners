import React from "react";
import { connect } from "react-redux";

import Controls from "../Controls/index.jsx";
import Preview from "../Preview/index.jsx";
import { img } from "../../utils.js";
import "./styles.scss";

import {
  addBackgroundColor,
  imageLoaded,
  setBackground,
  setBackgroundControl,
  setBackgroundDirection,
  setBackgroundGradient,
  setInitialImage,
  setImage,
  setImageControl,
  setImageHasError,
  setImageSize,
  setInitialPreview,
  setFontSize,
  setTextColor,
  setTextControl,
  setTextValue,
} from "../../actions.js";

const Main = ({
  backgroundControlIsActive,
  textControlIsActive,
  imageControlIsActive,
  preview,
  fonts,
  backgroundColorsLengthMax,
  dispatchSetBackground,
  dispatchSetTextValue,
  dispatchSetTextColor,
  dispatchSetInitialPreview,
  dispatchSetBackgroundDirection,
  dispatchSetBackgroundGradient,
  dispatchSetInitialImage,
  dispatchSetImage,
  dispatchImageLoaded,
  dispatchSetImageHasError,
  dispatchSetTextControl,
  dispatchSetImageControl,
  dispatchSetBackgroundControl,
  dispatchAddBackgroundColor,
  dispatchSetFontSize,
  dispatchSetImageSize,
}) => (
  <div className="main">
    <header className="header">
      <Controls
        img={img}
        preview={preview}
        fonts={fonts}
        backgroundColorsLengthMax={backgroundColorsLengthMax}
        imageControlIsActive={imageControlIsActive}
        backgroundControlIsActive={backgroundControlIsActive}
        textControlIsActive={textControlIsActive}
        imageLoaded={dispatchImageLoaded}
        setBackground={dispatchSetBackground}
        setTextValue={dispatchSetTextValue}
        setTextColor={dispatchSetTextColor}
        setImage={dispatchSetImage}
        setBackgroundDirection={dispatchSetBackgroundDirection}
        setBackgroundGradient={dispatchSetBackgroundGradient}
        setImageHasError={dispatchSetImageHasError}
        setImageControl={dispatchSetImageControl}
        setBackgroundControl={dispatchSetBackgroundControl}
        setTextControl={dispatchSetTextControl}
        addBackgroundColor={dispatchAddBackgroundColor}
        setFontSize={dispatchSetFontSize}
        setImageSize={dispatchSetImageSize}
        setInitialImage={dispatchSetInitialImage}
      />
    </header>
    <Preview
      preview={preview}
      img={img}
      setImageSize={dispatchSetImageSize}
      setInitialPreview={dispatchSetInitialPreview}
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
  dispatchSetInitialPreview: setInitialPreview,
  dispatchSetBackgroundDirection: setBackgroundDirection,
  dispatchSetBackgroundGradient: setBackgroundGradient,
  dispatchSetImageHasError: setImageHasError,
  dispatchSetImageControl: setImageControl,
  dispatchSetBackgroundControl: setBackgroundControl,
  dispatchSetTextControl: setTextControl,
  dispatchAddBackgroundColor: addBackgroundColor,
  dispatchSetFontSize: setFontSize,
  dispatchSetImageSize: setImageSize,
  dispatchSetInitialImage: setInitialImage,
})(Main);

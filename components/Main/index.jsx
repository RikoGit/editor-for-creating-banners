import React from "react";
import { connect } from "react-redux";

import Controls from "../ Controls/index.jsx";
import Preview from "../Preview/index.jsx";
import { image } from "../../utils.js";
import "./styles.scss";

import {
  setBackground,
  setTextValue,
  setTextColor,
  clearPreview,
  setBackgroundDirection,
  setBackgroundGradient,
  setImage,
  imageLoaded,
  setImageHasError,
  setImageControl,
  setTextControl,
  setBackgroundControl,
} from "../../actions.js";

const Main = ({
  backgroundControlIsActive,
  textControlIsActive,
  imageControlIsActive,
  preview,
  dispatchSetBackground,
  dispatchSetTextValue,
  dispatchSetTextColor,
  dispatchClearPreview,
  dispatchSetBackgroundDirection,
  dispatchSetBackgroundGradient,
  dispatchSetImage,
  dispatchImageLoaded,
  dispatchSetImageHasError,
  dispatchSetTextControl,
  dispatchSetImageControl,
  dispatchSetBackgroundControl,
}) => (
  <div className="main">
    <header className="header">
      <Controls
        image={image}
        imageLoaded={dispatchImageLoaded}
        imageHasError={preview.imageHasError}
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
        setImageHasError={dispatchSetImageHasError}
        setImageControl={dispatchSetImageControl}
        setBackgroundControl={dispatchSetBackgroundControl}
        setTextControl={dispatchSetTextControl}
        imageControlIsActive={imageControlIsActive}
        backgroundControlIsActive={backgroundControlIsActive}
        textControlIsActive={textControlIsActive}
      />
    </header>
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
  dispatchSetImageHasError: setImageHasError,
  dispatchSetImageControl: setImageControl,
  dispatchSetBackgroundControl: setBackgroundControl,
  dispatchSetTextControl: setTextControl,
})(Main);

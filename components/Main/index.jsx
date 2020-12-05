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
  setLink,
  setImageControl,
  setImageHasError,
  setImageSize,
  setInitialPreview,
  setFontSize,
  setTextColor,
  setTextControl,
  setTextValue,
  setLinkControl,
} from "../../actions.js";

const Main = ({
  backgroundControlIsActive,
  textControlIsActive,
  imageControlIsActive,
  linkControlIsActive,
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
  dispatchSetLink,
  dispatchImageLoaded,
  dispatchSetImageHasError,
  dispatchSetTextControl,
  dispatchSetImageControl,
  dispatchSetBackgroundControl,
  dispatchAddBackgroundColor,
  dispatchSetFontSize,
  dispatchSetImageSize,
  dispatchSetLinkControl,
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
        linkControlIsActive={linkControlIsActive}
        textControlIsActive={textControlIsActive}
        imageLoaded={dispatchImageLoaded}
        setBackground={dispatchSetBackground}
        setTextValue={dispatchSetTextValue}
        setTextColor={dispatchSetTextColor}
        setImage={dispatchSetImage}
        setLink={dispatchSetLink}
        setBackgroundDirection={dispatchSetBackgroundDirection}
        setBackgroundGradient={dispatchSetBackgroundGradient}
        setLinkControl={dispatchSetLinkControl}
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
  dispatchSetLink: setLink,
  dispatchImageLoaded: imageLoaded,
  dispatchSetInitialPreview: setInitialPreview,
  dispatchSetBackgroundDirection: setBackgroundDirection,
  dispatchSetBackgroundGradient: setBackgroundGradient,
  dispatchSetImageHasError: setImageHasError,
  dispatchSetImageControl: setImageControl,
  dispatchSetLinkControl: setLinkControl,
  dispatchSetBackgroundControl: setBackgroundControl,
  dispatchSetTextControl: setTextControl,
  dispatchAddBackgroundColor: addBackgroundColor,
  dispatchSetFontSize: setFontSize,
  dispatchSetImageSize: setImageSize,
  dispatchSetInitialImage: setInitialImage,
})(Main);

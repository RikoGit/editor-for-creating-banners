import React from "react";
import { connect } from "react-redux";

import Sidebar from "../Sidebar/index.jsx";
import Preview from "../Preview/index.jsx";
import Menu from "../Menu/index.jsx";
import {
  setBackground,
  setTextValue,
  setTextColor,
  clearPreview,
} from "../../actions.js";

const Main = ({
  preview,
  dispatchSetBackground,
  dispatchSetTextValue,
  dispatchSetTextColor,
  dispatchClearPreview,
}) => (
  <div className="main">
    <Sidebar
      background={preview.background}
      setBackground={dispatchSetBackground}
      setTextValue={dispatchSetTextValue}
      setTextColor={dispatchSetTextColor}
      clearPreview={dispatchClearPreview}
      text={preview.text}
    />
    <Preview
      width={preview.width}
      height={preview.height}
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
  dispatchClearPreview: clearPreview,
})(Main);
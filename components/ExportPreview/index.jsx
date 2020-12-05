import React, { useRef } from "react";

import { downloadPreview, getHtml, getJson } from "../../utils.js";
import "./styles.scss";

const ExportPreview = ({ canvas, preview, img }) => {
  const downloadRef = useRef(null);

  return (
    <div className="export">
      <a
        className="export__button export__button_type_download"
        download="preview.png"
        href=""
        ref={downloadRef}
        onClick={() => downloadPreview(canvas, downloadRef)}
        title="Сохранить как PNG"
      >
        PNG
      </a>
      <button
        type="button"
        className="export__button export__button_type_copy"
        onClick={() => getHtml(preview, img)}
        title="Скопировать как html"
      >
        html
      </button>
      <button
        type="button"
        className="export__button export__button_type_copy"
        onClick={() => getJson(preview)}
        title="Скопировать как json строку"
      >
        json
      </button>
    </div>
  );
};

export default ExportPreview;

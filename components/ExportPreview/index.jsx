import React, { useRef } from "react";

import { downloadPreview, getHtml, getJson } from "../../utils.js";
import "./styles.scss";

const ExportPreview = ({ canvas, preview, img }) => {
  const downloadRef = useRef(null);

  return (
    <div className="export">
      <a
        className="export__button"
        download="preview.png"
        href=""
        ref={downloadRef}
        onClick={() => downloadPreview(canvas, downloadRef)}
      >
        Сохранить в png
      </a>
      <button
        type="button"
        className="export__button"
        onClick={() => getHtml(preview, img)}
      >
        Скопировать
      </button>
      <button
        type="button"
        className="export__button"
        onClick={() => getJson(preview)}
      >
        Скопировать как json строку
      </button>
    </div>
  );
};

export default ExportPreview;

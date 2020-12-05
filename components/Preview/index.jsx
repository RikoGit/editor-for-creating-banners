import React, { useEffect, useRef } from "react";

import ExportPreview from "../ExportPreview/index.jsx";
import { drawPreview, clearPreview } from "../../utils.js";
import "./styles.scss";

const Preview = ({ preview, img, setImageSize, setInitialPreview }) => {
  const { width, height, text, background, image } = preview;
  const canvasRef = useRef(null);

  {
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext(`2d`);
      drawPreview({ ctx, preview, img, setImageSize });
    }, [background, text, image.isLoaded]);
  }
  return (
    <>
      <div className="preview">
        <canvas id="canvas" width={width} height={height} ref={canvasRef}>
          Браузер не поддерживает Canvas
        </canvas>
        <button
          type="button"
          className="controls__button controls__button_type_create"
          onClick={() =>
            clearPreview({ canvasRef, width, height, setInitialPreview })
          }
          title="Создать новый"
        >
          Новый
        </button>
        <ExportPreview canvas={canvasRef} preview={preview} img={img} />
      </div>
    </>
  );
};

export default Preview;

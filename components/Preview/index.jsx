import React, { useEffect, useRef } from "react";

import Menu from "../Menu/index.jsx";

const Preview = ({ width, height, background, text }) => {
  const canvasRef = useRef(null);
  const downloadRef = useRef(null);

  const drawPreview = (ctx) => {
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = text.color;
    ctx.font = `${text.fontSize} ${text.fontFamily}`;
    ctx.fillText(text.value, 20, 50, 260);
  };

  const downloadPreview = () => {
    // get image URI from canvas object
    const canvas = canvasRef.current;
    const imageURI = canvas.toDataURL("image/png");
    downloadRef.current.href = imageURI;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext(`2d`);
    drawPreview(ctx);
  }, [background, text]);

  const download_img = function (el) {
    // get image URI from canvas object
    const canvas = canvasRef.current;
    const ctx = canvas.getContext(`2d`);
    console.log(ctx);
    var imageURI = canvas.toDataURL("image/png");
    document.querySelector("#download").href = imageURI;
  };

  return (
    <div className="main">
      <canvas id="canvas" width={width} height={height} ref={canvasRef}>
        Браузер не поддерживает Canvas
      </canvas>
      <Menu downloadPreview={downloadPreview} downloadRef={downloadRef} />
    </div>
  );
};

export default Preview;

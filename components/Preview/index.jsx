import React, { useEffect, useRef } from "react";

import Menu from "../Menu/index.jsx";

const Preview = ({ width, height, text, background }) => {
  const canvasRef = useRef(null);
  const downloadRef = useRef(null);

  const drawPreview = (ctx) => {
    if (background.length === 1) {
      ctx.fillStyle = background.colors[0];
    } else {
      let grd = ctx.createLinearGradient(0, 0, width, 0);

      if (background.gradient === "radial") {
        grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
      } else if (background.direction === "vertical") {
        grd = ctx.createLinearGradient(0, 0, 0, height);
      }

      background.colors.forEach((color, index) =>
        grd.addColorStop(background.percentages[index], color)
      );
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, width, height);
    }
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

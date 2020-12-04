export const img = new Image();
img.crossOrigin = "anonymous";

export const clearPreview = ({
  canvasRef,
  width,
  height,
  setInitialPreview,
}) => {
  const ctx = canvasRef.current.getContext(`2d`);
  ctx.clearRect(0, 0, width, height);
  setInitialPreview();
};

export const drawImage = ({ ctx, img, width, height, setImageSize }) => {
  let x = 10;
  let scaledWidth = img.width;
  let scaledHeight = img.height;

  if (img.width < width - x && img.height < height - x) {
    x = width - img.width;
  } else if (img.width / (width - x) > img.height / (height - x)) {
    scaledWidth = width - x;
    scaledHeight = Math.floor(((width - x) * img.height) / img.width);
  } else {
    scaledWidth = Math.floor(((height - x) * img.width) / img.height);
    scaledHeight = height - x;
    x = width - scaledWidth;
  }
  setImageSize(scaledWidth, scaledHeight);
  ctx.drawImage(img, x, 0, scaledWidth, scaledHeight);
};

export const drawText = (ctx, text, x, y, maxWidth, lineHeight) => {
  const words = text.split(" ");
  let line = "";

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + " ";
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, x, y);
      line = words[n] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }

  ctx.fillText(line, x, y);
};

export const drawPreview = ({ ctx, preview, img, setImageSize }) => {
  const { width, height, background, text, image } = preview;

  if (background.length === 1) {
    ctx.fillStyle = background.colors[0];
  } else {
    let grd = ctx.createLinearGradient(0, 0, width, 0);

    if (background.gradient === "radial") {
      grd = ctx.createRadialGradient(150, 200, 10, 160, 200, 400);
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

  if (image.isLoaded) {
    drawImage({ ctx, img, width, height, setImageSize });
  }
  ctx.font = `${text.fontSize}px ${text.fontFamily}`;
  //ctx.fillText(text.value, 20, 50, 260);
  drawText(ctx, text.value, 10, 10, 200, text.lineHeight);
};

export const downloadPreview = (canvas, downloadElement) => {
  // get image URI from canvas object
  const imageURI = canvas.current.toDataURL("image/png");
  downloadElement.current.href = imageURI;
};

export const getHtml = (preview, img) => {
  const { width, height, background, text, image } = preview;

  navigator.clipboard.writeText(`<div class="banner">
      <img src="${image.src}" width="${image.width}" height="${image.height}"/>
      ${text}
    </div>`);
};

export const getJson = (preview) =>
  navigator.clipboard.writeText(JSON.stringify(preview, null, 2));

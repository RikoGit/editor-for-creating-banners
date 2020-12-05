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

export const drawImage = ({ ctx, img, image, width, height, setImageSize }) => {
  let startX = image.startX;
  let startY = image.startY;
  let endX = width;
  let endY = height;
  let scaledWidth = image.width;
  let scaledHeight = image.height;

  if (image.width <= width - startX && image.height <= height - startY) {
    startX = width - image.width;
  } else if (
    image.width / (width - startX) >
    image.height / (height - startX)
  ) {
    scaledWidth = width - startX;
    scaledHeight = Math.floor(((width - startX) * image.height) / image.width);
  } else {
    scaledWidth = Math.floor(((height - startX) * image.width) / image.height);
    scaledHeight = height - startX;
    startX = width - scaledWidth;
  }
  endY = scaledHeight;
  setImageSize({ scaledWidth, scaledHeight, startX, startY, endX, endY });
  ctx.drawImage(img, startX, startY, scaledWidth, scaledHeight);
};

const drawText = (ctx, text, x, y, maxWidth, lineHeight) => {
  const words = text.split(" ");
  let line = "";
  let linesCount = 1;

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + " ";
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      if (linesCount === 3) {
        break;
      }
      linesCount += 1;
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

  console.log(
    `width = ${image.width}; height = ${image.height}; width img = ${img.width}; height img = ${img.height}`
  );

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
    drawImage({ ctx, img, image, width, height, setImageSize });
  }
  ctx.font = `${text.fontSize}px ${text.fontFamily}`;
  drawText(
    ctx,
    text.value,
    text.startX,
    text.startY,
    width - 20,
    text.lineHeight
  );
};

export const downloadPreview = (canvas, downloadElement) => {
  // get image URI from canvas object
  const imageURI = canvas.current.toDataURL("image/png");
  downloadElement.current.href = imageURI;
};

export const getHtml = (preview) => {
  const { width, height, background, text, image } = preview;

  navigator.clipboard.writeText(`<style>
    .preview {
        position: relative;
        width: ${width}px;
        height: ${height}px;
        display: block;
        ${
          background.colors.length === 1
            ? `background: ${background.colors[0]}`
            : ""
        };
        ${
          background.colors.length > 1 &&
          background.gradient === "linear" &&
          background.direction === "horizontal"
            ? `background: linear-gradient(90deg, ${background.colors[0]} ${
                background.percentages[0] * 100
              }%, ${background.colors[1]} ${background.percentages[1] * 100}%)`
            : ""
        };
        ${
          background.colors.length > 1 &&
          background.gradient === "linear" &&
          background.direction === "vertical"
            ? `background: linear-gradient(180deg, ${background.colors[0]} ${
                background.percentages[0] * 100
              }%, ${background.colors[1]} ${background.percentages[1] * 100}%)`
            : ""
        };
        ${
          background.colors.length > 1 && background.gradient === "radial"
            ? `background: radial-gradient(${height}px ${height}px, ${background.colors[0]}, ${background.colors[1]});`
            : ""
        };
    } 
    .preview__image {
        position: absolute;
        left: ${image.startX}px;
        top: ${image.startY}px;
        z-index: 1;
    }
    .preview__text {
        position: absolute;
        left: ${text.startX}px;
        top: ${text.startY}px;
        max-width: ${width - 10}px;
        overflow: hidden;
        text-overflow: ellipsis;
        font: ${text.fontStyle} ${text.fontSize}px/${text.lineHeight}px ${
    text.fontFamily
  };
  color: ${text.color};

        z-index: 2;
    }
    </style>
      <a class="preview">
      ${
        image.isLoaded && image.src
          ? `<img class="preview__image" src=${encodeURI(image.src)} width=${
              image.width
            } height=${image.height}/>`
          : ""
      }
      ${text.value ? `<span class="preview__text">${text.value}</span>` : ""}
      </a>`);
};

export const getJson = (preview) =>
  navigator.clipboard.writeText(JSON.stringify(preview, null, 2));

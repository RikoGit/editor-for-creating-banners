import React from "react";

import "./styles.scss";

const Controls = ({
  imageControlIsActive,
  backgroundControlIsActive,
  textControlIsActive,
  src,
  image,
  imageLoaded,
  imageHasError,
  background,
  text,
  setBackground,
  setTextValue,
  setTextColor,
  clearPreview,
  setBackgroundDirection,
  setBackgroundGradient,
  setImage,
  setImageHasError,
  setImageControl,
  setTextControl,
  setBackgroundControl,
}) => {
  const uploadImage = () => {
    if (!src) return;

    image.onload = () => imageLoaded(true);

    image.onerror = (error) => {
      console.log(error);
      setImageHasError(true);
    };

    try {
      image.src = src;
    } catch {
      console.log("Error");
    }
    imageLoaded(false);
    setImageHasError(false);
  };

  return (
    <div className="controls">
      <div className="controls__main">
        <button
          type="button"
          className="controls__button controls__button_type_create"
          onClick={clearPreview}
        >
          Создать новый
        </button>
        <div className="">
          <button
            type="button"
            className="controls__button"
            onClick={setImageControl}
          >
            Иллюстрация
          </button>
          <button
            type="button"
            className="controls__button"
            onClick={setTextControl}
          >
            Текст
          </button>
          <button
            type="button"
            className="controls__button"
            onClick={setBackgroundControl}
          >
            Фон
          </button>
        </div>
        <div className="">
          <button type="button" className="controls__button">
            Скачать
          </button>
        </div>
      </div>
      <div className="controls__more">
        <div
          className={`controls__detail${
            imageControlIsActive ? " controls__detail_type_active" : ""
          }`}
        >
          <span>(по ссылке или dataURI)</span>
          <input
            className="controls__input"
            type="text"
            placeholder="Введите url"
            value={src}
            onChange={(event) => setImage(event.target.value)}
          ></input>
          <span className="controls__error">
            {imageHasError && "ошибка при загрузке картинки"}
          </span>
          <button
            type="button"
            onClick={uploadImage}
            className="controls__button"
          >
            Загрузить
          </button>
        </div>
        <div
          className={`controls__detail${
            textControlIsActive ? " controls__detail_type_active" : ""
          }`}
        >
          <input
            className="controls__input"
            type="text"
            placeholder="Введите текст"
            value={text.value}
            onChange={(event) => setTextValue(event.target.value)}
          ></input>
          <span className="controls__note">не более 3 строк текста</span>
          <input
            className="controls__input"
            type="color"
            value={text.color}
            onChange={(event) => setTextColor(event.target.value)}
          />
        </div>
        <div
          className={`controls__detail${
            backgroundControlIsActive ? " controls__detail_type_active" : ""
          }`}
        >
          <input
            className="controls__color"
            type="color"
            value={background.colors[0]}
            onChange={(event) => setBackground(0, event.target.value)}
          />
          <button type="button" className="controls__button">
            +
          </button>
          <input
            className="controls__color"
            type="color"
            //value={background[1].color}
            onChange={(event) => setBackground(1, event.target.value)}
          />
          <div>
            <label>
              <input
                className="controls__radio"
                type="radio"
                name="direction"
                value="horizontal"
                checked={background.direction === "horizontal"}
                onChange={(event) => setBackgroundDirection(event.target.value)}
              />
              горизонтальный градиент
            </label>
            <label>
              <input
                className="controls__radio"
                type="radio"
                name="direction"
                value="vertical"
                checked={background.direction === "vertical"}
                onChange={(event) => setBackgroundDirection(event.target.value)}
              />
              вертикальный градиент
            </label>
          </div>
          <div>
            <label>
              <input
                className="controls__radio"
                type="radio"
                name="gradient"
                value="linear"
                checked={background.gradient === "linear"}
                onChange={(event) => setBackgroundGradient(event.target.value)}
              />
              линейный градиент
            </label>
            <label>
              <input
                className="controls__radio"
                type="radio"
                name="gradient"
                value="radial"
                checked={background.gradient === "radial"}
                onChange={(event) => setBackgroundGradient(event.target.value)}
              />
              радиальный градиент
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controls;

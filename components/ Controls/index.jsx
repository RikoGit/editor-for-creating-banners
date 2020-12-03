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
  addBackgroundColor,
  setImage,
  setImageHasError,
  setImageControl,
  setTextControl,
  setBackgroundControl,
  setFontSize,
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
        <button
          type="button"
          className={`controls__button${
            imageControlIsActive ? " controls__button_type_active" : ""
          }`}
          onClick={setImageControl}
        >
          Иллюстрация
        </button>
        <button
          type="button"
          className={`controls__button${
            textControlIsActive ? " controls__button_type_active" : ""
          }`}
          onClick={setTextControl}
        >
          Текст
        </button>
        <button
          type="button"
          className={`controls__button${
            backgroundControlIsActive ? " controls__button_type_active" : ""
          }`}
          onClick={setBackgroundControl}
        >
          Фон
        </button>
      </div>
      <div
        className={`controls__more${
          imageControlIsActive ||
          backgroundControlIsActive ||
          textControlIsActive
            ? " controls__more_active"
            : ""
        }`}
      >
        <div
          className={`controls__detail${
            imageControlIsActive ? " controls__detail_type_active" : ""
          }`}
        >
          <label
            className={`controls__label${
              imageHasError ? " controls__label_type_error" : ""
            }`}
          >
            <input
              className="controls__input"
              type="text"
              placeholder="Введите url"
              value={src}
              onChange={(event) => setImage(event.target.value)}
            ></input>
            <span className="controls__note">ссылка или dataURI</span>
            <span className="controls__error">
              ошибка при загрузке картинки
            </span>
          </label>
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
          <select
            type="button"
            className="controls__select"
            onChange={(event) => setFontSize(event.target.value)}
            value={text.fontSize}
          >
            {text.fonts.map((font) => (
              <option>{font}</option>
            ))}
          </select>
          <input
            className="controls__color"
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
          {background.colors.map((color, index) => (
            <input
              className="controls__color"
              type="color"
              value={color}
              onChange={(event) => setBackground(index, event.target.value)}
            />
          ))}

          {background.colors.length < background.colorsLengthMax && (
            <button
              type="button"
              className="controls__button controls__button_type_add"
              title="Добавить цвет"
              onClick={addBackgroundColor}
            >
              +
            </button>
          )}

          {background.colors.length > 1 && (
            <div
              className={`controls__gradient${
                background.gradient === "linear"
                  ? " controls__gradient_type_linear"
                  : ""
              }`}
            >
              <div className="controls__radiogroup">
                <label
                  className={`controls__label${
                    background.gradient === "linear"
                      ? " controls__label_active"
                      : ""
                  }`}
                >
                  <input
                    className="controls__radio"
                    type="radio"
                    name="gradient"
                    value="linear"
                    checked={background.gradient === "linear"}
                    onChange={(event) =>
                      setBackgroundGradient(event.target.value)
                    }
                  />
                  линейный
                </label>
                <label
                  className={`controls__label${
                    background.gradient === "radial"
                      ? " controls__label_active"
                      : ""
                  }`}
                >
                  <input
                    className="controls__radio"
                    type="radio"
                    name="gradient"
                    value="radial"
                    checked={background.gradient === "radial"}
                    onChange={(event) =>
                      setBackgroundGradient(event.target.value)
                    }
                  />
                  радиальный
                </label>
              </div>
              <div
                className={`controls__radiogroup ${
                  background.gradient === "radial"
                    ? "controls__radiogroup_type_disable"
                    : ""
                }`}
              >
                <label
                  className={`controls__label${
                    background.direction === "horizontal"
                      ? " controls__label_active"
                      : ""
                  }`}
                >
                  <input
                    className="controls__radio"
                    type="radio"
                    name="direction"
                    value="horizontal"
                    checked={background.direction === "horizontal"}
                    onChange={(event) =>
                      setBackgroundDirection(event.target.value)
                    }
                  />
                  горизонтальный
                </label>
                <label
                  className={`controls__label${
                    background.direction === "vertical"
                      ? " controls__label_active"
                      : ""
                  }`}
                >
                  <input
                    className="controls__radio"
                    type="radio"
                    name="direction"
                    value="vertical"
                    checked={background.direction === "vertical"}
                    onChange={(event) =>
                      setBackgroundDirection(event.target.value)
                    }
                  />
                  вертикальный
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Controls;

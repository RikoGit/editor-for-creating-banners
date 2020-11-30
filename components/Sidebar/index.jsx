import React from "react";

const Sidebar = ({
  src,
  image,
  background,
  text,
  setBackground,
  setTextValue,
  setTextColor,
  clearPreview,
  setBackgroundDirection,
  setBackgroundGradient,
  setImage,
  imageLoaded,
}) => {
  const uploadImage = () => {
    if (!src) return;

    // Привязываем функцию к событию onload
    // Это указывает браузеру, что делать, когда изображение загружено
    image.onload = () => {
      imageLoaded(true);
      console.log("dfsd");
    };
    // Загружаем файл изображения
    image.src = src;
    imageLoaded(false);
  };

  return (
    <div className="sidebar">
      <button type="button" onClick={clearPreview}>
        Новый баннер
      </button>
      <button type="button">Иллюстрация (по ссылке или dataURI)</button>
      <input
        type="text"
        placeholder="Введите url"
        value={src}
        onChange={(event) => setImage(event.target.value)}
      ></input>
      <button type="button" onClick={uploadImage}>
        Загрузить картинку
      </button>
      <button type="button">Текст</button>
      <input
        type="text"
        placeholder="Введите текст"
        value={text.value}
        onChange={(event) => setTextValue(event.target.value)}
      ></input>
      не более 3 строк текста
      <button type="button">
        Цвет текста
        <input
          type="color"
          value={text.color}
          onChange={(event) => setTextColor(event.target.value)}
        />
      </button>
      <button type="button">
        Фон
        <input
          type="color"
          value={background.colors[0]}
          onChange={(event) => setBackground(0, event.target.value)}
        />
      </button>
      <button type="button">
        Цвет 2
        <input
          type="color"
          //value={background[1].color}
          onChange={(event) => setBackground(1, event.target.value)}
        />
      </button>
      <div>
        <label>
          <input
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
  );
};

export default Sidebar;

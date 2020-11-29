import React from "react";

const Sidebar = ({
  background,
  text,
  setBackground,
  setTextValue,
  setTextColor,
  clearPreview,
}) => (
  <div className="sidebar">
    <button type="button" onClick={clearPreview}>
      Новый баннер
    </button>
    <button type="button">Иллюстрация (по ссылке или dataURI)</button>
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
        value={background}
        onChange={(event) => setBackground(event.target.value)}
      />
    </button>
  </div>
);

export default Sidebar;

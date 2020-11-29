import React from "react";

const Menu = ({ downloadPreview, downloadRef }) => (
  <div className="menu">
    <a
      download="preview.png"
      href=""
      onClick={() => downloadPreview()}
      ref={downloadRef}
    >
      Download to myImage.jpg
    </a>
    {/*    <button type="button" onClick={() => downloadPreview()}>
      сохранить картинку в png
    </button>
    */}
    <button type="button">
      скопировать баннер в буфер обмена, как html или jsx
    </button>
    <button type="button">
      строку (на ваше усмотрение) скопировать конфигурацию баннера в буфер
      обмена, как json строку
    </button>
  </div>
);

export default Menu;

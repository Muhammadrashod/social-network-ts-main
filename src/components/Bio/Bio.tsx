import React from "react";

const Bio = () => {
  return (
    <div className="bio">
      <div className="bio__data">
        <div className="data__item">
          <svg
            className="icon icon-birthday"
            viewBox="0 0 21 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="icon"
              d="M7.81348 3.225L9.24082 6H6.23438C5.32793 6 4.59375 5.16094 4.59375 4.125C4.59375 3.08906 5.32793 2.25 6.23438 2.25H6.32461C6.93574 2.25 7.50586 2.62031 7.81348 3.225ZM2.625 4.125C2.625 4.8 2.76855 5.4375 3.01875 6H1.3125C0.586523 6 0 6.67031 0 7.5V10.5C0 11.3297 0.586523 12 1.3125 12H19.6875C20.4135 12 21 11.3297 21 10.5V7.5C21 6.67031 20.4135 6 19.6875 6H17.9812C18.2314 5.4375 18.375 4.8 18.375 4.125C18.375 1.84687 16.759 0 14.7656 0H14.6754C13.367 0 12.1529 0.792188 11.4885 2.08125L10.5 4.00781L9.51152 2.08594C8.84707 0.792188 7.63301 0 6.32461 0H6.23438C4.24102 0 2.625 1.84687 2.625 4.125ZM16.4062 4.125C16.4062 5.16094 15.6721 6 14.7656 6H11.7592L13.1865 3.225C13.4982 2.62031 14.0643 2.25 14.6754 2.25H14.7656C15.6721 2.25 16.4062 3.08906 16.4062 4.125ZM1.3125 13.5V21.75C1.3125 22.9922 2.19434 24 3.28125 24H9.1875V13.5H1.3125ZM11.8125 24H17.7188C18.8057 24 19.6875 22.9922 19.6875 21.75V13.5H11.8125V24Z"
              fill="#526ED3"
            />
          </svg>
          <p className="main__text">
            День рождения: <span>9 августа</span>
          </p>
        </div>
        <div className="data__item">
          <svg
            className="icon icon-location"
            viewBox="0 0 19 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="icon"
              d="M9.5 12C10.1531 12 10.7124 11.7648 11.1779 11.2944C11.6434 10.824 11.8758 10.2592 11.875 9.6C11.875 8.94 11.6423 8.3748 11.1767 7.9044C10.7112 7.434 10.1523 7.1992 9.5 7.2C8.84688 7.2 8.28756 7.4352 7.82206 7.9056C7.35656 8.376 7.12421 8.9408 7.125 9.6C7.125 10.26 7.35775 10.8252 7.82325 11.2956C8.28875 11.766 8.84767 12.0008 9.5 12ZM9.5 24C6.31354 21.26 3.93379 18.7152 2.36075 16.3656C0.787708 14.016 0.000791667 11.8408 0 9.84C0 6.84 0.955146 4.45 2.86544 2.67C4.77573 0.89 6.98725 0 9.5 0C12.0135 0 14.2255 0.89 16.1357 2.67C18.046 4.45 19.0008 6.84 19 9.84C19 11.84 18.2131 14.0152 16.6392 16.3656C15.0654 18.716 12.6857 21.2608 9.5 24Z"
              fill="#526ED3"
            />
          </svg>
          <p className="main__text">
            Город: <span>Ташкент</span>
          </p>
        </div>
        <div className="data__item">
          <svg
            className="icon icon-heart"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="icon"
              d="M11.5 23L9.8325 21.3455C3.91 15.4921 0 11.6191 0 6.89373C0 3.02071 2.783 0 6.325 0C8.326 0 10.2465 1.01526 11.5 2.60708C12.7535 1.01526 14.674 0 16.675 0C20.217 0 23 3.02071 23 6.89373C23 11.6191 19.09 15.4921 13.1675 21.3455L11.5 23Z"
              fill="#526ED3"
            />
          </svg>
          <p className="main__text">
            Статус: <span>Не указано</span>
          </p>
        </div>
      </div>
      <div className="bio__info">
        <p className="main__text education">Образование</p>
        <p className="secondary__text education">
          Филиал университета нефти и газа им. Губкина в Ташкенте
        </p>
        <p className="main__text activity">Деятельность</p>
        <p className="secondary__text activity">Фотограф</p>
        <p className="main__text hobby">Хобби</p>
        <p className="secondary__text hobby">Танцы</p>
      </div>
      <div className="bio__buttons">
        <button className="primary">Подробнее</button>
        <button className="secondary">Редактировать </button>
      </div>
    </div>
  );
};

export default Bio;

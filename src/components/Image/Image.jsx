import React from "react";
import "./Image.css";

export const Image = () => {
  function getRandomNumber(num) {
    let min = Math.ceil(1);
    let max = Math.floor(num);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const number = getRandomNumber(10);
  const urlImage = `./${number}.jpeg`;

  return (
    <>
      <picture>
        <img src={require(`${urlImage}`)} alt="imagen de fermin" />
      </picture>
    </>
  );
};

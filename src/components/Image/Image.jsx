import React, { useState, useEffect } from "react";
import "./Image.css";

export const Image = () => {
  const [image, setImage] = useState("./images/1.jpeg");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNumber = getRandomNumber(10);
      const newImageUrl = `./images/${randomNumber}.jpeg`;
      setImage(newImageUrl);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  function getRandomNumber(num) {
    let min = Math.ceil(1);
    let max = Math.floor(num);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <>
      <picture>
        <img src={`${image}`} alt="imagen de fermin" />
      </picture>
    </>
  );
};

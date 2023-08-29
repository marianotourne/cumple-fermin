import React from "react";
import imagen from "../../assets/01.jpeg";
import "./Image.css";

export const Image = () => {
  return (
    <>
      <picture>
        <img src={imagen} alt="imagen de fermin" />
      </picture>
    </>
  );
};

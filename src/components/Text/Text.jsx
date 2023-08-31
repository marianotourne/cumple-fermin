import React from "react";
import { useOption } from "../Context/Context";
import { Que } from "../Que/Que";
import { Cuando } from "../Cuando/Cuando";
import { Donde } from "../Donde/Donde";
import "./Text.css";

export const Text = () => {
  const { option } = useOption();

  let component;

  if (option === "que") {
    component = <Que />;
  } else if (option === "cuando") {
    component = <Cuando />;
  } else {
    component = <Donde />;
  }

  return <>{component}</>;
};

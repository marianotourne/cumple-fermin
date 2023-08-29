import React from "react";
import { useOption } from "../Context/Context";
import "./Navbar.css";

export const Navbar = () => {
  const options = [
    {
      id: 1,
      name: "que",
      display: "Qué?",
    },
    {
      id: 2,
      name: "cuando",
      display: "Cuándo?",
    },
    {
      id: 3,
      name: "donde",
      display: "Dónde?",
    },
  ];

  const { setOption } = useOption();

  const optionSelected = (a) => {
    setOption(a);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {options.map((option) => (
          <li
            key={option.id}
            className="nav-item"
            onClick={() => optionSelected(option.name)}
          >
            {option.display}
          </li>
        ))}
      </ul>
    </nav>
  );
};

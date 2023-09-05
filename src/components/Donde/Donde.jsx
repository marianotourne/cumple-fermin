import React from "react";

export const Donde = () => {
  const ubication = "https://goo.gl/maps/C51FzGYXxdsvexB96";

  return (
    <div className="footerText">
      <p>Salón La Aripuca</p>
      <p>Astor Piazzolla 248</p>
      <a href={ubication} target="_blank" rel="noreferrer">
        Ver en el mapa
      </a>
    </div>
  );
};

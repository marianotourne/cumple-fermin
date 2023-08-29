import React from "react";

export const Donde = () => {
  const ubication = "https://goo.gl/maps/rFbnFrpiYzcNyco28";

  return (
    <div className="footerText">
      <p>Quinta Ferminchus</p>
      <p>Labarden 236</p>
      <a href={ubication}>Ver en el mapa</a>
    </div>
  );
};

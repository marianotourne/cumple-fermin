import React, { createContext, useContext, useState } from "react";

const OptionContext = createContext();

export const OptionProvider = ({ children }) => {
  const initialValue = "que";
  const [option, setOption] = useState(initialValue);

  return (
    <OptionContext.Provider value={{ option, setOption }}>
      {children}
    </OptionContext.Provider>
  );
};

export const useOption = () => {
  return useContext(OptionContext);
};

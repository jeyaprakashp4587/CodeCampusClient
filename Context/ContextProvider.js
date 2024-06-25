import React, { useContext, useState } from "react";
import { createContext } from "react";

const ContextProvider = createContext();
export const Context_Data = ({ children }) => {
  const [first, setFirst] = useState("jeya");
  return (
    <ContextProvider.Provider value={{ first, setFirst }}>
      {children}
    </ContextProvider.Provider>
  );
};
export const UseContextData = () => {
  useContext(Context_Data);
};

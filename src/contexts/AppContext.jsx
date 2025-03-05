/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    isLogin: true,
    user: "niketmishra",
  });

  return (
    <AppContext value={{ globalState, setGlobalState }}>{children}</AppContext>
  );
};

const useGlobalState = () => {
  return useContext(AppContext);
};

export { useGlobalState, AppProvider };

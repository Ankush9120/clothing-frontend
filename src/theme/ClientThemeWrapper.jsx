import React, { useContext } from "react";
import { ThemeContext } from "./context";

const ClientThemeWrapper = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return <div data-theme={theme} className={theme === "light" ? "light" : 'dark'}>{children}</div>;
};

export default ClientThemeWrapper;

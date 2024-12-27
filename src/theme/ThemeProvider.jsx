import React, { useEffect, useState } from "react";
import { ThemeContext } from "./context";

const ThemeProvider = ({ defaultTheme = "light", children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    const storedTheme = localTheme || defaultTheme;
    setTheme(storedTheme);
    if (!localTheme) {
      localStorage.setItem("theme", storedTheme);
    }
  }, [defaultTheme]);

  const changeTheme = () => {
    let changedTheme = theme === "light" ? "black" : "light";
    setTheme(changedTheme);
    localStorage.setItem("theme", changedTheme);
  };

  return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;

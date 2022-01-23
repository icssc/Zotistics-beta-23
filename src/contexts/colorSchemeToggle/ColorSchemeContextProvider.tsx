import { ReactNode, useEffect, useState } from "react";

import { ColorScheme, ColorSchemeContext } from "./colorSchemeContext";

interface ColorSchemeContextProviderProps {
  children: ReactNode;
  initialValue: ColorScheme;
}

function ColorSchemeContextProvider({
  children,
  initialValue,
}: ColorSchemeContextProviderProps) {
  const [colorScheme, setColorScheme] = useState(initialValue);
  useEffect(() => {
    if (window.localStorage.theme) setColorScheme(window.localStorage.theme);
  }, []);

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (colorScheme === "dark") {
      document.documentElement.classList.add("dark");
      window.localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      window.localStorage.theme = "light";
    }
  });

  return (
    <ColorSchemeContext.Provider
      value={{
        colorScheme: colorScheme,
        toggleColorScheme: toggleColorScheme,
      }}
    >
      {children}
    </ColorSchemeContext.Provider>
  );
}

export default ColorSchemeContextProvider;

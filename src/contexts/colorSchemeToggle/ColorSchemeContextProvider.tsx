import { ReactNode, useEffect, useState } from "react";

import { ColorScheme, ColorSchemeContext } from "./colorSchemeToggleContext";

interface ColorSchemeContextProviderProps {
  children: ReactNode;
  initialValue: ColorScheme;
}

function ColorSchemeContextProvider({
  children,
  initialValue,
}: ColorSchemeContextProviderProps) {
  const [colorScheme, setColorScheme] = useState(initialValue);

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (colorScheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
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

import { createContext } from "react";

export type ColorScheme = "dark" | "light" | "media";

export const ColorSchemeContext = createContext({
  colorScheme: "dark",
  toggleColorScheme: () => {},
});

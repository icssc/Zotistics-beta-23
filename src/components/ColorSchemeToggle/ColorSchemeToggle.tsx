import { useContext } from "react";
import { ColorSchemeContext } from "src/contexts/colorSchemeToggle/colorSchemeContext";

import { Sun, Moon } from "react-feather";

const ColorSchemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useContext(ColorSchemeContext);

  return (
    <button
      aria-label={`${colorScheme === "dark" ? "disable" : "enable"} dark mode`}
      className="cursor-pointer block"
      onClick={toggleColorScheme}
    >
      {colorScheme === "dark" && <Sun size={24} strokeWidth={1.5} />}
      {colorScheme === "light" && <Moon size={24} strokeWidth={1.5} />}
    </button>
  );
};

export default ColorSchemeToggle;

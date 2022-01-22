import { useContext } from "react";
import { ColorSchemeContext } from "src/contexts/colorSchemeToggle/colorSchemeToggleContext";

import Sunny from "~icons/ion/sunny-outline.jsx";
import Moon from "~icons/ion/moon-outline.jsx";

const ColorSchemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useContext(ColorSchemeContext);

  return (
    <button
      aria-label={`${colorScheme === "dark" ? "disable" : "enable"} dark mode`}
      className="text-[24px] cursor-pointer block"
      onClick={toggleColorScheme}
    >
      {colorScheme === "dark" && <Sunny />}
      {colorScheme === "light" && <Moon />}
    </button>
  );
};

export default ColorSchemeToggle;

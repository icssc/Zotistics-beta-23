import { useContext } from "react";
import { ColorSchemeContext } from "src/contexts/colorSchemeToggle/colorSchemeContext";

import { Sun, Moon } from "react-feather";
import analytics, {logAnalytics} from "../../utils/analytics";

const ColorSchemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useContext(ColorSchemeContext);

  const handleClick = () => {
    toggleColorScheme()
    logAnalytics({
      category: analytics.nav.category,
      action: analytics.nav.actions.THEME
    })
  }

  return (
    <button
      aria-label={`${colorScheme === "dark" ? "disable" : "enable"} dark mode`}
      className="cursor-pointer block"
      onClick={handleClick}
    >
      {colorScheme === "dark" && <Sun size={24} strokeWidth={1.5} />}
      {colorScheme === "light" && <Moon size={24} strokeWidth={1.5} />}
    </button>
  );
};

export default ColorSchemeToggle;

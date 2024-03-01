import { useEffect } from "react";
import resumeThemeStore from "../features/themeStore";

const ThemeManager = () => {
  const { primaryColor } = resumeThemeStore();
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--primary-color", primaryColor);
    for (let i = 1; i < 10; i++) {
      root.style.setProperty(`--primary-${i}00`, `${primaryColor}${i}0`);
    }
  }, [primaryColor]);

  return null;
};

export default ThemeManager;

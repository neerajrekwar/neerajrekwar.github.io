// components/DarkModeToggle.tsx
"use client";
import { useTheme } from "../context/ThemeContext";

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
    >
      Toggle {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default DarkModeToggle;

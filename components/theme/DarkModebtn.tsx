"use client";
import { useTheme } from "../context/ThemeContext";
import { IconSun, IconMoon } from "@tabler/icons-react";

const DarkModebtn = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="aspect-square p-2 h-10 w-10 active:bg-seven rounded-full active:text-four transition-all duration-600 hover:text-four flex justify-center items-center"
      aria-label="Toggle Dark Mode"
    >
      {theme === "light" ? <IconMoon /> : <IconSun />}
    </button>
  );
};

export default DarkModebtn;
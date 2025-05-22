"use client";

import useDarkMode from "../hooks/useDark";
import { Sun, Moon } from "lucide-react"; // or use any icon library

const ThemeToggle = () => {
  const [isDark, toggleTheme] = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:scale-105 cursor-pointer dark:bg-[#2e2e2e]
        bg-black active:scale-95 transition"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        <Sun size={20} className="text-yellow-300" />
      ) : (
        <Moon size={20} className="text-white fill-white " />
      )}
    </button>
  );
};

export default ThemeToggle;

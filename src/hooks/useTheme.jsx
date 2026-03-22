import React from "react";

const useTheme = () => {
  const [isDark, setIsDark] = React.useState(() => {
    // Check localStorage first
    const saved = localStorage.getItem("portfolio-theme");
    if (saved) return saved === "dark";

    // Fall back to system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  React.useEffect(() => {
    // Apply theme to document
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return { isDark, toggleTheme };
};

export default useTheme;

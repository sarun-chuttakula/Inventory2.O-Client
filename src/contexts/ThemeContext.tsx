import React, { createContext, useContext, ReactNode } from "react";
import { theme } from "../styles/theme";
interface ThemeContextProps {
  theme: typeof theme; // Adjust the type as needed
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context.theme;
};

export const ThemeProvider: React.FC<ThemeContextProps> = ({
  children,
  theme,
}) => {
  return (
    <ThemeContext.Provider value={{ theme, children }}>
      {children}
    </ThemeContext.Provider>
  );
};

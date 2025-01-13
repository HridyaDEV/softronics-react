import { createContext, useState } from "react";

// Create context for dark mode
export const DarkContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); 

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev); 

  return (
    <DarkContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkContext.Provider>
  );
};

export default DarkContext;

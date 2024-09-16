import React, { createContext, useContext, ReactNode } from 'react';
import { Theme } from '@radix-ui/themes';

type ThemeContextType = {
  fontFamily: string;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const fontFamily = 'var(--default-font-family)';

  return (
    <ThemeContext.Provider value={{ fontFamily }}>
      <Theme>{children}</Theme>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

import { useEffect } from 'react';
import { theme } from './theme';
import { themeToCssVariables } from './themeToCssVariables';

interface ThemeProviderProps {
  children: React.ReactElement;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  useEffect(() => {
    const bodyElement = document.getElementsByTagName('body')[0];
    const cssVariables = themeToCssVariables(theme);

    Object.entries(cssVariables).forEach(([key, value]) => {
      bodyElement.style.setProperty(key, String(value));
    });
  }, []);

  return children;
};

export default ThemeProvider;

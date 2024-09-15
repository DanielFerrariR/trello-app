import { theme } from '../../theme/theme';
import { themeToCssVariables } from '../../theme/themeToCssVariables';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <div style={themeToCssVariables(theme)}>{children}</div>
);

export default ThemeProvider;

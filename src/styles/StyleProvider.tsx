import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';
import theme from './theme';
import inputGlobalStyles from './GlobalStyles';

export default function StyleProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <CssBaseline />
      {inputGlobalStyles}
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}

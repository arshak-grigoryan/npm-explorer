import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';
import GlobalStyles from './GlobalStyles';
import theme from './theme';

export default function StyleProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <CssBaseline />
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}

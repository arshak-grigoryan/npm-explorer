import { ThemeProvider } from '@emotion/react';
import theme from 'src/configs/theme';
import AppRouter from './Router';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

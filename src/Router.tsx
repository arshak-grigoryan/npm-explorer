import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import { Global, ThemeProvider, css } from '@emotion/react';
import { useContext } from 'react';
import HomePage from './components/pages/HomePage/HomePage';
import SearchPage from './components/pages/SearchPage/SearchPage';
import PackagePage from './components/pages/PackagePage/PackagePage';
import { ThemeModeContext } from './ThemeModeProvider/ThemeMode';
import { darkTheme, lightTheme } from './ThemeModeProvider/theme';
import { ThemeMode } from './ThemeModeProvider/types';

const Router = import.meta.env.DEV ? BrowserRouter : HashRouter;

export default function AppRouter() {
  const themeMode = useContext(ThemeModeContext);
  const theme = themeMode.colorScheme === ThemeMode.Light ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          body {
            background-color: ${theme.colors.background.body};
          }
        `}
      />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/package/:name/:version?" element={<PackagePage />} />
          <Route path="*" element={<>Not found</>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

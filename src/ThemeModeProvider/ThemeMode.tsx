import { createContext, useEffect, useState } from 'react';
import useCustomEventListener from 'src/ThemeModeProvider/hooks/useCustomEventListener';
import useOsColorSchemeChange from 'src/ThemeModeProvider/hooks/useOsColorSchemeChange';
import { ThemeMode, TThemeModeContext, TThemeModeProvider } from './types';

export const ThemeModeContext = createContext<TThemeModeContext>({
  themeMode: ThemeMode.OS,
  changeThemeMode: () => {},
  colorScheme: ThemeMode.Dark,
});

const THEME_MODE = 'THEME_MODE';
const THEME_MODE_CHANGE_EVENT = 'modeChange';

const isThemeModeValid = (mode: string | null) =>
  Object.values(ThemeMode).includes(mode as ThemeMode);

export const ThemeModeProvider = ({ children }: TThemeModeProvider) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.OS);
  const [colorScheme, setColorScheme] = useState<Omit<ThemeMode, ThemeMode.OS>>(ThemeMode.Dark);

  const changeThemeMode = (themeMode: ThemeMode) => {
    localStorage.setItem(THEME_MODE, themeMode);
    window.dispatchEvent(new Event(THEME_MODE_CHANGE_EVENT));
  };

  useCustomEventListener(THEME_MODE_CHANGE_EVENT, () => {
    const mode = localStorage.getItem(THEME_MODE);
    if (isThemeModeValid(mode)) {
      setThemeMode(localStorage.getItem(THEME_MODE) as ThemeMode);
    }
  });

  useEffect(() => {
    const mode = localStorage.getItem(THEME_MODE);
    if (isThemeModeValid(mode)) {
      changeThemeMode(mode as ThemeMode);
    } else {
      changeThemeMode(ThemeMode.OS);
    }
  }, []);

  useEffect(() => {
    if (themeMode !== ThemeMode.OS) {
      setColorScheme(themeMode);
    } else {
      const isDark = window.matchMedia(`(prefers-color-scheme: dark)`).matches;
      setColorScheme(isDark ? ThemeMode.Dark : ThemeMode.Light);
    }
  }, [themeMode]);

  useOsColorSchemeChange('dark', (event) => {
    const mode = localStorage.getItem(THEME_MODE);
    if (isThemeModeValid(mode) && mode === ThemeMode.OS) {
      setColorScheme(event.matches ? ThemeMode.Dark : ThemeMode.Light);
    }
  });

  return (
    <ThemeModeContext.Provider value={{ themeMode, changeThemeMode, colorScheme }}>
      {children}
    </ThemeModeContext.Provider>
  );
};

import { ReactNode } from 'react';

export enum ThemeMode {
  Light = 'Light',
  Dark = 'Dark',
  OS = 'OS',
}

export type TThemeModeContext = {
  themeMode: ThemeMode;
  changeThemeMode: (themeMode: ThemeMode) => void;
  colorScheme: Omit<ThemeMode, ThemeMode.OS>;
};

export type TThemeModeProvider = {
  children: ReactNode;
};

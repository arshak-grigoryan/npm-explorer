import { useEffect } from 'react';
import { ThemeMode } from 'src/ThemeModeProvider/types';

export default function useHighchartsTheme(colorScheme: Omit<ThemeMode, ThemeMode.OS>) {
  useEffect(() => {
    const cssLink = document.createElement('link');
    (cssLink.id = 'highcharts-dark-theme'), (cssLink.rel = 'stylesheet');
    cssLink.href =
      colorScheme === ThemeMode.Dark
        ? 'https://code.highcharts.com/css/themes/dark-unica.css'
        : 'https://code.highcharts.com/css/themes/sand-signika.css';
    document.head.appendChild(cssLink);
  }, [colorScheme]);
}

/* eslint-disable */
import { useEffect } from 'react';

export default function useOsColorSchemeChange(
  colorScheme: 'dark' | 'light',
  cb: (event: MediaQueryListEvent) => void,
  deps: unknown[] = [],
) {
  useEffect(() => {
    const handleMediaChange = (event: MediaQueryListEvent) => {
      cb(event);
    };

    window
      .matchMedia(`(prefers-color-scheme: ${colorScheme})`)
      .addEventListener('change', handleMediaChange);

    return () => {
      window
        .matchMedia(`(prefers-color-scheme: ${colorScheme})`)
        .removeEventListener('change', handleMediaChange);
    };
  }, deps);
}

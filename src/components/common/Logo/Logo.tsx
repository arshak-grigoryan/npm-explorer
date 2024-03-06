import { useContext } from 'react';
import LogoIcon from 'src/assets/npm-logo-black.svg?react';
import LogoIconDark from 'src/assets/npm-logo-red.svg?react';

import { ThemeModeContext } from 'src/ThemeModeProvider/ThemeMode';
import { ThemeMode } from 'src/ThemeModeProvider/types';
import * as SC from './styles';

export default function Logo() {
  const themeMode = useContext(ThemeModeContext);

  return (
    <SC.Logo>
      {themeMode.colorScheme === ThemeMode.Light ? (
        <>
          <LogoIcon height={18} />
          <SC.LogoText>Explorer</SC.LogoText>
        </>
      ) : (
        <>
          <LogoIconDark height={18} />
          <SC.LogoText css={(theme) => ({ color: theme.staticColors.logo.dark })}>
            Explorer
          </SC.LogoText>
        </>
      )}
    </SC.Logo>
  );
}

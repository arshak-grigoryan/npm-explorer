import { useContext } from 'react';
import MoonIcon from 'src/assets/Moon.svg?react';
import SunIcon from 'src/assets/Sun.svg?react';
import { ThemeModeContext } from 'src/ThemeModeProvider/ThemeMode';
import { ThemeMode } from '../types';
import * as SC from './styles';

export default function ThemeDropdown() {
  const { themeMode, changeThemeMode } = useContext(ThemeModeContext);

  const isOs = themeMode === ThemeMode.OS;
  const isDark = themeMode === ThemeMode.Dark;
  const isLigh = themeMode === ThemeMode.Light;

  return (
    <SC.Dropdown>
      <SC.ThemeDropdownItem>
        {isOs && <SC.StyledThemeModeIcon css={{ width: 20 }} />}
        {isDark && <MoonIcon css={{ fill: 'currentcolor', width: 20 }} />}
        {isLigh && <SunIcon css={{ fill: 'currentcolor', width: 20 }} />}
        <SC.Name css={{ fontSize: '1rem' }}>Theme</SC.Name>
      </SC.ThemeDropdownItem>
      <SC.DropdownItems>
        <SC.DropdownItem onClick={() => changeThemeMode(ThemeMode.OS)} selected={isOs}>
          <SC.StyledThemeModeIcon css={{ width: 16 }} />
          <SC.Name>OS Default</SC.Name>
        </SC.DropdownItem>
        <SC.DropdownItem onClick={() => changeThemeMode(ThemeMode.Dark)} selected={isDark}>
          <MoonIcon css={{ fill: 'currentcolor', width: 16 }} />
          <SC.Name>Dark Mode</SC.Name>
        </SC.DropdownItem>
        <SC.DropdownItem onClick={() => changeThemeMode(ThemeMode.Light)} selected={isLigh}>
          <SunIcon css={{ fill: 'currentcolor', width: 16 }} />
          <SC.Name>Light Mode</SC.Name>
        </SC.DropdownItem>
      </SC.DropdownItems>
    </SC.Dropdown>
  );
}

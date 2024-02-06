import styled from '@emotion/styled';
import ThemeModeIcon from 'src/assets/ThemeMode.svg?react';

export const Dropdown = styled.div(
  ({ theme }) => `
  position: relative;
  color:  ${theme.colors.typography.secondary};
  display: flex;
  align-self: stretch;
  &:hover {
    & > div {
      display: flex;
    };
  };
`,
);

export const DropdownItems = styled.div(
  ({ theme }) => `
  position: absolute;
  top: 100%;
  right: -1rem;
  display: none;
  background-color: ${theme.colors.background.dropdownItem};
  border-radius: 4px;
  flex-direction: column;
  overflow: hidden;
`,
);

export const DropdownItem = styled.div<{ selected?: boolean }>`
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  ${({ selected, theme }) =>
    selected && `background-color: ${theme.colors.background.dropdownItemActive}`}
`;

export const ThemeDropdownItem = styled(DropdownItem)`
  padding: 8px 0;
`;

export const Name = styled.span`
  font-size: 0.75rem;
  white-space: nowrap;
`;

export const StyledThemeModeIcon = styled(ThemeModeIcon)`
  & circle:first-of-type {
    stroke: currentcolor;
  }
  & circle:nth-of-type(2) {
    fill: #000;
  }
  & circle:nth-of-type(3) {
    fill: #fff;
  }
`;

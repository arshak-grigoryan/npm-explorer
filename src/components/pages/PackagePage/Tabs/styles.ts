import styled from '@emotion/styled';
import Link from 'src/components/common/Link/Link';

export const StyledTabs = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledTab = styled.li<{ colors: any; selected: boolean }>`
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: ${({ colors }) => `2px solid ${colors.border}`};
  background-color: ${({ colors, selected }) => `${selected && colors.background}`};
  &:hover {
    background: ${({ colors }) => `${colors.hover}`};
    cursor: pointer;
  }
`;

export const StyledLink = styled(Link)<{ colors: any }>`
  margin: 1px;
  display: flex;
  flex-grow: 1;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 12px 15px;
  font-weight: 700;
  color: ${({ colors }) => `${colors.text}`};
  &:focus {
    outline: 1px dotted currentColor;
  }
`;

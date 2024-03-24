import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Tabs = styled.ul`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${({ theme }) => theme.medias.tablet}) {
    flex-direction: column;
  }
`;

export const Tab = styled.li<{ colors: any; selected: boolean }>`
  width: 100%;
  flex: 1;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: ${({ colors }) => `2px solid ${colors.border}`};
  ${({ colors, selected }) => selected && `background-color: ${colors.background}`};
  &:hover {
    background: ${({ colors }) => `${colors.hover}`};
    cursor: pointer;
  }
  @media (max-width: ${({ theme }) => theme.medias.tablet}) {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom: none;
    border-left: ${({ colors }) => `2px solid ${colors.border}`};
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
  fill: ${({ colors }) => `${colors.text}`};
  text-transform: capitalize;
  &:focus {
    outline: 1px dotted currentColor;
  }
`;

import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';
import isPropValid from '@emotion/is-prop-valid';

export const KeyowrdsSection = styled.section`
  padding: 16px;
  flex: 8;
`;

export const Heading = styled.h2(
  ({ theme }) => `
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 1.25rem;
  color: ${theme.colors.typography.primary}
`,
);

export const KeywordsList = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 16px;
`;

export const KeywordsListItem = styled.li`
  flex: 1;
  padding: 0;
`;

export const Link = styled(RouterLink, { shouldForwardProp: isPropValid })<{
  color: string;
  backgroundColor: string;
}>(
  ({ theme, color, backgroundColor }) => `
  padding: 24px 32px;
  color: ${theme.colors.typography.keywordItem};
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${theme.colors.border.keywordItem};
  border-bottom: 2px solid ${theme.colors.border.keywordItem};
  white-space: nowrap;
  font-weight: 800;
  font-size: 1rem;
  &:hover {
    transition: 0.2s linear;
    color: ${color};
    background-color: ${backgroundColor};
    border-color: ${color};
  };
`,
);

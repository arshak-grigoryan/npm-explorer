import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const DependencyLink = styled(Link)(
  ({ theme }) => `
  color: ${theme.strictColors.sortOptions.m};
  font-size: 1.25rem;
  &:hover {
    transition: color .15s ease-in;
    color: ${theme.colors.typography.secondary};
  };
  font-weight: 600;
`,
);

export const DependencyLinkContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const DependencyHeading = styled.h2(
  ({ theme }) => `
  color: ${theme.colors.typography.dependencyHeading};
  font-size: 1.25rem; font-weight: 600;
  `,
);

export const DependenciesListItem = styled.div`
  margin-top: 16px;
`;

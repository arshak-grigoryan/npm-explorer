import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ListVersion = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const VersionLink = styled(Link)(
  ({ theme }) => `
  font-size: 1rem;
  color: ${theme.colors.typography.quaternary};
  text-decoration: underline;
  font-family: Consolas,monaco,monospace;
  line-height: 1.5;
`,
);

export const VersionsContainer = styled.div(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: ${theme.colors.typography.primary};
`,
);

export const TagsHeading = styled.h3(
  ({ theme }) => `
  font-size: 1.25rem;
  font-weight: 600;
  color: ${theme.colors.typography.primary};
  margin-bottom: 16px;
`,
);

export const VersionDownloads = styled.div(
  ({ theme }) => `
  color: ${theme.colors.typography.primary}
`,
);

export const TextDivider = styled.div(
  ({ theme }) => `
  border-bottom: 1px dotted ${theme.colors.divider.secondary};
  display: flex;
  align-self: end;
  flex-grow: 1;
  margin: 4px;
  min-width: 8px;
`,
);

export const ListVersionItem = styled.li(
  ({ theme }) => `
  display: flex;
  color: ${theme.colors.typography.quaternary};
  gap: 4px;
  font-size: 1rem;
`,
);

export const Coulmn3Container = styled.div`
  display: flex;
  width: 33%;
`;

export const Coulmn3 = styled.div`
  text-align: end;
`;

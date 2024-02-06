import styled from '@emotion/styled';

export const Main = styled.main(
  ({ theme }) => `
  background-color: ${theme.colors.background.homepageMain};
  padding: 16px;
`,
);

export const Heading = styled.h2`
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 1.25rem;
`;

export const SectionsContainer = styled.div(
  ({ theme }) => `
  max-width: ${theme.width.w1};
  padding: 0 16px;
  margin: auto;
`,
);

export const Sections = styled.div(
  ({ theme }) => `
  background-color: ${theme.colors.background.paginationItem};
  border: 1px solid ${theme.colors.border.primary};
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,
);

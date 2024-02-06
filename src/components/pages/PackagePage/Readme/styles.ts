import styled from '@emotion/styled';

export const ReadmeContent = styled.div(
  ({ theme }) => `
  color: ${theme.colors.typography.primary};
  & img {
    max-width: 100%;
  }
  & code {
    display: block;
    overflow: auto;
  }
`,
);

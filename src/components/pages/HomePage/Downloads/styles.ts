import styled from '@emotion/styled';

export const DownloadsSection = styled.section`
  padding: 16px;
  flex: 7;
`;

export const Heading = styled.h2(
  ({ theme }) => `
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 1.25rem;
  color: ${theme.colors.c24}
`,
);

export const CountsContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-top: 16px;
`;

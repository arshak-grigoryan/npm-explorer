import styled from '@emotion/styled';

export const Option = styled.p(
  ({ theme }) => `
  font-size: 0.75rem;
  font-weight: 600;
  color: ${theme.colors.c2};
`,
);

export const Score = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-direction: row-reverse;
`;
export const Scores = styled.div`
  display: flex;
  flex-direction: column;
`;

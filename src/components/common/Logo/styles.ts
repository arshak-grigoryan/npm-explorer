import styled from '@emotion/styled';

export const LogoText = styled.span(
  ({ theme }) => `
  font-size: 1rem;
  font-weight: 700;
  color: ${theme.colors.typography.secondary};
  padding-top: 4px;
`,
);

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

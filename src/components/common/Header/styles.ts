import styled from '@emotion/styled';

export const Header = styled.header(
  ({ theme }) => `
  position: relative;
  border-bottom: 1px solid ${theme.colors.c29};
  box-shadow: 0 4px 13px -3px ${theme.colors.c1};
`,
);

export const GradientLine = styled.div`
  border-width: 10px;
  border-top-style: solid;
  border-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3;
`;

export const FormContainer = styled.div(
  ({ theme }) => `
  max-width: ${theme.width.w1};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: auto;
  gap: 32px;
  padding: 16px 32px;
`,
);

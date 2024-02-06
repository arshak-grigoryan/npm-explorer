import styled from '@emotion/styled';

export const Header = styled.header(
  ({ theme }) => `
  position: relative;
  border-bottom: 1px solid ${theme.colors.border.header};
  box-shadow: 0 4px 13px -3px ${theme.colors.shadow.header};
`,
);

export const GradientLine = styled.div(
  ({ theme }) => `
  border-width: 10px;
  border-top-style: solid;
  border-image: ${theme.strictColors.lineGradient}
`,
);

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

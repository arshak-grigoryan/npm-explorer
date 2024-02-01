import styled from '@emotion/styled';

const Divider = styled.hr<{ height?: string; gap?: string }>(
  ({ theme, height, gap }) => `
  border: none;
  width: 100%;
  height: ${height ?? '2px'};
  background-color: ${theme.colors.c4};
  margin-top: ${gap ?? '0px'};
  margin-bottom: ${gap ?? '0px'};
`,
);

export default Divider;

import styled from '@emotion/styled';

export const MeterBar = styled.div<{ width: string }>(
  ({ theme, width }) => `
  position: relative;
  width: ${width};
  background: ${theme.colors.scoreBar.def};
  height: 2px;
`,
);

export const Bar = styled.div<{ width: string }>(
  ({ width }) => `
  position: absolute;
  height: 2px;
  width: ${width};
`,
);

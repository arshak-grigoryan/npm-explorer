import styled from '@emotion/styled';

export const MeterBar = styled.div<{ width: string }>(
  ({ theme, width }) => `
  position: relative;
  width: ${width};
  background: ${theme.colors.c1};
  height: 2px;
`,
);

export const Bar = styled.div<{ width: string; color: string }>(
  ({ width, color }) => `
  position: absolute;
  height: 2px;
  background: ${color};
  width: ${width};
`,
);

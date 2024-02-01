import styled from '@emotion/styled';

export const Heading = styled.h3(
  ({ theme }) => `
  font-weight: 700;
  font-size: .875rem;
  color: ${theme.colors.c23};
  margin-bottom: 12px;
  line-height: 1.25;
`,
);

export const DownloadCount = styled.strong(
  ({ theme }) => `
  font-size: 1.5rem;
  font-weight: 600;
  color: ${theme.colors.c24};
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    avenir next,
    avenir,
    helvetica neue,
    helvetica,
    ubuntu,
    roboto,
    noto,
    segoe ui,
    arial,
    sans-serif;
`,
);

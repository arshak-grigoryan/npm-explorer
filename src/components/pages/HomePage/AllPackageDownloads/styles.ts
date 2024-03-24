import styled from '@emotion/styled';

export const DownloadsStatsSection = styled.div`
  padding: 16px;
  width: 100%;
`;

export const Heading = styled.h2(
  ({ theme }) => `
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 1.25rem;
  color: ${theme.colors.typography.primary}
`,
);

export const DownloadsTypography = styled.div(
  ({ theme }) => `
  font-size: 1rem;
  color: ${theme.colors.typography.primary}
`,
);

export const DownloadsDropdownContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 16px 0;
`;

export const ChartContainer = styled.div`
  & svg {
    width: 100%;
  }
`;

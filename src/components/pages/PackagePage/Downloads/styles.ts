import styled from '@emotion/styled';

export const ChartContainer = styled.div`
  & svg {
    width: 100%;
  }
`;

export const DownloadsDropdownContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 16px 0;
`;

export const DownloadsTypography = styled.div(
  ({ theme }) => `
  font-size: 1rem;
  color: ${theme.colors.typography.primary}
`,
);

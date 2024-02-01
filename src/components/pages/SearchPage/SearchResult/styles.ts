import styled from '@emotion/styled';

export const PackagesCount = styled.h2(
  ({ theme }) => `
  font-weight: 600;
  font-size: 1.125rem;
  color: ${theme.colors.c4}
`,
);

export const PackagesCountContainer = styled.div(
  ({ theme }) => `
  background-color: ${theme.colors.c14};
  border-bottom: 1px solid ${theme.colors.c1};
`,
);

export const PackagesCountNestedContainer = styled.div(
  ({ theme }) => `
  max-width: ${theme.width.w1};
  margin: auto;
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
`,
);

export const SortOptionsContainer = styled.div`
  flex: 1;
`;

export const PackageListContainer = styled.div`
  flex: 5;
  padding: 16px;
`;

export const ContentContainer = styled.div(
  ({ theme }) => `
  max-width: ${theme.width.w1};
  margin: auto;
  display: flex;
  padding: 16px;
  flex-wrap: wrap;
`,
);

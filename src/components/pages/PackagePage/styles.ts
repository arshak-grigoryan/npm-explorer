import styled from '@emotion/styled';

export const PackageSidebarContainer = styled.div`
  width: calc(100% / 3 - 16px);
  @media (max-width: ${({ theme }) => theme.medias.tablet}) {
    width: 100%;
  }
`;

export const TabContentContainer = styled.div`
  width: calc(100% / 3 * 2 - 16px);
  margin-top: 16px;
  @media (max-width: ${({ theme }) => theme.medias.tablet}) {
    width: 100%;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 32px;
  @media (max-width: ${({ theme }) => theme.medias.tablet}) {
    flex-direction: column;
  }
`;

export const PageHeading = styled.h1(
  ({ theme }) => `
  font-size: 1.5rem;
  font-weight: 600;
  color: ${theme.colors.typography.secondary};
  letter-spacing: -0.8px;
`,
);

export const PackageShortInfo = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const WidthContainer = styled.div(
  ({ theme }) => `
  max-width: ${theme.width.w2};
  margin: auto;
  padding: 16px;
`,
);

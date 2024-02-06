import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Title = styled.h3(
  ({ theme }) => `
  color: ${theme.colors.typography.packageSidebarHeading};
  font-size: 1rem;
`,
);

export const TitleContent = styled.p(
  ({ theme }) => `
  color: ${theme.colors.typography.primary};
  font-size: 1.125rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,
);

export const TitleContentOverride = styled(TitleContent)`
  margin-top: 8px;
  margin-bottom: 16px;
  font-size: 1.25rem;
`;

export const PackageSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InfoBlock = styled.div(
  ({ theme }) => `
  border-bottom: 1px solid ${theme.colors.border.primary}
`,
);

export const ProjectLink = styled(Link)(
  ({ theme }) => `
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${theme.colors.typography.primary};
  margin-top: 8px;
  margin-bottom: 16px;
`,
);

export const SplitInfoBlock = styled.div`
  width: 50%;
  display: inline-block;
`;

export const IconContainer = styled.div`
  width: 16px;
  height: 16px;
`;

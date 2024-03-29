import styled from '@emotion/styled';
import { Title } from '../styles';

export const CopyIconButton = styled('button')`
  background: transparent;
  border: none;
  padding: 0;
`;

export const Code = styled.code(
  ({ theme }) => `
  font-family: Consolas,monaco,monospace;
  color: ${theme.colors.typography.primary};
  font-size: .875rem;
  white-space: nowrap;
  line-height: 1.5;
`,
);

export const Heading = styled(Title)``;

export const Installation = styled.div`
  margin-bottom: 16px;
`;

export const InstallCmdContainer = styled.div(
  ({ theme }) => `
  border: 1px ${theme.colors.border.installCmd} solid;
  padding: 0.75rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.875rem;
  margin-top: 16px;
`,
);

export const CodeContainer = styled.div`
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;

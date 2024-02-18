import styled from '@emotion/styled';
import Flex from 'src/components/common/Flex/Flex';

export const CodeContainer = styled.div(
  ({ theme }) => `
  border: 1px solid ${theme.colors.border.code};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`,
);

export const FileItem = styled(Flex)(
  ({ theme }) => `
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-top: 1px solid ${theme.colors.border.code};
  padding: 8px;
  color: ${theme.colors.typography.primary};
`,
);

export const FolderItem = styled(FileItem)`
  font-weight: 700;
`;

export const BreadcrumbContainer = styled(Flex)(
  ({ theme }) => `
  gap: 4px;
  padding: 8px;
  color: ${theme.colors.typography.primary};
  font-weight: 700;
`,
);

export const FileNameContainer = styled(Flex)(
  `
  gap: 4px;
  width: 50%;

`,
);

export const FileInfo = styled.div(
  `
  word-wrap: break-word;
  font-size.875rem;

`,
);

export const FileName = styled(FileInfo)(
  `
  &:hover {
  cursor: pointer;
    text-decoration: underline;
  }
`,
);

export const FileContentType = styled(FileInfo)`
  width: 30%;
`;

export const FileSize = styled(FileInfo)`
  width: 20%;
  text-align: end;
`;

export const BreadCrumbItem = styled.div<{ selected: boolean }>`
  ${({ selected }) =>
    !selected &&
    `
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    `}
`;

export const Pre = styled.pre(
  ({ theme }) => `
  &[class*="language-"] {
    // background: ${theme.colors.background.code};
    // background: none;
    font-size: .75rem;
    line-height: 1.25rem;
  };
`,
);

export const Code = styled.code`
  &[class*='language-'] {
    font-family: Consolas, monaco, monospace;
    line-height: 1.25rem;
    font-size: 0.75rem;
  }
`;

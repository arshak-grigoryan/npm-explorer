import styled from '@emotion/styled';

const Chip = styled.div<{ bgColor?: string }>(
  ({ theme, bgColor }) => `
    border-radius: 4px;
    padding: 4px 8px;
    height: auto;
    font-size: 0.875rem;
    color: ${theme.colors.c2};
    line-height: 1rem;
    background-color: ${theme.colors.c5 ?? bgColor};
    &:hover {
      background-color: ${theme.colors.c1};
    };
`,
);

export default Chip;

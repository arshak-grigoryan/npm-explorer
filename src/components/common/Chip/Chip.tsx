import styled from '@emotion/styled';

const Chip = styled.div(
  ({ theme }) => `
    border-radius: 4px;
    padding: 4px 8px;
    height: auto;
    font-size: 0.875rem;
    letter-spacing: 0.4px;
    color: ${theme.colors.typography.tertiary};
    line-height: 1rem;
    background-color: ${theme.colors.chip.common.def};
    &:hover {
      background-color: ${theme.colors.chip.common.hover};
    };
`,
);

export default Chip;

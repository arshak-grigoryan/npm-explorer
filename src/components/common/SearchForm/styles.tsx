import { styled } from '@mui/system';
import colors from 'src/styles/colors';

export const InputElement = styled('input')`
  width: 100%;
  background: ${colors.c10};
  outline: none;
  font-size: 1rem;
  padding: 16px 12px;
  padding-left: 48px;
  border: 1px solid ${colors.c10};
  &:focus {
    border: 1px solid ${colors.c4};
  },
`;

export const ButtonElement = styled('button')(
  ({ theme }) => `
  padding: ${theme.spacing(1)} ${theme.spacing(4)};
  font-size: 1rem;
  font-weight: 700;
  background-color: ${colors.c12};
  color: ${colors.c13};
  border: none;
  cursor: pointer;
`,
);

import { styled } from '@mui/system';
import colors from '../../../styles/colors';

export const InputElement = styled('input')`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
`;

export const ButtonElement = styled('button')(
  ({ theme }) => `
  padding: ${theme.spacing(1)} ${theme.spacing(4)};
  font-size: .875rem;
  font-weight: 700;
  background-color: ${colors.c12};
  color: ${colors.c13};
  border: none;
  cursor: pointer;
`,
);

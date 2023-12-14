import { styled } from '@mui/system';

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
  background-color: #231f20;
  color: #fff;
  border: none;
  cursor: pointer;
`,
);

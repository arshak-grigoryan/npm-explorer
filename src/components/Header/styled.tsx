import { Input } from '@mui/base/Input';
import { Button } from '@mui/base/Button';
import Box from '@mui/material/Box';

import { styled } from '@mui/system';
import { InputHTMLAttributes } from 'react';

const InputElement = styled('input')`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
`;

export function StyledInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <Input slots={{ input: InputElement }} {...props} style={{ width: '100%' }} />;
}

export const StyledButton = styled(Button)(
  ({ theme }) => `
  padding: ${theme.spacing(1)} ${theme.spacing(4)};
  font-family: 'Poppins';
  font-size: .875rem;
  font-weight: 700;
  background-color: #231f20;
  color: #fff;
  border: none;
  &:hover {
    cursor: pointer;
  }
`,
);

export const StyledInputWrapper = styled(Box)`
  width: 100%;
  background: #f2f2f2;
  border: 1px solid #f2f2f2;
  &:focus-within {
    border: 1px solid #231f20;
  }
`;

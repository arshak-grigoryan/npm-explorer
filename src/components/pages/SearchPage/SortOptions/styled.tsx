import styled from '@emotion/styled';
import { InputHTMLAttributes } from 'react';
import colors from 'src/styles/colors';

export const StyledSortButton = styled('button')`
  border: 1px solid ${colors.c16};
  padding: 6px 12px;
  &:hover {
    cursor: pointer;
  }
`;

export function Slider(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input type="range" min={0} max={1} step={0.1} {...props} />;
}

export const SliderLabel = styled('label')`
  font-size: 0.875rem;
  font-weight: 600;
`;

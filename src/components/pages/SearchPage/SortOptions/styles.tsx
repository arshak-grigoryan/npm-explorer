import styled from '@emotion/styled';
import { InputHTMLAttributes } from 'react';

export const StyledSortButton = styled.button(
  ({ theme }) => `
  border: 1px solid ${theme.colors.c16};
  padding: 6px 12px;
  font-size: 0.875rem;
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
`,
);

export function Slider(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input type="range" min={0} max={1} step={0.1} {...props} />;
}

export const SliderLabel = styled.label(
  ({ theme }) => `
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 600;
  color: ${theme.colors.c30};
  cursor: pointer;
  &:hover {
    color: ${theme.colors.c4};
  }
`,
);

export const Title = styled.p(
  ({ theme }) => `
  font-size: 1rem;
  font-weight: 600;
  color: ${theme.colors.c2};
  white-space: nowrap;
  margin-right: 16px;
`,
);

export const SortOptionsAside = styled.aside`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SortPackagesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

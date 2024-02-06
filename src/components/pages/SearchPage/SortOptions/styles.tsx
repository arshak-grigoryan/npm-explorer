import styled from '@emotion/styled';
import { InputHTMLAttributes } from 'react';

export const StyledSortButton = styled.button(
  ({ theme }) => `
  border: 1px solid ${theme.colors.border.button};
  padding: 6px 12px;
  font-size: 0.875rem;
  font-weight: 700;
  background-color: ${theme.colors.background.searchButton};
  color: ${theme.colors.typography.searchButton};
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
  color: ${theme.colors.typography.quinary};
  cursor: pointer;
  &:hover {
    color: ${theme.colors.typography.secondary};
  }
`,
);

export const Title = styled.p(
  ({ theme }) => `
  font-size: 1rem;
  font-weight: 600;
  color: ${theme.colors.typography.tertiary};
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

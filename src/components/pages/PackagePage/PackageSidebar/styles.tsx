import { ReactNode } from 'react';
import styled from '@emotion/styled';
import colors from 'src/styles/colors';

export const Title = ({ children }: { children: ReactNode }) => (
  <h3
    style={{
      color: colors.c25,
      fontSize: '1rem',
      fontWeight: 700,
    }}
  >
    {children}
  </h3>
);

export const TitleContent = styled('p')`
  color: ${colors.c24};
  font-size: 1.125rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

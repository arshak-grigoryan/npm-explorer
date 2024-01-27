import { styled } from '@mui/material';
import { ReactNode } from 'react';
import Typography from 'src/components/common/Typography/Typography';
import colors from 'src/styles/colors';

export const Title = ({ children }: { children: ReactNode }) => (
  <Typography
    component={'h3'}
    sx={{
      color: colors.c25,
      fontSize: '1rem',
      fontWeight: 700,
    }}
  >
    {children}
  </Typography>
);

export const TitleContent = styled(Typography)`
  color: ${colors.c24};
  font-size: 1.125rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

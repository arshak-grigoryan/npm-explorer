import { Typography, styled } from '@mui/material';
import colors from 'src/styles/colors';

export const Title = styled(Typography)`
  color: ${colors.c25};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
`;

export const TitleContent = styled(Typography)`
  color: ${colors.c24};
  font-size: 1.125rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1;
`;

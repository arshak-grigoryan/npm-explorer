import { Divider, Typography, styled } from '@mui/material';
import colors from 'src/styles/colors';

export const Title = styled(Typography)`
  color: ${colors.c25};
  font-weight: 700;
`;

export const TitleContent = styled(Typography)`
  color: ${colors.c24};
  font-size: 1rem;
  font-weight: 600;
`;

export const StyledDivider = styled(Divider)`
  background-color: ${colors.c1}
`

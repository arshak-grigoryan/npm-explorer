import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import LogoIcon from '../../../assets/npm-logo-black.svg?react';
import colors from '../../../styles/colors';

export default function Logo() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <LogoIcon height={16} />
      <Typography
        sx={{
          fontSize: '.875rem',
          fontWeight: 700,
          color: colors.c4,
        }}
      >
        Explorer
      </Typography>
    </Box>
  );
}

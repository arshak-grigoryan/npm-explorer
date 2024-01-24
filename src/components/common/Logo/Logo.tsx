import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import LogoIcon from 'src/assets/npm-logo-black.svg?react';
import colors from 'src/styles/colors';

export default function Logo() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <LogoIcon height={18} />
      <Typography
        sx={{
          fontSize: '1rem',
          fontWeight: 700,
          color: colors.c4,
        }}
      >
        Explorer
      </Typography>
    </Box>
  );
}

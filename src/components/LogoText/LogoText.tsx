import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Logo from '../../assets/npm-logo-black.svg?react';
import colors from '../../styles/colors';

export default function LogoText() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Logo height={16} />
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

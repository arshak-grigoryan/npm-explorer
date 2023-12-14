import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Link from '../reusable/atoms/Link/Link';
import LogoText from '../LogoText/LogoText';

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        px: 4,
        py: 2,
      }}
    >
      <Box>
        <Link to="/">
          <LogoText />
        </Link>
      </Box>
      <Box>
        <Link to="/search">
          <Typography>Search</Typography>
        </Link>
      </Box>
    </Box>
  );
}

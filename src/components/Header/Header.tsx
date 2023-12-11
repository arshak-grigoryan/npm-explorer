import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Box
      justifyContent={'space-between'}
      component="header"
      display={'flex'}
      alignItems={'center'}
      width={'100%'}
      gap={4}
      px={4}
      py={2}
    >
      <Box>
        <Link to={'/'}>
          <Typography fontWeight={700} fontSize={20}>
            NPM Explorer
          </Typography>
        </Link>
      </Box>
      <Box>
        <Link
          to="/search"
          style={{
            fontSize: 14,
          }}
        >
          <Typography>Search</Typography>
        </Link>
      </Box>
    </Box>
  );
}

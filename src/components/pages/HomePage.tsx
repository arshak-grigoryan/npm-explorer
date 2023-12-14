import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Header from '../Header/Header';

export default function HomePage() {
  return (
    <Box
      sx={{
        height: '100%',
      }}
    >
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header />
        <Box
          sx={{
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'center',
            p: 4,
          }}
        >
          <Typography
            sx={{
              fontSize: '1.5rem',
            }}
          >
            Explore npm packages in a more advanced search
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

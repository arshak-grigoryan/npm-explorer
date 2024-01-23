import Box from '@mui/material/Box';
import Header from 'src/components/common/Header/Header';
import Downloads from './Downloads/Downloads';
import DiscoverPackages from './DiscoverPackages/DiscoverPackages';

export default function HomePage() {
  return (
    <Box>
      <Header />
      <Box
        component="main"
        sx={{
          backgroundColor: '#fafafa',
        }}
      >
        <Box
          sx={{
            maxWidth: 1536,

            px: 4,
            py: 2,
            margin: 'auto',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#fff',
              border: '1px solid rgba(0,0,0,.1)',
              borderRadius: '0.25rem',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 4,
            }}
          >
            <DiscoverPackages />
            <Downloads />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

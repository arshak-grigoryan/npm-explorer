import Box from '@mui/material/Box';
import SearchForm from '../../common/SearchForm/SearchForm';
import Link from '../../common/Link/Link';
import Logo from '../../common/Logo/Logo';
import colors from '../../../styles/colors';
import Downloads from './Downloads/Downloads';
import DiscoverPackages from './DiscoverPackages/DiscoverPackages';

export default function HomePage() {
  return (
    <Box>
      <Box
        component={'header'}
        sx={{
          position: 'relative',
          borderBottom: `1px solid ${colors.c1}`,
          boxShadow: `0 4px 13px -3px ${colors.c1}`,
        }}
      >
        <Box
          sx={{
            maxWidth: 1536,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            margin: 'auto',
            gap: 4,
            px: 4,
            py: 2,
          }}
        >
          <Link to="/">
            <Logo />
          </Link>
          <SearchForm />
        </Box>
      </Box>
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

import Box from '@mui/material/Box';
import SearchForm from '../../common/SearchForm/SearchForm';
import Link from '../../common/Link/Link';
import Logo from '../../common/Logo/Logo';
import SearchResult from './SearchResult/SearchResult';

export default function SearchPage() {
  return (
    <Box>
      <Box
        component={'header'}
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
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
      <Box component="main">
        <SearchResult />
      </Box>
    </Box>
  );
}

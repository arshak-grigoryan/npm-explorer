import Box from '@mui/material/Box';
import SearchResult from '../SearchResult/SearchResult';
import SearchForm from '../SearchForm/SearchForm';
import Logo from '../../assets/npm-logo-black.svg?react';
import Link from '../reusable/atoms/Link/Link';

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
          <Logo height={16} />
        </Link>
        <SearchForm />
      </Box>
      <Box component="main">
        <SearchResult />
      </Box>
    </Box>
  );
}

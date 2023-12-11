import Box from '@mui/material/Box';
import SearchResult from '../SearchResult/SearchResult';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';

export default function SearchPage() {
  return (
    <Box>
      <Header />
      <Box
        component="header"
        display={'flex'}
        alignItems={'center'}
        width={'100%'}
        gap={4}
        px={4}
        py={2}
      >
        <SearchForm />
      </Box>
      <Box component="main">
        <SearchResult />
      </Box>
    </Box>
  );
}

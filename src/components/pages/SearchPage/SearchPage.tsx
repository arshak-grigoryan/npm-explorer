import Box from '@mui/material/Box';
import Header from 'src/components/common/Header/Header';
import SearchResult from './SearchResult/SearchResult';

export default function SearchPage() {
  return (
    <Box>
      <Header />
      <Box component="main">
        <SearchResult />
      </Box>
    </Box>
  );
}

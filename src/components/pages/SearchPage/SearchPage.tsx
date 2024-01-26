import Box from '@mui/material/Box';
import Header from 'src/components/common/Header/Header';
import { text } from 'src/configs/configs';
import { HiddenHeading } from 'src/components/common/HiddenHeading/HiddenHeading';
import SearchResult from './SearchResult/SearchResult';

export default function SearchPage() {
  return (
    <Box>
      <Header />
      <Box component="main">
        <HiddenHeading as={'h1'}>{text.searchResults}</HiddenHeading>
        <SearchResult />
      </Box>
    </Box>
  );
}

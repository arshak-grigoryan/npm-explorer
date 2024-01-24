import Box from '@mui/material/Box';
import Header from 'src/components/common/Header/Header';
import { maxWidth } from 'src/styles/styles';
import Tabs from './Tabs/Tabs';

export default function PackagePage() {
  return (
    <Box>
      <Header />
      <Box component="main">
        <Box
          sx={{
            maxWidth: maxWidth,
          }}
        >
          <Tabs />
        </Box>
      </Box>
    </Box>
  );
}

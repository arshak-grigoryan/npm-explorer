import Box from '@mui/material/Box';
import Header from 'src/components/common/Header/Header';
import PackageInfo from './PackageInfo/PackageInfo';

export default function PackagePage() {
  return (
    <Box>
      <Header />
      <Box component="main">
        <PackageInfo />
      </Box>
    </Box>
  );
}

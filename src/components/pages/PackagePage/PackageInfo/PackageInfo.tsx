import { Box } from '@mui/material';
import Tabs from '../Tabs/Tabs';

export default function PackageInfo() {
  return (
    <Box py={2} px={4} sx={{ margin: 'auto' }} maxWidth={1200}>
      <Tabs />
    </Box>
  );
}

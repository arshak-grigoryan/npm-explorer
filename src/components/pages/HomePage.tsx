import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Header from '../Header/Header';

export default function HomePage() {
  return (
    <Box width={'100vw'} height={'100vh'}>
      <Box display={'flex'} flexDirection={'column'} width={'100%'} height={'100%'}>
        <Header />
        <Box display={'flex'} flexGrow={1} justifyContent={'center'} alignItems={'center'}>
          <Typography>Explore npm packages in a more advanced search</Typography>
        </Box>
      </Box>
    </Box>
  );
}

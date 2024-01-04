import Box from '@mui/material/Box';
import PackageInfo from '../PackageInfo/PackageInfo';
import SearchForm from '../SearchForm/SearchForm';
import Logo from '../../assets/npm-logo-black.svg?react';

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
        <Logo height={16} />
        <SearchForm />
      </Box>
      <Box component="main">
        <PackageInfo />
      </Box>
    </Box>
  );
}

import Box from '@mui/material/Box';
import PackageInfo from './PackageInfo/PackageInfo';
import SearchForm from '../../common/SearchForm/SearchForm';
import Logo from '../../common/Logo/Logo';
import Link from '../../common/Link/Link';

export default function PackagePage() {
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
          <Logo/>
        </Link>
        <SearchForm />
      </Box>
      <Box component="main">
        <PackageInfo />
      </Box>
    </Box>
  );
}

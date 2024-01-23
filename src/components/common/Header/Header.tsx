import Box from '@mui/material/Box';
import colors from 'src/styles/colors';
import SearchForm from '../../common/SearchForm/SearchForm';
import Link from '../../common/Link/Link';
import Logo from '../../common/Logo/Logo';
export default function Header() {
  return (
    <Box
      component={'header'}
      sx={{
        position: 'relative',
        borderBottom: `1px solid ${colors.c1}`,
        boxShadow: `0 4px 13px -3px ${colors.c1}`,
      }}
    >
      <Box
        sx={{
          borderWidth: '10px',
          borderTopStyle: 'solid',
          borderImage: 'linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3',
        }}
      />
      <Box
        sx={{
          maxWidth: 1536,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          margin: 'auto',
          gap: 4,
          px: 4,
          py: 2,
        }}
      >
        <Link to="/">
          <Logo />
        </Link>
        <SearchForm />
      </Box>
    </Box>
  );
}

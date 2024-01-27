import Box from '@mui/material/Box';
import colors from 'src/styles/colors';
import { maxWidth } from 'src/styles/styles';
import Link from '../Link/Link';
import Logo from '../Logo/Logo';
import SearchForm from '../SearchForm/SearchForm';

export default function Header() {
  return (
    <Box
      component={'header'}
      sx={{
        position: 'relative',
        borderBottom: `1px solid ${colors.c29}`,
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
          maxWidth: maxWidth,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          margin: 'auto',
          gap: '32px',
          padding: '16px 32px',
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

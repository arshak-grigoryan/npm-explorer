import { Link } from 'react-router-dom';
import colors from 'src/styles/colors';
import { maxWidth } from 'src/styles/configs';
import Logo from '../Logo/Logo';
import SearchForm from '../SearchForm/SearchForm';

export default function Header() {
  return (
    <header
      style={{
        position: 'relative',
        borderBottom: `1px solid ${colors.c29}`,
        boxShadow: `0 4px 13px -3px ${colors.c1}`,
      }}
    >
      <div
        style={{
          borderWidth: '10px',
          borderTopStyle: 'solid',
          borderImage: 'linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3',
        }}
      />
      <div
        style={{
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
      </div>
    </header>
  );
}

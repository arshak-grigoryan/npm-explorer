import { Link } from 'react-router-dom';
import ThemeDropdown from 'src/ThemeModeProvider/ThemeDropdown/ThemeDropdown';
import Logo from '../Logo/Logo';
import SearchForm from '../SearchForm/SearchForm';
import * as SC from './styles';

export default function Header() {
  return (
    <SC.Header>
      <SC.GradientLine />
      <SC.FormContainer>
        <Link to="/">
          <Logo />
        </Link>
        <SearchForm />
        <ThemeDropdown />
      </SC.FormContainer>
    </SC.Header>
  );
}

import { KeyboardEvent, useContext } from 'react';
import Box from '@mui/material/Box';
import { SearchContext } from '../../contexts/Search/context';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../../assets/npm-logo-black.svg?react';
import { StyledButton, StyledInput, StyledInputWrapper } from './styled';

export default function Header() {
  const { searchString, onSearchStringChange, onSearchClick } = useContext(SearchContext);
  return (
    <Box
      component="header"
      display={'flex'}
      alignItems={'center'}
      width={'100%'}
      gap={4}
      px={4}
      py={2}
    >
      <Logo style={{ width: 70 }} />
      <Box display={'flex'} width={'100%'}>
        <StyledInputWrapper display={'flex'} p={1} alignItems={'center'} gap={2} width={'100%'}>
          <SearchIcon sx={{ fontSize: 18 }} />
          <StyledInput
            name="npm-search"
            autoComplete="npm-search"
            value={searchString}
            onChange={(e) => onSearchStringChange(e.target.value)}
            onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => {
              if (e.key === 'Enter') {
                onSearchClick();
              }
            }}
            placeholder="Search packages"
            type="search"
          />
        </StyledInputWrapper>
        <StyledButton onClick={onSearchClick}>Search</StyledButton>
      </Box>
    </Box>
  );
}

import { KeyboardEvent, useState } from 'react';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { StyledButton, StyledInput, StyledInputWrapper } from './styled';
import { useSearchParams } from 'react-router-dom';

export default function SearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchString, onSearchStringChange] = useState(searchParams.get('text') || '');

  const serachWrap = () => {
    setSearchParams((params) => {
      params.set('text', searchString);
      return params;
    });
  };

  return (
    <Box display={'flex'} width={'100%'}>
      <StyledInputWrapper display={'flex'} p={1} alignItems={'center'} gap={2} width={'100%'}>
        <SearchIcon sx={{ fontSize: 18 }} />
        <StyledInput
          id="npm-search"
          name="npm-search"
          autoComplete="npm-search"
          value={searchString}
          onChange={(e) => onSearchStringChange(e.target.value)}
          onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              serachWrap();
            }
          }}
          placeholder="Search packages"
          type="search"
        />
      </StyledInputWrapper>
      <StyledButton onClick={serachWrap}>Search</StyledButton>
    </Box>
  );
}

import { KeyboardEvent, useState } from 'react';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { ButtonElement, InputElement } from './styles';
import { useSearchParams } from 'react-router-dom';
import { Button as BaseButton } from '@mui/base/Button';
import { Input as BaseInput } from '@mui/base/Input';

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
    <Box
      sx={{
        display: 'flex',
        width: '100%',
      }}
    >
      <Box
        sx={{
          p: 1,
          gap: 2,
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          background: '#f2f2f2',
          border: '1px solid #f2f2f2',
          '&:focus-within': {
            border: '1px solid #231f20',
          },
        }}
      >
        <SearchIcon sx={{ fontSize: 18 }} />
        <BaseInput
          slots={{ input: InputElement }}
          style={{ width: '100%' }}
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
      </Box>
      <BaseButton onClick={serachWrap} slots={{ root: ButtonElement }}>
        Search
      </BaseButton>
    </Box>
  );
}

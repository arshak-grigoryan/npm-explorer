import { KeyboardEvent, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { ButtonElement, InputElement } from './styles';
import { useSearchParams } from 'react-router-dom';
import { Button as BaseButton } from '@mui/base/Button';
import { Input as BaseInput } from '@mui/base/Input';
import colors from '../../styles/colors';

export default function SearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchString = searchParams.get('text') || ''
  const [inputSearchString, setInputSearchString] = useState(searchString);

  useEffect(() => {
    setInputSearchString(searchString)
  }, [searchString]);

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
          background: colors.c10,
          border: `1px solid ${colors.c10}`,
          '&:focus-within': {
            border: `1px solid ${colors.c11}`,
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
          value={inputSearchString}
          onChange={(e) => setInputSearchString(e.target.value)}
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

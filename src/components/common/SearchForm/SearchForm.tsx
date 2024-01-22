import { KeyboardEvent, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { Button as BaseButton } from '@mui/base/Button';
import { Input as BaseInput } from '@mui/base/Input';
import SearchIcon from 'src/assets/SearchBig.svg?react';
import colors from '../../../styles/colors';
import { npmRegistry } from '../../../api/configs';
import useGetSearchParams from '../../../hooks/useGetSearchParams';
import { ButtonElement, InputElement } from './styles';

export default function SearchForm() {
  const navigate = useNavigate();
  const searchString = useGetSearchParams(npmRegistry.searchParams.text, '');
  const [inputSearchString, setInputSearchString] = useState(searchString);

  useEffect(() => {
    setInputSearchString(searchString);
  }, [searchString]);

  const serachWrap = () => {
    navigate({
      pathname: '/search',
      search: createSearchParams({ [npmRegistry.searchParams.text]: inputSearchString }).toString(),
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexGrow: '1',
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
        <SearchIcon style={{ width: 18, height: 18 }} />
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

import { KeyboardEvent, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { Button as BaseButton } from '@mui/base/Button';
import { Input as BaseInput } from '@mui/base/Input';
import SearchIcon from 'src/assets/SearchBig.svg?react';
import { npmRegistry } from 'src/api/configs';
import useGetSearchParams from 'src/hooks/useGetSearchParams';
import { text } from 'src/configs/configs';
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
      component={'form'}
      sx={{
        display: 'flex',
        flexGrow: 1,
      }}
    >
      <Box sx={{ position: 'relative', width: '100%' }}>
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            padding: '0 16px',
            height: '100%',
          }}
        >
          <SearchIcon style={{ width: 18, height: 18 }} />
        </Box>
        <BaseInput
          slots={{ input: InputElement }}
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
          placeholder={text.searchPackages}
          type="search"
        />
      </Box>
      <BaseButton type="button" onClick={serachWrap} slots={{ root: ButtonElement }}>
        {text.search}
      </BaseButton>
    </Box>
  );
}

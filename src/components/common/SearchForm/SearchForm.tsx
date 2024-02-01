import { KeyboardEvent, SyntheticEvent, useEffect, useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import SearchIcon from 'src/assets/SearchBig.svg?react';
import { npmRegistry } from 'src/api/configs';
import useGetSearchParams from 'src/hooks/useGetSearchParams';
import { text } from 'src/configs/text';
import * as SC from './styles';

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

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    serachWrap();
  };

  return (
    <SC.Form onSubmit={onSubmit}>
      <SC.InputContainer>
        <SC.SearchIconContainer>
          <SearchIcon style={{ width: 18, height: 18 }} />
        </SC.SearchIconContainer>
        <SC.Input
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
      </SC.InputContainer>
      <SC.Button type="submit">{text.search}</SC.Button>
    </SC.Form>
  );
}

import { KeyboardEvent, SyntheticEvent, useEffect, useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import SearchIcon from 'src/assets/SearchBig.svg?react';
import { npmRegistry } from 'src/api/configs';
import useUrlSearchParams from 'src/hooks/useUrlSearchParams';
import { text } from 'src/configs/text';
import * as SC from './styles';

export default function SearchForm() {
  const navigate = useNavigate();
  const { searchText } = useUrlSearchParams();
  const [inputSearchText, setInputSearchText] = useState(searchText);

  useEffect(() => {
    setInputSearchText(searchText);
  }, [searchText]);

  const serachWrap = () => {
    navigate({
      pathname: '/search',
      search: createSearchParams({ [npmRegistry.searchParams.text]: inputSearchText }).toString(),
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
          value={inputSearchText}
          onChange={(e) => setInputSearchText(e.target.value)}
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

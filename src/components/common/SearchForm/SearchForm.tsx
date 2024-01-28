import { KeyboardEvent, SyntheticEvent, useEffect, useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
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

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    serachWrap();
  };

  return (
    <form
      style={{
        display: 'flex',
        flexGrow: 1,
      }}
      onSubmit={onSubmit}
    >
      <div style={{ position: 'relative', width: '100%' }}>
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            padding: '0 16px',
            height: '100%',
          }}
        >
          <SearchIcon style={{ width: 18, height: 18 }} />
        </div>
        <InputElement
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
      </div>
      <ButtonElement type="submit">{text.search}</ButtonElement>
    </form>
  );
}

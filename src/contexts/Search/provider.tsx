import { ReactNode, useState } from 'react';
import { SearchContext } from './context';
import { npmRegistry, perPage, searchEndpoint } from '../../api/configs';
import { PerPageData } from '../../types';

export default function SearchContextProvider({ children }: { children: ReactNode }) {
  const [searchString, onSearchStringChange] = useState('');
  const [popularity, setPopularity] = useState(0);
  const [quality, setQuality] = useState(0);
  const [maintenance, setMaintenance] = useState(0);
  const [from, setFrom] = useState(0);
  const [data, setData] = useState<PerPageData>([]);
  const [isFetching, setIsFetching] = useState(false);

  const onSearchClick = () => {
    const searchConfig = new Request(`${npmRegistry}${searchEndpoint}?text=${searchString}`);
    setIsFetching(true);
    fetch(searchConfig)
      .then((res) => res.json())
      .then((res) => {
        setData([{ page: 1, response: res }]);
        setIsFetching(false);
      });
  };

  const onPageChange = (page: number) => {
    const pageData = data.find((item) => item.page === page);

    if (pageData) return;
    const from = page * perPage - perPage;
    const searchConfig = new Request(
      `${npmRegistry}${searchEndpoint}?text=${searchString}&from=${from}`,
    );
    setIsFetching(true);

    fetch(searchConfig)
      .then((res) => res.json())
      .then((res) => {
        setData((prev) => [...prev, { page, response: res }]);
        setIsFetching(false);
      });
  };

  return (
    <SearchContext.Provider
      value={{
        data,
        searchString,
        onSearchStringChange,
        popularity,
        setPopularity,
        quality,
        setQuality,
        maintenance,
        setMaintenance,
        from,
        setFrom,
        onPageChange,
        onSearchClick,
        isFetching,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

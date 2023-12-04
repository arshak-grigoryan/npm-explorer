import { ReactNode, useState } from 'react';
import { SearchContext } from './context';
import { npmRegistry, perPage, searchEndpoint } from '../../api/configs';
import { Response } from '../../types';

export default function SearchContextProvider({ children }: { children: ReactNode }) {
  const [searchString, onSearchStringChange] = useState('');
  const [popularity, setPopularity] = useState(0);
  const [quality, setQuality] = useState(0);
  const [maintenance, setMaintenance] = useState(0);
  const [from, setFrom] = useState(0);
  const [data, setData] = useState<Response | null>(null);
  const [isFetching, setIsFetching] = useState(false);

  const isSortOptionsAvailable = popularity || quality || maintenance;

  const onSearchClick = () => {
    setIsFetching(true);
    setPopularity(0);
    setQuality(0);
    setMaintenance(0);
    const searchConfig = new Request(`${npmRegistry}${searchEndpoint}?text=${searchString}`);
    fetch(searchConfig)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setIsFetching(false);
      });
  };

  const onPageChange = (page: number) => {
    const from = page * perPage - perPage;
    const url = isSortOptionsAvailable
      ? `${npmRegistry}${searchEndpoint}?text=${searchString}&popularity=${popularity}&quality=${quality}&maintenance=${maintenance}`
      : `${npmRegistry}${searchEndpoint}?text=${searchString}&from=${from}`;
    const searchConfig = new Request(url);
    setIsFetching(true);

    fetch(searchConfig)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setIsFetching(false);
      });
  };

  const onSortClick = () => {
    if (!isSortOptionsAvailable) {
      onSearchClick();
      return;
    }
    const searchQuery = `${npmRegistry}${searchEndpoint}?text=${searchString}&popularity=${popularity}&quality=${quality}&maintenance=${maintenance}`;
    const searchConfig = new Request(searchQuery);
    setIsFetching(true);
    fetch(searchConfig)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
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
        onPopularityChange: setPopularity,
        quality,
        onQualityChange: setQuality,
        maintenance,
        onMaintenanceChange: setMaintenance,
        from,
        setFrom,
        onPageChange,
        onSearchClick,
        isFetching,
        onSortClick,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

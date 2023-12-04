import { createContext } from 'react';
import { noop } from 'lodash';
import { Response } from '../../types';

type SearchContext = {
  data: { page: number; response: Response }[];
  searchString: string;
  onSearchStringChange: (value: string) => void;
  popularity: number;
  setPopularity: (value: number) => void;
  quality: number;
  setQuality: (value: number) => void;
  maintenance: number;
  setMaintenance: (value: number) => void;
  from: number;
  setFrom: (value: number) => void;
  onPageChange: (value: number) => void;
  onSearchClick: () => void;
  isFetching: boolean;
};

const defaultValue = {
  data: [],
  searchString: '',
  onSearchStringChange: noop,
  popularity: 0,
  setPopularity: noop,
  quality: 0,
  setQuality: noop,
  maintenance: 0,
  setMaintenance: noop,
  from: 0,
  setFrom: noop,
  onPageChange: noop,
  onSearchClick: noop,
  isFetching: false,
};

export const SearchContext = createContext<SearchContext>(defaultValue);

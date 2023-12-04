import { createContext } from 'react';
import { noop } from 'lodash';
import { Response } from '../../types';

type SearchContext = {
  data: Response | null;
  searchString: string;
  onSearchStringChange: (value: string) => void;
  popularity: number;
  onPopularityChange: (value: number) => void;
  quality: number;
  onQualityChange: (value: number) => void;
  maintenance: number;
  onMaintenanceChange: (value: number) => void;
  from: number;
  setFrom: (value: number) => void;
  onPageChange: (value: number) => void;
  onSearchClick: () => void;
  isFetching: boolean;
  onSortClick: () => void;
};

const defaultValue = {
  data: null,
  searchString: '',
  onSearchStringChange: noop,
  popularity: 0,
  onPopularityChange: noop,
  quality: 0,
  onQualityChange: noop,
  maintenance: 0,
  onMaintenanceChange: noop,
  from: 0,
  setFrom: noop,
  onPageChange: noop,
  onSearchClick: noop,
  isFetching: false,
  onSortClick: noop,
};

export const SearchContext = createContext<SearchContext>(defaultValue);

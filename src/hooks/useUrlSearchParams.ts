import { ACTIVE_TAB, PAGE, npmRegistry } from 'src/api/configs';
import { TabsEnum } from 'src/components/pages/PackagePage/Tabs/types';
import useGetSearchParams from './useGetSearchParams';

const {
  searchParams: { text: t, popularity: p, quality: q, maintenance: m },
} = npmRegistry;

export default function useUrlSearchParams() {
  const searchText = useGetSearchParams(t, '');
  const popularity = Number(useGetSearchParams(p, 0));
  const quality = Number(useGetSearchParams(q, 0));
  const maintenance = Number(useGetSearchParams(m, 0));
  const page = Number(useGetSearchParams(PAGE, 1));
  const activeTab: TabsEnum = useGetSearchParams(ACTIVE_TAB, TabsEnum.readme);

  return {
    searchText,
    popularity,
    quality,
    maintenance,
    page,
    activeTab,
  };
}

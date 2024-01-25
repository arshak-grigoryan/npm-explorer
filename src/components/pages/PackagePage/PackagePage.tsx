import Box from '@mui/material/Box';
import Header from 'src/components/common/Header/Header';
import { maxWidth } from 'src/styles/styles';
import useGetSearchParams from 'src/hooks/useGetSearchParams';
import { ACTIVE_TAB } from 'src/api/configs';
import Tabs, { TabComponent } from './Tabs/Tabs';
import PackageDetails from './PackageDetails/PackageDetails';
import { TabsEnum } from './Tabs/types';

export default function PackagePage() {
  const activeTab: TabsEnum = useGetSearchParams(ACTIVE_TAB, TabsEnum.readme);

  return (
    <Box>
      <Header />
      <Box component="main">
        <Box
          sx={{
            maxWidth: maxWidth,
            margin: 'auto',
            padding: '32px',
          }}
        >
          <Tabs />
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ width: 'calc(100% / 3 * 2)', mr: 2, mt: 2 }}>{TabComponent[activeTab]}</Box>
            <Box sx={{ width: 'calc(100% / 3)', mx: 2, mt: 2 }}>
              <PackageDetails />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

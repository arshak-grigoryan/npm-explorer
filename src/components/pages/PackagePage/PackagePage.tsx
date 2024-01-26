import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Header from 'src/components/common/Header/Header';
import { maxWidth } from 'src/styles/styles';
import useGetSearchParams from 'src/hooks/useGetSearchParams';
import { ACTIVE_TAB } from 'src/api/configs';
import colors from 'src/styles/colors';
import Tabs, { TabComponent } from './Tabs/Tabs';
import PackageSidebar from './PackageSidebar/PackageSidebar';
import { TabsEnum } from './Tabs/types';

export default function PackagePage() {
  const activeTab: TabsEnum = useGetSearchParams(ACTIVE_TAB, TabsEnum.readme);
  const { name } = useParams();
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
          <Box
            sx={{
              marginTop: '16px',
              marginBottom: '16px',
            }}
          >
            <Typography
              component={'h1'}
              sx={{
                fontSize: '1.5rem',
                fontWeight: 600,
                color: colors.c4,
              }}
            >
              {name}
            </Typography>
          </Box>

          <Tabs />
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ width: 'calc(100% / 3 * 2)', mr: 2, mt: 2 }}>{TabComponent[activeTab]}</Box>
            <Box sx={{ width: 'calc(100% / 3)', mx: 2, mt: 2 }}>
              <PackageSidebar />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

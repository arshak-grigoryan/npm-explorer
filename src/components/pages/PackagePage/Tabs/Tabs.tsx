import { Box, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import useGetSearchParams from '../../../../hooks/useGetSearchParams';
import { ACTIVE_TAB } from '../../../../api/configs';
import Readme from '../Readme/Readme';
import Dependency from '../Dependencies/Dependencies';
import Versions from '../Versions/Versions';
import GithubInfo from '../GithubInfo/GithubInfo';
import { TabProps, TabsEnum } from './types';
import { TabsConfig } from './configs';
import { StyledLink, StyledTab, StyledTabs } from './styles';

const TabComponent = {
  [TabsEnum.Readme]: <Readme />,
  [TabsEnum.Code]: <></>,
  [TabsEnum.Dependencies]: <Dependency />,
  [TabsEnum.Dependents]: <></>,
  [TabsEnum.Versions]: <Versions />,
};

function Tab({ label, icon, colors, selected, onClick }: TabProps) {
  return (
    <StyledTab colors={colors} selected={selected} onClick={onClick}>
      <StyledLink to={'?activeTab/readme'} colors={colors}>
        {icon}
        <Typography>{label}</Typography>
      </StyledLink>
    </StyledTab>
  );
}

export default function Tabs() {
  const [, setSearchParams] = useSearchParams();
  const activeTab: TabsEnum = useGetSearchParams(ACTIVE_TAB, TabsEnum.Readme);

  return (
    <>
      <StyledTabs>
        {TabsConfig.map(({ name, colors, Icon }) => (
          <Tab
            key={name}
            label={name}
            colors={colors}
            icon={<Icon style={{ color: colors.text, width: 19.195, height: 19.195 }} />}
            selected={activeTab === name}
            onClick={() => {
              setSearchParams({ activeTab: name });
            }}
          />
        ))}
      </StyledTabs>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ width: 'calc(100% / 3 * 2)', mr: 2, mt: 2 }}>{TabComponent[activeTab]}</Box>
        <Box sx={{ width: 'calc(100% / 3)', mx: 2, mt: 2 }}>
          <GithubInfo />
        </Box>
      </Box>
    </>
  );
}

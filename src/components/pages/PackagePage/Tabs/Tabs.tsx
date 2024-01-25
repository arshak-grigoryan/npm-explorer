import { Typography } from '@mui/material';
import useGetSearchParams from 'src/hooks/useGetSearchParams';
import { ACTIVE_TAB } from 'src/api/configs';
import Readme from '../Readme/Readme';
import Dependency from '../Dependencies/Dependencies';
import Versions from '../Versions/Versions';
import { TabProps, TabsEnum } from './types';
import { TabsConfig } from './configs';
import { StyledLink, StyledTab, StyledTabs } from './styles';

export const TabComponent = {
  [TabsEnum.readme]: <Readme />,
  [TabsEnum.code]: <></>,
  [TabsEnum.dependencies]: <Dependency />,
  [TabsEnum.dependents]: <></>,
  [TabsEnum.versions]: <Versions />,
};

function Tab({ label, icon, colors, selected }: TabProps) {
  return (
    <StyledTab colors={colors} selected={selected}>
      <StyledLink to={`?activeTab=${label}`} colors={colors}>
        {icon}
        <Typography sx={{ textTransform: 'capitalize' }}>{label}</Typography>
      </StyledLink>
    </StyledTab>
  );
}

export default function Tabs() {
  const activeTab: TabsEnum = useGetSearchParams(ACTIVE_TAB, TabsEnum.readme);

  return (
    <StyledTabs>
      {TabsConfig.map(({ name, colors, Icon }) => (
        <Tab
          key={name}
          label={name}
          colors={colors}
          icon={<Icon style={{ color: colors.text, width: 19.195, height: 19.195 }} />}
          selected={activeTab === name}
        />
      ))}
    </StyledTabs>
  );
}

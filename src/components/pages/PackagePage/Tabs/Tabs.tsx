import useGetSearchParams from 'src/hooks/useGetSearchParams';
import { ACTIVE_TAB } from 'src/api/configs';
import Readme from '../Readme/Readme';
import Dependency from '../Dependencies/Dependencies';
import Versions from '../Versions/Versions';
import { TabProps, TabsEnum } from './types';
import { TabsConfig } from './configs';
import * as SC from './styles';

export const TabComponent = {
  [TabsEnum.readme]: <Readme />,
  [TabsEnum.code]: <></>,
  [TabsEnum.dependencies]: <Dependency />,
  [TabsEnum.dependents]: <></>,
  [TabsEnum.versions]: <Versions />,
};

function Tab({ label, icon, colors, selected }: TabProps) {
  return (
    <SC.Tab colors={colors} selected={selected}>
      <SC.StyledLink to={`?activeTab=${label}`} colors={colors}>
        {icon}
        {label}
      </SC.StyledLink>
    </SC.Tab>
  );
}

export default function Tabs() {
  const activeTab: TabsEnum = useGetSearchParams(ACTIVE_TAB, TabsEnum.readme);

  return (
    <SC.Tabs>
      {TabsConfig.map(({ name, colors, Icon }) => (
        <Tab
          key={name}
          label={name}
          colors={colors}
          icon={<Icon style={{ color: colors.text, width: 19.195, height: 19.195 }} />}
          selected={activeTab === name}
        />
      ))}
    </SC.Tabs>
  );
}

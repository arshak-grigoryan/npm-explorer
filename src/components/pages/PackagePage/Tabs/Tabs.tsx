import { useContext } from 'react';
import useUrlSearchParams from 'src/hooks/useUrlSearchParams';
import Readme from '../Readme/Readme';
import Dependency from '../Dependencies/Dependencies';
import Versions from '../Versions/Versions';
import Code from '../Code/Code';
import { PackagePageContext } from '../PackagePageProvider/PackagePageProvider';
import Downloads from '../Downloads/Downloads';
import { TabProps, TabsEnum } from './types';
import { TabsConfig } from './configs';
import * as SC from './styles';

export const TabComponent = {
  [TabsEnum.readme]: <Readme />,
  [TabsEnum.code]: <Code />,
  [TabsEnum.dependencies]: <Dependency />,
  [TabsEnum.dependents]: <></>,
  [TabsEnum.versions]: <Versions />,
  [TabsEnum.downloads]: <Downloads />,
};

function Tab({ label, icon, colors, selected, count }: TabProps) {
  return (
    <SC.Tab colors={colors} selected={selected}>
      <SC.StyledLink to={`?activeTab=${label}`} colors={colors}>
        {icon}
        {count}
        &nbsp;
        {label}
      </SC.StyledLink>
    </SC.Tab>
  );
}

export default function Tabs() {
  const { activeTab } = useUrlSearchParams();
  const { tabCounts } = useContext(PackagePageContext);

  return (
    <SC.Tabs>
      {TabsConfig.map(({ name, colors, Icon }) => (
        <Tab
          key={name}
          label={name}
          colors={colors}
          icon={<Icon style={{ color: colors.text, width: 19.195, height: 19.195 }} />}
          selected={activeTab === name}
          count={tabCounts[name]}
        />
      ))}
    </SC.Tabs>
  );
}

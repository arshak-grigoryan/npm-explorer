import { ReactNode } from 'react';
import { StyledLink, StyledTab, StyledTabs } from './styles';
import { Typography } from '@mui/material';
import { TabsConfig, TabsEnum } from './configs';
import { useSearchParams } from 'react-router-dom';
import useGetSearchParams from '../../hooks/useGetSearchParams';
import { SEARCH_PARAMS } from '../../api/configs';

type Props = {
  icon: ReactNode;
  label: string;
  colors: any;
  selected: boolean;
  onClick: () => void
};

function Tab({ label, icon, colors, selected, onClick }: Props) {
  return (
    <StyledTab colors={colors} selected={selected} onClick={onClick}>
      <StyledLink to={'?activeTab/readme'} colors={colors} >
      {icon}
      <Typography>{label}</Typography>
      </StyledLink>
    </StyledTab>
  );
}

export default function Tabs() {
  const [_, setSearchParams] = useSearchParams()
  const activeTab = useGetSearchParams(SEARCH_PARAMS.activeTab, TabsEnum.Readme);

  return (
    <StyledTabs>
      {TabsConfig.map(({ name, colors, Icon }) => (
        <Tab
          key={name}
          label={name}
          colors={colors}
          icon={<Icon style={{ color: colors.text, width: 19.195, height: 19.195 }}/>}
          selected={activeTab === name}
          onClick={() => {
            setSearchParams({ activeTab: name})
          }}
        />
      ))}
    </StyledTabs>
  );
}

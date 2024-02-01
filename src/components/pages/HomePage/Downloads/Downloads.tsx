import ChartIcon from 'src/assets/Chart.svg?react';
import { npmApi } from 'src/api/configs';
import { text } from 'src/configs/text';
import Divider from 'src/components/common/Divider/Divider';
import Count from './Count/Count';
import * as SC from './styles';

export default function Downloads() {
  return (
    <SC.DownloadsSection>
      <SC.Heading>
        <ChartIcon style={{ color: 'currentColor', height: 14, marginRight: '8px' }} />
        {text.byTheNumbers}
      </SC.Heading>
      <Divider css={(theme) => ({ backgroundColor: theme.colors.c20 })} />
      <SC.CountsContainer>
        <Count url={npmApi.allPackagesLastDayDownloadsUrl} title={text.downloadsLastDay} />
        <Divider css={(theme) => ({ backgroundColor: theme.colors.c1 })} height="1px" />
        <Count url={npmApi.allPackagesLastWeekDownloadsUrl} title={text.downloadsLastWeek} />
        <Divider css={(theme) => ({ backgroundColor: theme.colors.c1 })} height="1px" />
        <Count url={npmApi.allPackagesLastMonthDownloadsUrl} title={text.downloadsLastMonth} />
      </SC.CountsContainer>
    </SC.DownloadsSection>
  );
}

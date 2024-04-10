/* eslint-disable import/default */
/* eslint-disable import/no-named-as-default */

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ChangeEvent, useState } from 'react';
import useGetDownloadsChartOptions from 'src/hooks/useGetDownloadsChartOptions';
import FetchLayout from 'src/components/common/FetchLayout/FetchLayout';
import useGetAllDownloads from 'src/api/hooks/downloads/useGetAllPackageDownloads';
import { text } from 'src/configs/text';
import DownloadIcon from 'src/assets/Download.svg?react';
import Divider from 'src/components/common/Divider/Divider';
import { rangeOptions } from '../../PackagePage/PackagePageProvider/config';
import * as SC from './styles';
import { AllDownloadsLayoutProps } from './types';

function AllDownloadsLayout(props: AllDownloadsLayoutProps) {
  const [range, setRange] = useState(rangeOptions[0]);

  const options = useGetDownloadsChartOptions(props.data, range.value);

  return (
    <SC.DownloadsStatsSection>
      <SC.Heading>
        <DownloadIcon css={{ height: 14, marginRight: '8px', '& g': { stroke: 'currentColor' } }} />
        {text.downloadsStatistics}
      </SC.Heading>
      <Divider css={(theme) => ({ backgroundColor: theme.staticColors.divider.c3 })} />
      <SC.DownloadsDropdownContainer>
        <SC.DownloadsTypography>Downloads per</SC.DownloadsTypography>
        <select
          onChange={(event: ChangeEvent<HTMLSelectElement>) => {
            const range = rangeOptions.find(({ value }) => Number(event.target.value) === value);
            if (range) {
              setRange(range);
            }
          }}
        >
          {rangeOptions.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </SC.DownloadsDropdownContainer>
      <SC.ChartContainer>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </SC.ChartContainer>
    </SC.DownloadsStatsSection>
  );
}

export default function AllDownloads() {
  const res = useGetAllDownloads();

  return <FetchLayout res={res} slots={{ Content: AllDownloadsLayout }} />;
}

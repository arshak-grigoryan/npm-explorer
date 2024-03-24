/* eslint-disable import/default */
/* eslint-disable import/no-named-as-default */

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ChangeEvent } from 'react';
import useGetPackageDownloadsRange from 'src/api/hooks/downloads/useGetPackageDownloadsRange';
import FetchLayout from 'src/components/common/FetchLayout/FetchLayout';
import { PackageDownloads } from 'src/api/hooks/types';
import useGetDownloadsChartOptions from 'src/hooks/useGetDownloadsChartOptions';
import { usePackageContext } from '../PackagePageProvider/PackagePageProvider';
import { downloadsPastDateOptions, rangeOptions } from '../PackagePageProvider/config';
import * as SC from './styles';

type DownloadsLayoutProps = {
  data: PackageDownloads['data'][];
};

function DownloadsLayout(props: DownloadsLayoutProps) {
  const { setPackageDownloadsStartDate, downloadsRange, setDownloadsRange } = usePackageContext();
  const options = useGetDownloadsChartOptions(props.data, downloadsRange.value);

  return (
    <div>
      <SC.DownloadsDropdownContainer>
        <SC.DownloadsTypography>Downloads per</SC.DownloadsTypography>
        <select
          onChange={(event: ChangeEvent<HTMLSelectElement>) => {
            const range = rangeOptions.find(({ value }) => Number(event.target.value) === value);
            if (range) {
              setDownloadsRange(range);
            }
          }}
        >
          {rangeOptions.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <SC.DownloadsTypography>in past</SC.DownloadsTypography>
        <select
          onChange={(event: ChangeEvent<HTMLSelectElement>) => {
            const range = downloadsPastDateOptions.find(
              ({ value }) => Number(event.target.value) === value,
            );
            if (range) {
              setPackageDownloadsStartDate(range);
            }
          }}
        >
          {downloadsPastDateOptions.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </SC.DownloadsDropdownContainer>
      <SC.ChartContainer>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </SC.ChartContainer>
    </div>
  );
}

export default function Downloads() {
  const { packageDownloadsStartDate } = usePackageContext();

  const res = useGetPackageDownloadsRange(packageDownloadsStartDate.value, new Date().getTime());
  return <FetchLayout res={res} slots={{ Content: DownloadsLayout }} />;
}

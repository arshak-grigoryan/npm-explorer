/* eslint-disable import/default */
/* eslint-disable import/no-named-as-default */

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Dropdown } from 'rsuite';
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
  const {
    packageDownloadsStartDate,
    setPackageDownloadsStartDate,
    downloadsRange,
    setDownloadsRange,
  } = usePackageContext();
  const options = useGetDownloadsChartOptions(props.data, downloadsRange.value);

  return (
    <div>
      <SC.DownloadsDropdownContainer>
        <SC.DownloadsTypography>Downloads per</SC.DownloadsTypography>
        <Dropdown
          defaultValue={downloadsRange.value}
          title={downloadsRange.label}
          onSelect={(eventKey) => {
            const range = rangeOptions.find(({ value }) => eventKey === value);
            if (range) {
              setDownloadsRange(range);
            }
          }}
        >
          {rangeOptions.map(({ label, value }) => (
            <Dropdown.Item key={value} eventKey={value} active={value === downloadsRange.value}>
              {label}
            </Dropdown.Item>
          ))}
        </Dropdown>
        <SC.DownloadsTypography>in past</SC.DownloadsTypography>
        <Dropdown
          defaultValue={packageDownloadsStartDate.value}
          title={packageDownloadsStartDate.label}
          onSelect={(eventKey) => {
            const range = downloadsPastDateOptions.find(({ value }) => eventKey === value);
            if (range) {
              setPackageDownloadsStartDate(range);
            }
          }}
        >
          {downloadsPastDateOptions.map(({ label, value }) => (
            <Dropdown.Item
              key={value}
              eventKey={value}
              active={value === packageDownloadsStartDate.value}
            >
              {label}
            </Dropdown.Item>
          ))}
        </Dropdown>
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

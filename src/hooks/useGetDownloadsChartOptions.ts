import { groupBy } from 'lodash';
import randomColor from 'randomcolor';
import { useMemo } from 'react';
import { PackageDownloads } from 'src/api/hooks/types';

export default function useGetDownloadsChartOptions(
  packageDownloads: PackageDownloads['data'][],
  daysCount: number,
) {
  const data = packageDownloads
    .reduce((flaten: { downloads: number; day: string }[][], current) => {
      flaten.push(current.downloads);

      return flaten;
    }, [])
    .flat();

  const downloads = data.map(({ downloads }) => downloads).filter((_, i) => i % daysCount === 0);
  const dates = data.map(({ day }) => day.split('-')[0]).filter((_, i) => i % daysCount === 0);
  const valuedDates = dates.map((date) => ({ value: date }));
  const groupedByYear = groupBy(valuedDates, 'value');

  const years = Object.keys(groupedByYear);
  const zones = useMemo(() => {
    let count = 1;
    const coloredZones: { value: number; color: string }[] = [];
    years.forEach((year) => {
      coloredZones.push({ value: count, color: randomColor() });
      count += groupedByYear[year].length;
    });
    return coloredZones;
  }, [years, groupedByYear]);

  let previousValue: string;

  const options = {
    chart: {
      styledMode: true,
    },
    title: {
      text: '',
    },
    subtitle: {
      text: `${data[0].day} - ${data[data.length - 1].day}`,
    },
    series: [
      {
        name: 'Downloads',
        data: downloads,
        lineWidth: 1,
        zoneAxis: 'x',
        zones: zones,
      },
    ],
    xAxis: [
      {
        categories: dates,
        labels: {
          formatter: function (): string {
            if (previousValue !== (this as any).value) {
              previousValue = (this as any).value;
              return (this as any).value;
            } else {
              return '';
            }
          },
        },
      },
    ],
  };

  return options;
}

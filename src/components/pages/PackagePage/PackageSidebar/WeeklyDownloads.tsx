import { useParams } from 'react-router-dom';
import { npmApi } from 'src/api/configs';
import useGetPackageDownloads, { Downloads } from 'src/api/hooks/downloads/useGetPackageDownloads';
import FetchLayout from 'src/components/common/FetchLayout/FetchLayout';
import DownloadIcon from 'src/assets/Download.svg?react';
import colors from 'src/styles/colors';
import { text } from 'src/configs/configs';
import { Title, TitleContent } from './styles';

function WeeklyDownloadsLayout(props: Downloads) {
  return (
    <div
      style={{
        borderBottom: `1px solid ${colors.c1}`,
      }}
    >
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <div>
          <DownloadIcon style={{ height: 12, fill: 'rgba(0, 0, 0, .45)' }} />
        </div>
        <Title>{text.weeklyDownloads}</Title>
      </div>
      <TitleContent style={{ fontSize: '1.25rem', paddingTop: '8px', paddingBottom: '16px' }}>
        {props.data.downloads.toLocaleString()}
      </TitleContent>
    </div>
  );
}

export default function WeeklyDownloads() {
  const { name } = useParams();
  const url = name ? `${npmApi.allPackagesLastWeekDownloadsUrl}/${name}` : '';
  const res = useGetPackageDownloads(url);

  return (
    <FetchLayout
      state={res}
      slots={{
        Content: WeeklyDownloadsLayout,
      }}
    />
  );
}

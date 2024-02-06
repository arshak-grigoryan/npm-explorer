import { useParams } from 'react-router-dom';
import { npmApi } from 'src/api/configs';
import useGetPackageDownloads, { Downloads } from 'src/api/hooks/downloads/useGetPackageDownloads';
import FetchLayout from 'src/components/common/FetchLayout/FetchLayout';
import DownloadIcon from 'src/assets/Download.svg?react';
import { text } from 'src/configs/text';
import Flex from 'src/components/common/Flex/Flex';
import * as SC from '../styles';

function WeeklyDownloadsLayout(props: Downloads) {
  return (
    <SC.InfoBlock>
      <Flex gap="8px" alignItems="center">
        <SC.Title>
          <DownloadIcon css={{ height: 12, marginRight: '8px', fill: 'currentcolor' }} />
          {text.weeklyDownloads}
        </SC.Title>
      </Flex>
      <SC.TitleContentOverride>{props.data.downloads.toLocaleString()}</SC.TitleContentOverride>
    </SC.InfoBlock>
  );
}

export default function WeeklyDownloads() {
  const { name } = useParams();
  const url = name ? `${npmApi.allPackagesLastWeekDownloadsUrl}/${name}` : '';
  const res = useGetPackageDownloads(url);

  return (
    <FetchLayout
      res={res}
      slots={{
        Content: WeeklyDownloadsLayout,
      }}
    />
  );
}

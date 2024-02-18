import { useContext } from 'react';
import { Downloads } from 'src/api/hooks/downloads/useGetPackageDownloads';
import FetchLayout from 'src/components/common/FetchLayout/FetchLayout';
import DownloadIcon from 'src/assets/Download.svg?react';
import { text } from 'src/configs/text';
import Flex from 'src/components/common/Flex/Flex';
import * as SC from '../styles';
import { PackagePageContext } from '../../PackagePageProvider/PackagePageProvider';

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
  const { weeklyDownloadsRes } = useContext(PackagePageContext);

  return (
    <FetchLayout
      res={weeklyDownloadsRes}
      slots={{
        Content: WeeklyDownloadsLayout,
      }}
    />
  );
}

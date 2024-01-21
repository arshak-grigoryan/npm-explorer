import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { NPM_DOWNLOADS_POINT_LAST_WEEK } from 'src/api/configs';
import useGetPackageDownloads, { Downloads } from 'src/api/hooks/downloads/useGetPackageDownloads';
import FetchLayout from 'src/components/common/FetchLayout/FetchLayout';
import { StyledDivider, Title } from './styles';
import DownloadIcon from 'src/assets/Download.svg?react';

function WeeklyDownloads(props: Downloads) {
  return (
    <>
      <Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Box>
            <DownloadIcon style={{ height: 12 }} />
          </Box>
          <Title>Weekly Downloads</Title>
        </Box>
        <Typography>{props.data.downloads.toLocaleString()}</Typography>;
      </Box>
      <StyledDivider />
    </>
  );
}

export default function WeeklyDownloadsContainer() {
  const { name } = useParams();
  const url = name ? `${NPM_DOWNLOADS_POINT_LAST_WEEK}/${name}` : '';
  const res = useGetPackageDownloads(url);
  return (
    <FetchLayout
      state={res}
      slots={{
        Content: WeeklyDownloads,
      }}
    />
  );
}

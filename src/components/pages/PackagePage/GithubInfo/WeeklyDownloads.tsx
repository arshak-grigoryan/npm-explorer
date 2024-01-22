import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { npmApi } from 'src/api/configs';
import useGetPackageDownloads, { Downloads } from 'src/api/hooks/downloads/useGetPackageDownloads';
import FetchLayout from 'src/components/common/FetchLayout/FetchLayout';
import DownloadIcon from 'src/assets/Download.svg?react';
import { StyledDivider, Title } from './styles';

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
        <Typography>{props.data.downloads.toLocaleString()}</Typography>
      </Box>
      <StyledDivider />
    </>
  );
}

export default function WeeklyDownloadsContainer() {
  const { name } = useParams();
  const url = name ? `${npmApi.allPackagesLastWeekDownloadsUrl}/${name}` : '';
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

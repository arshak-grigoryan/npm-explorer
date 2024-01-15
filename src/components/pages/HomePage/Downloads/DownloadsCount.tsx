import { Box, Typography } from '@mui/material';
import colors from '../../../../styles/colors';
import useGetPackageDownloads, { Downloads } from '../../../../api/hooks/useGetPackageDownloads';
import FetchLayout from '../../../common/FetchLayout/FetchLayout';

function Count({ data, text }: Downloads & { text: string }) {
  return (
    <Box
      sx={{
        borderBottom: `1px solid ${colors.c1}`,
        mb: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: '.875rem',
        }}
      >
        {text}
      </Typography>
      <Typography
        sx={{
          fontSize: '1.5rem',
          mb: 1,
        }}
      >
        {data.downloads.toLocaleString()}
      </Typography>
    </Box>
  );
}

export default function DownloadsCount({ url, text }: { url: string; text: string }) {
  const { data, isFetching, isStartedFetch, error } = useGetPackageDownloads(url);

  return (
    <FetchLayout
      state={{
        isFetching,
        isStartedFetch,
        error,
        data,
      }}
      slots={{
        DataComp: Count,
      }}
      slotProps={{
        DataComp: text,
      }}
    />
  );
}

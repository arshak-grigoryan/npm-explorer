import { Box, Typography } from '@mui/material';
import colors from '../../styles/colors';
import useGetLastDayDownloads from '../../api/hooks/useGetDownloads';

export default function DownloadsCount({ url, text }: { url: string; text: string }) {
  const { data, isFetching, isFetched, error } = useGetLastDayDownloads(url);

  if (!isFetched) {
    return null;
  }

  if (isFetching) {
    return <div>Skeleton</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (data) {
    return (
      <Box
        sx={{
          borderBottom: `1px solid ${colors.c1}`,
          mb: 2,
        }}
      >
        <Typography sx={{
          fontSize: '.875rem'
        }}>{text}</Typography>
        <Typography
          sx={{
            fontSize: '1.5rem',
            mb: 1
          }}
        >
          {data.downloads.toLocaleString()}
        </Typography>
      </Box>
    );
  }

  return <div>No data</div>;
}

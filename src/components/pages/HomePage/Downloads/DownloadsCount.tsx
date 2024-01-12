import { Box, Typography } from '@mui/material';
import colors from '../../../../styles/colors';
import useGetPackageDownloads from '../../../../api/hooks/useGetPackageDownloads';
import FetchLayout from '../../../common/FetchLayout/FetchLayout';

export default function DownloadsCount({ url, text }: { url: string; text: string }) {
  const { data, isFetching, isStartedFetch, error } = useGetPackageDownloads(url);

  function Count() {
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

  return (
    <FetchLayout
      state={{
        isFetching,
        isStartedFetch,
        error,
        data,
      }}
      slots={{
        PreFetchComp: null,
        LoaderComp: null,
        ErrorComp: null,
        Data: <Count />,
        NoData: null,
      }}
    />
  );
}

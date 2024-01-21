import { Box, Typography } from '@mui/material';
import colors from 'src/styles/colors';
import useGetPackageDownloads, { Downloads } from 'src/api/hooks/downloads/useGetPackageDownloads';
import FetchLayout from '../../../common/FetchLayout/FetchLayout';

type CountProps = Downloads & {
  text: string;
};

function Count({ data, text }: CountProps) {
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
  const res = useGetPackageDownloads(url);

  return (
    <FetchLayout
      state={res}
      slots={{
        Content: Count,
      }}
      slotProps={{
        Content: { text },
      }}
    />
  );
}

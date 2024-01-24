import { Box, Typography } from '@mui/material';
import colors from 'src/styles/colors';
import useGetPackageDownloads, { Downloads } from 'src/api/hooks/downloads/useGetPackageDownloads';
import FetchLayout from 'src/components/common/FetchLayout/FetchLayout';

type CountLayoutProps = Downloads & {
  text: string;
};

function CountLayout({ data, text }: CountLayoutProps) {
  return (
    <Box
      sx={{
        borderBottom: `1px solid ${colors.c1}`,
        marginBottom: '16px',
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
          marginBottom: '16px',
        }}
      >
        {data.downloads.toLocaleString()}
      </Typography>
    </Box>
  );
}

export default function Count({ url, text }: { url: string; text: string }) {
  const res = useGetPackageDownloads(url);

  return (
    <FetchLayout
      state={res}
      slots={{
        Content: CountLayout,
      }}
      slotProps={{
        Content: { text },
      }}
    />
  );
}

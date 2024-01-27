import { Box } from '@mui/material';
import colors from 'src/styles/colors';
import useGetPackageDownloads, { Downloads } from 'src/api/hooks/downloads/useGetPackageDownloads';
import FetchLayout from 'src/components/common/FetchLayout/FetchLayout';
import Typography from 'src/components/common/Typography/Typography';

type CountLayoutProps = Downloads & {
  text: string;
};

function CountLayout({ data, text }: CountLayoutProps) {
  return (
    <Box
      sx={{
        borderBottom: `1px solid ${colors.c1}`,
        paddingBottom: '16px',
      }}
    >
      <Typography
        component={'h3'}
        sx={{
          fontSize: '.875rem',
          fontWeight: 700,
        }}
      >
        {text}
      </Typography>
      <Typography
        component={'strong'}
        sx={{
          fontSize: '1.5rem',
          fontWeight: 600,
          fontFamily:
            '-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif',
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

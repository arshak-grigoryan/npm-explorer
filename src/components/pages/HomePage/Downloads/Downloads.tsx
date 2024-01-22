import { Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import ChartIcon from '../../../../assets/Chart.svg?react';
import appColors from '../../../../styles/colors';
import { npmApi } from '../../../../api/configs';
import DownloadsCount from './DownloadsCount';

export default function Downloads() {
  return (
    <Box
      sx={{
        p: 2,
        flex: 1,
      }}
    >
      <Box
        sx={{
          mb: 2,
          display: 'flex',
          gap: 1,
          alignItems: 'center',
        }}
      >
        <ChartIcon style={{ color: 'currentColor', height: 18 }} />
        <Typography> By the numbers</Typography>
      </Box>
      <Divider
        sx={{
          borderColor: appColors.c20,
        }}
      />
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          flexDirection: 'column',
          mt: 2,
        }}
      >
        <DownloadsCount url={npmApi.allPackagesLastDayDownloadsUrl} text="Downloads · Last Day" />
        <DownloadsCount url={npmApi.allPackagesLastWeekDownloadsUrl} text="Downloads · Last Week" />
        <DownloadsCount
          url={npmApi.allPackagesLastMonthDownloadsUrl}
          text="Downloads · Last Month"
        />
      </Box>
    </Box>
  );
}

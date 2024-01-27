import { Box } from '@mui/material';
import Divider from '@mui/material/Divider';
import ChartIcon from 'src/assets/Chart.svg?react';
import appColors from 'src/styles/colors';
import { npmApi } from 'src/api/configs';
import { text } from 'src/configs/configs';
import Typography from 'src/components/common/Typography/Typography';
import Count from './Count';

export default function Downloads() {
  return (
    <Box
      component={'section'}
      sx={{
        padding: '16px',
        flex: 7,
      }}
    >
      <Typography
        component={'h2'}
        sx={{
          marginBottom: '16px',
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        <ChartIcon style={{ color: 'currentColor', height: 18 }} />
        <Typography sx={{ fontWeight: 600, fontSize: '1.25rem' }}>{text.byTheNumbers}</Typography>
      </Typography>
      <Divider
        sx={{
          borderColor: appColors.c20,
        }}
      />
      <Box
        sx={{
          display: 'flex',
          gap: '24px',
          flexDirection: 'column',
          marginTop: '16px',
        }}
      >
        <Count url={npmApi.allPackagesLastDayDownloadsUrl} text={text.downloadsLastDay} />
        <Count url={npmApi.allPackagesLastWeekDownloadsUrl} text={text.downloadsLastWeek} />
        <Count url={npmApi.allPackagesLastMonthDownloadsUrl} text={text.downloadsLastMonth} />
      </Box>
    </Box>
  );
}

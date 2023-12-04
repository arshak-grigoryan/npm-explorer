import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MeterBar from '../MeterBar/MeterBar';

type Props = { score: { name: string; value: number; color: string }[]; max: number };

export default function Score({ score, max }: Props) {
  return (
    <Stack gap={0.5}>
      {score.map(({ name, value, color }) => {
        return (
          <Box
            display={'flex'}
            gap={1}
            alignItems={'center'}
            flexDirection={'row-reverse'}
            key={name}
          >
            <MeterBar value={value} max={max} color={color} />
            <Typography
              fontSize={'0.75rem'}
              fontWeight={600}
              color={'rgba(0, 0, 0, .9)'}
              lineHeight={1}
            >
              {name}
            </Typography>
          </Box>
        );
      })}
    </Stack>
  );
}

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { StyledSortButton } from './styled';
import { useSearchParams } from 'react-router-dom';

export default function SortOptions() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [popularity, setPopularity] = useState(Number(searchParams.get('popularity')) || 0);
  const [quality, setQuality] = useState(Number(searchParams.get('quality')) || 0);
  const [maintenance, setMaintenance] = useState(Number(searchParams.get('maintenance')) || 0);

  const isSortOptionsAvailable = popularity || quality || maintenance;

  const onPopularityChange = (value: number) => {
    setPopularity(value);
  };

  const onQualityChange = (value: number) => {
    setQuality(value);
  };

  const onMaintenanceChange = (value: number) => {
    setMaintenance(value);
  };

  const onSortClick = () => {
    if (isSortOptionsAvailable) {
      setSearchParams((params) => {
        params.set('popularity', String(popularity));
        return params;
      });
      setSearchParams((params) => {
        params.set('quality', String(quality));
        return params;
      });
      setSearchParams((params) => {
        params.set('maintenance', String(maintenance));
        return params;
      });
    }
  };

  return (
    <Box>
      <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} mb={2}>
        <Typography fontSize={'1rem'}>Sort Options</Typography>
        <StyledSortButton onClick={onSortClick} fontSize={'1rem'}>
          Sort
        </StyledSortButton>
      </Stack>
      <Typography gutterBottom fontSize={'0.875rem'}>
        Popularity
      </Typography>
      <Slider
        aria-label="Temperature"
        value={popularity}
        valueLabelDisplay="auto"
        step={0.1}
        marks
        min={0}
        max={1}
        onChange={(_, value) => onPopularityChange(value as number)}
        sx={{
          color: '#29abe2',
        }}
      />
      <Typography gutterBottom fontSize={'0.875rem'}>
        Quality
      </Typography>
      <Slider
        aria-label="Temperature"
        value={quality}
        valueLabelDisplay="auto"
        step={0.1}
        marks
        min={0}
        max={1}
        onChange={(_, value) => onQualityChange(value as number)}
        sx={{
          color: '#8956ff',
        }}
      />
      <Typography gutterBottom fontSize={'0.875rem'}>
        Maintenance
      </Typography>
      <Slider
        aria-label="Temperature"
        value={maintenance}
        valueLabelDisplay="auto"
        step={0.1}
        marks
        min={0}
        max={1}
        onChange={(_, value) => onMaintenanceChange(value as number)}
        sx={{
          color: '#cb3837',
        }}
      />
    </Box>
  );
}

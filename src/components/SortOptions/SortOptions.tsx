import Box from '@mui/material/Box';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { Slider, SliderLabel, StyledSortButton } from './styled';
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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: '1rem',
          }}
        >
          Sort Packages
        </Typography>
        <StyledSortButton
          onClick={onSortClick}
          sx={{
            fontSize: '0.875rem',
          }}
        >
          Sort
        </StyledSortButton>
      </Box>
      <SliderLabel text="Popularity" />
      <Slider
        aria-label="Popularity"
        value={popularity}
        onChange={(_, value) => onPopularityChange(value as number)}
        sx={{
          color: '#29abe2',
        }}
      />
      <SliderLabel text="Quality" />
      <Slider
        aria-label="Quality"
        value={quality}
        onChange={(_, value) => onQualityChange(value as number)}
        sx={{
          color: '#8956ff',
        }}
      />
      <SliderLabel text="Maintenance" />
      <Slider
        aria-label="Maintenance"
        value={maintenance}
        onChange={(_, value) => onMaintenanceChange(value as number)}
        sx={{
          color: '#cb3837',
        }}
      />
    </Box>
  );
}

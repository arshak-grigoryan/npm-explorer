import Box from '@mui/material/Box';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { useSearchParams } from 'react-router-dom';
import { npmRegistry } from 'src/api/configs';
import colors from 'src/styles/colors';
import useGetSearchParams from 'src/hooks/useGetSearchParams';
import { text } from 'src/configs/configs';
import { Slider, SliderLabel, StyledSortButton } from './styled';

export default function SortOptions() {
  const [, setSearchParams] = useSearchParams();

  const [popularity, setPopularity] = useState(
    Number(useGetSearchParams(npmRegistry.searchParams.popularity, 0)),
  );
  const [quality, setQuality] = useState(
    Number(useGetSearchParams(npmRegistry.searchParams.quality, 0)),
  );
  const [maintenance, setMaintenance] = useState(
    Number(useGetSearchParams(npmRegistry.searchParams.maintenance, 0)),
  );

  const isSortAvailable = popularity || quality || maintenance;

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
    if (isSortAvailable) {
      setSearchParams((params) => {
        params.set(npmRegistry.searchParams.popularity, String(popularity));
        return params;
      });
      setSearchParams((params) => {
        params.set(npmRegistry.searchParams.quality, String(quality));
        return params;
      });
      setSearchParams((params) => {
        params.set(npmRegistry.searchParams.maintenance, String(maintenance));
        return params;
      });
    }
  };

  return (
    <Box
      sx={{
        padding: '16px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}
      >
        <Typography
          sx={{
            fontSize: '1rem',
          }}
        >
          {text.sortPackages}
        </Typography>
        <StyledSortButton
          onClick={onSortClick}
          sx={{
            fontSize: '0.875rem',
          }}
        >
          {text.sort}
        </StyledSortButton>
      </Box>
      <SliderLabel text={text.popularity} />
      <Slider
        aria-label={text.popularity}
        value={popularity}
        onChange={(_, value) => onPopularityChange(value as number)}
        sx={{
          color: colors.c7,
        }}
      />
      <SliderLabel text={text.quality} />
      <Slider
        aria-label={text.quality}
        value={quality}
        onChange={(_, value) => onQualityChange(value as number)}
        sx={{
          color: colors.c8,
        }}
      />
      <SliderLabel text={text.maintenance} />
      <Slider
        aria-label={text.maintenance}
        value={maintenance}
        onChange={(_, value) => onMaintenanceChange(value as number)}
        sx={{
          color: colors.c9,
        }}
      />
    </Box>
  );
}

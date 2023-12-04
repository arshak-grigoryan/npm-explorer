import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useContext } from 'react';
import { SearchContext } from '../../context/Search/context';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { StyledSortButton } from './styled';

export default function SortOptions() {
  const {
    popularity,
    onPopularityChange,
    quality,
    onQualityChange,
    maintenance,
    onMaintenanceChange,
    onSortClick,
  } = useContext(SearchContext);
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

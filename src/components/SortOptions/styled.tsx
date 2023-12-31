import { Button } from '@mui/base';
import { Typography, styled } from '@mui/material';
import MuiSlider, { SliderProps } from '@mui/material/Slider';
import colors from '../../styles/colors';

export const StyledSortButton = styled(Button)`
  border: 1px solid ${colors.c16};
  padding: 6px 12px;
  &:hover {
    cursor: pointer;
  }
`;

export function Slider(props: SliderProps) {
  return (
    <MuiSlider
      min={0}
      max={1}
      step={0.1}
      valueLabelDisplay="auto"
      sx={{
        '& .MuiSlider-valueLabel': {
          background: colors.c15,
        },
        '& .MuiSlider-valueLabelCircle': {
          background: colors.c15,
        },
      }}
      slotProps={{
        thumb: { style: { boxShadow: 'none' } },
      }}
      {...props}
    />
  );
}

export function SliderLabel({ text }: { text: string }) {
  return (
    <Typography gutterBottom fontSize={'0.875rem'}>
      {text}
    </Typography>
  );
}

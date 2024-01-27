import { Button } from '@mui/base';
import { styled } from '@mui/material';
import MuiSlider, { SliderProps } from '@mui/material/Slider';
import colors from 'src/styles/colors';

export const StyledSortButton = styled(Button)`
  border: 1px solid ${colors.c16};
  padding: 6px 12px;
  &:hover {
    cursor: pointer;
  }
`;

export function Slider(props: SliderProps) {
  const { sx, ...restProps } = props;

  return (
    <MuiSlider
      min={0}
      max={1}
      step={0.1}
      valueLabelDisplay="auto"
      sx={{
        marginTop: '8px',
        '&.MuiSlider-root': {
          height: '2px',
        },
        '& .MuiSlider-track': {
          border: 'none',
        },
        '& .MuiSlider-valueLabel': {
          background: 'rgb(239, 239, 239)',
          color: colors.c2,
        },
        '& .MuiSlider-valueLabelCircle': {
          background: 'rgb(239, 239, 239)',
        },
        '& .MuiSlider-thumb': {
          boxShadow: 'none',
          width: '14px',
          height: '14px',
        },
        ...sx,
      }}
      {...restProps}
    />
  );
}

export const SliderLabel = styled('label')`
  font-size: 0.875rem;
  font-weight: 600;
`;

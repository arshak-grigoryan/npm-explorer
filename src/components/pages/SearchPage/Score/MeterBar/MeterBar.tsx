import * as SC from './styles';
import { MeterBarProps } from './types';

const width = 75;

export default function MeterBar({ color, value, max }: MeterBarProps) {
  const scorePercent = (value * 100) / max;

  return (
    <SC.MeterBar width={`${width}px`}>
      <SC.Bar width={`${Math.round((scorePercent * width) / 100)}px`} color={color}></SC.Bar>
    </SC.MeterBar>
  );
}

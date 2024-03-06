import * as SC from './styles';
import { MeterBarProps } from './types';

const width = 75;

export default function MeterBar({ value, max, option }: MeterBarProps) {
  const scorePercent = (value * 100) / max;

  return (
    <SC.MeterBar width={`${width}px`}>
      <SC.Bar
        width={`${Math.round((scorePercent * width) / 100)}px`}
        css={(theme) => ({ background: theme.staticColors.sortOptions[option] })}
      />
    </SC.MeterBar>
  );
}

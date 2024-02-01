import MeterBar from './MeterBar/MeterBar';
import { ScoreProps } from './types';
import * as SC from './styles';

export default function Score({ score, max }: ScoreProps) {
  return (
    <SC.Scores>
      {score.map(({ name, value, color }) => {
        return (
          <SC.Score key={name}>
            <MeterBar value={value} max={max} color={color} />
            <SC.Option>{name}</SC.Option>
          </SC.Score>
        );
      })}
    </SC.Scores>
  );
}

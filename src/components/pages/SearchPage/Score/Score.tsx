import MeterBar from './MeterBar/MeterBar';
import { ScoreProps } from './types';
import * as SC from './styles';

export default function Score({ score, max }: ScoreProps) {
  return (
    <SC.Scores>
      {score.map(({ name, value }) => {
        return (
          <SC.Score key={name}>
            <MeterBar value={value} max={max} option={name} />
            <SC.Option>{name}</SC.Option>
          </SC.Score>
        );
      })}
    </SC.Scores>
  );
}

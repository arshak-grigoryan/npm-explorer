import colors from 'src/styles/colors';
import Typography from 'src/components/common/Typography/Typography';
import MeterBar from './MeterBar/MeterBar';

type Props = { score: { name: string; value: number; color: string }[]; max: number };

export default function Score({ score, max }: Props) {
  return (
    <div>
      {score.map(({ name, value, color }) => {
        return (
          <div
            key={name}
            style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              flexDirection: 'row-reverse',
            }}
          >
            <MeterBar value={value} max={max} color={color} />
            <Typography
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                color: colors.c2,
              }}
            >
              {name}
            </Typography>
          </div>
        );
      })}
    </div>
  );
}

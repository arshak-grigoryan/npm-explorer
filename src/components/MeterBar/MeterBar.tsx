type Props = {
  max: number;
  value: number;
  color: string;
};

const width = 75;

export default function MeterBar({ color, value, max }: Props) {
  const scorePercent = (value * 100) / max;
  return (
    <div
      style={{
        position: 'relative',
        width: width,
        background: 'rgba(0,0,0,0.1)',
        height: 2,
      }}
    >
      <div
        style={{
          position: 'absolute',
          height: 2,
          background: color,
          width: `${Math.round((scorePercent * width) / 100)}px`,
        }}
      ></div>
    </div>
  );
}

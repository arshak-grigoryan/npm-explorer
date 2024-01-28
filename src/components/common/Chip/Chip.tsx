import colors from 'src/styles/colors';

export default function Chip({
  keyword,
  backgroundColor,
}: {
  keyword: string;
  backgroundColor: string;
}) {
  return (
    <div
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = colors.c1)}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = colors.c5)}
      style={{
        backgroundColor,
        borderRadius: '4px',
        padding: '4px 8px',
        height: 'auto',
        fontSize: '0.875rem',
        color: colors.c2,
        lineHeight: '1rem',
      }}
    >
      {keyword}
    </div>
  );
}
